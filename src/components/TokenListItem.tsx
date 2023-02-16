import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getTokenPrice } from "../api/tokenPrice";
import { TOKENS } from "../constants/tokens";
import { QueryResult } from "../types/queryResult";
import { TOKEN } from "../types/token";

interface Props {
  token: TOKEN;
  onClick: (token: TOKEN) => void;
}

export const TokenListItem = ({ token, onClick }: Props) => {
  const { data } = useQuery<QueryResult>(["token", token], () => getTokenPrice(TOKENS[token]));
  return (
    <TokenItem onClick={() => onClick(token)}>
      <TokenCode>
        <span>{token}</span>
        <span>{TOKENS[token]}</span>
      </TokenCode>
      <TokenPrice>{data && data[TOKENS[token]]?.usd}</TokenPrice>
    </TokenItem>
  );
};

const TokenItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem;
  &:hover {
    background-color: #333;
    cursor: pointer;
  }
`;
const TokenCode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  span:last-child {
    font-size: 0.6rem;
    color: #666;
  }
`;
const TokenPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.5rem;
`;

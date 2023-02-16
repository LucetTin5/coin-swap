import { useState, useEffect } from "react";
import styled from "styled-components";
import { TOKEN } from "../types/token";
import { TOKENS_ARRAY } from "../constants/tokens";
import { TokenListItem } from "./TokenListItem";
import { useSavedTokens } from "../hooks/useSavedTokens";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props {
  toggleModal: () => void;
  setToken: React.Dispatch<React.SetStateAction<TOKEN>>;
}

export const SelectModal = ({ toggleModal, setToken }: Props) => {
  const [tokens, setTokens] = useState(TOKENS_ARRAY.slice());
  const [search, setSearch] = useState("");
  const savedTokens = useSavedTokens();
  const changeTokenHandler = (token: TOKEN) => {
    setToken(token);
    useLocalStorage(token);
    toggleModal();
  };
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search === "") {
        return setTokens(TOKENS_ARRAY.slice());
      }
      const filteredTokens = tokens.filter(token => token.includes(search));
      if (filteredTokens.length === 0) {
        alert("검색 결과가 없습니다");
      } else {
        setTokens(filteredTokens);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <Dimmed onClick={toggleModal} />
      <ModalWrapper>
        <ModalHeader>
          <span>토큰 선택</span>
          <ModalCloseButton onClick={toggleModal}>X</ModalCloseButton>
        </ModalHeader>

        <ModalSearchInput placeholder="이름 검색" value={search} onChange={onSearchChange} />

        <SavedTokens>
          {savedTokens &&
            savedTokens.map(token => (
              <SavedToken key={token} onClick={() => changeTokenHandler(token)}>
                {token}
              </SavedToken>
            ))}
        </SavedTokens>

        <TokenListWrapper>
          <TokenList>
            {tokens.map(token => (
              <TokenListItem key={token} token={token} onClick={changeTokenHandler} />
            ))}
          </TokenList>
        </TokenListWrapper>
        <TokenListConfig onClick={() => alert("준비 중입니다")}>토큰 목록 관리</TokenListConfig>
      </ModalWrapper>
    </>
  );
};

const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
const ModalWrapper = styled.div`
  width: 400px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #222;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 1rem;
  border-radius: 1.2rem;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const ModalCloseButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const ModalSearchInput = styled.input`
  width: 100%;
  height: 3rem;
  background-color: #333;
  border-radius: 0.6rem;
  color: #fff;
  font-size: 1.2rem;
  border: 1px solid #777;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;
const SavedTokens = styled.div`
  min-height: 10%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
`;
const SavedToken = styled.div`
  display: inline-block;
  border: 1px solid #777;
  color: #fff;
  width: max-content;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  padding: 0.2rem 0.4rem;
  &:hover {
    cursor: pointer;
    background-color: #333;
  }
`;
const TokenListWrapper = styled.div`
  height: 60%;
  margin-bottom: 0.5rem;
`;
const TokenList = styled.ul`
  height: 100%;
  overflow-y: scroll;
`;

const TokenListConfig = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  color: #4267b2;
  background-color: #333;
  cursor: pointer;
`;

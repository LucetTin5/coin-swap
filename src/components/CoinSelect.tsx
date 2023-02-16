import styled from "styled-components";

interface Props {
  currentToken: string;
  openModal: () => void;
}

export const CoinSelect = ({ currentToken, openModal }: Props) => {
  return (
    <SelectWrapper onClick={openModal}>
      <span>{currentToken}</span>
      <span>⬇️</span>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  max-width: 25%;
  width: max-content;
  margin-top: 0.5rem;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-radius: 1.2rem;
  font-size: 1.3rem;
  background-color: #666;
  color: #fff;
  cursor: pointer;
`;

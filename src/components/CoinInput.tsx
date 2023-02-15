import styled from "styled-components";
import { CoinSelect } from "./CoinSelect";

export const CoinInput = () => {
  return (
    <InputWrapper>
      <Input placeholder="0.0" />
      <CoinSelect openModal={() => {}} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: #555;
  border-radius: 1.2rem;
  margin-bottom: 0.2rem;
  padding-top: 0.3rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 70%;
  height: 70%;
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  padding: 0 1.5rem;
`;

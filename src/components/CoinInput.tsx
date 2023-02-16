import { useState } from "react";
import styled from "styled-components";
import { CoinSelect } from "./CoinSelect";
import { SelectModal } from "./SelectModal";
import { TOKEN } from "../types/token";

interface Props {
  token: TOKEN;
  setToken: React.Dispatch<React.SetStateAction<TOKEN>>;
  count: string;
  setCount: React.Dispatch<React.SetStateAction<string>>;
  unitPrice: number;
  type: "A" | "B";
  updateFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CoinInput = ({ token, count, setCount, setToken, unitPrice, type, updateFlag }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(cur => !cur);
  };
  const tokenCountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const oneDotOnlyPattern = /^[0-9]*\.?[0-9]*$/;
    const patternUnder10 = /^[0-9]*\.?[0-9]{0,10}$/;
    if (oneDotOnlyPattern.test(value)) {
      if (patternUnder10.test(value)) {
        setCount(e.target.value);
        if (type === "A") updateFlag(true);
        else updateFlag(false);
      } else {
        alert("소수점 아래 10자리까지만 입력 가능합니다");
      }
    } else {
      alert("숫자만 입력 가능합니다");
    }
  };
  return (
    <>
      <InputWrapper>
        <TokenCountWrapper>
          <Input value={count} onChange={tokenCountChangeHandler} />
          {Number(count) !== 0 && <CurrentPrice>{Number(count) * unitPrice}</CurrentPrice>}
        </TokenCountWrapper>
        <CoinSelect openModal={toggleModal} currentToken={token} />
      </InputWrapper>
      {isModalOpen && <SelectModal toggleModal={toggleModal} setToken={setToken} />}
    </>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: #555;
  border-radius: 1.2rem;
  margin-bottom: 0.4rem;
  padding-top: 0.3rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
`;

const TokenCountWrapper = styled.div`
  width: 70%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 70%;
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  padding: 0 1.5rem;
`;

const CurrentPrice = styled.span`
  height: 30%;
  color: #888;
  font-size: 0.8rem;
  padding: 0.2rem 1.5rem;
  &::before {
    content: "$";
  }
`;

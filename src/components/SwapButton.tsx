import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const SwapButton = ({ isActive }: Props) => {
  const onClickHandler = () => {
    if (isActive) {
      alert("준비 중입니다");
    }
  };
  return (
    <Button className={isActive ? "active" : ""} disabled={!isActive} onClick={onClickHandler}>
      {isActive ? "스왑" : "금액을 입력하세요"}
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 0.5rem;
  background-color: #555;
  border: none;
  border-radius: 1.2rem;
  font-size: 1.5rem;
  color: #999;
  &.active {
    background-color: #4267b2;
    color: #fff;
    cursor: pointer;
  }
`;

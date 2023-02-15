import styled from "styled-components";

interface Props {
  isActive: boolean;
  onClick: () => void;
}

export const SwapButton = ({ isActive, onClick }: Props) => {
  return (
    <Button className={isActive ? "active" : ""} onClick={onClick} disabled={!isActive}>
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

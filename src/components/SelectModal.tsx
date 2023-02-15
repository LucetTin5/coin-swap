import styled from "styled-components";

export const SelectModal = () => {
  return (
    <>
      <Dimmed />
      <ModalWrapper>
        <ModalHeader>
          <span>토큰 선택</span>
          <ModalCloseButton onClick={() => {}}>X</ModalCloseButton>
        </ModalHeader>

        <ModalSearchInput placeholder="이름 검색" />

        <SavedTokens>
          <SavedToken>ETH</SavedToken>
        </SavedTokens>

        <TokenListWrapper>
          <TokenList>
            <TokenItem>
              <TokenImageWrapper>
                <TokenImage />
              </TokenImageWrapper>
              <TokenCode>
                <span>ETH</span>
                <span>Ether</span>
              </TokenCode>
              <TokenPrice>0.1698</TokenPrice>
            </TokenItem>
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
  height: 10%;
`;
const SavedToken = styled.div`
  display: inline-block;
  border: 1px solid #777;
  color: #fff;
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
const TokenItem = styled.li`
  display: grid;
  grid-template-columns: 15% 1fr 1fr;
  padding: 0.4rem 0;
  &:hover {
    background-color: #333;
  }
`;
const TokenImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TokenImage = styled.img`
  width: 2rem;
  height: 2rem;
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

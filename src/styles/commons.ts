import styled from "styled-components";

export const AppContainer = styled.main`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const SwapContainer = styled.div`
  width: 100%;
  height: 500px;
  /* height: max-cotent; */
  padding: 1rem;
  background-color: #222;
  border-radius: 1rem;
`;

export const SwapHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SettingButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

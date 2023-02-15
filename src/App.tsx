import { Helmet } from "react-helmet";
import { CoinInput } from "./components/CoinInput";
import { SelectModal } from "./components/SelectModal";
import { SwapButton } from "./components/SwapButton";
import { AppContainer, SettingButton, SwapContainer, SwapHeader } from "./styles/commons";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Coin Swap</title>
      </Helmet>
      <GlobalStyles />
      <AppContainer>
        <SwapContainer>
          <SwapHeader>
            <span>스왑</span>
            <SettingButton onClick={() => alert("준비 중입니다")}>⚙️</SettingButton>
          </SwapHeader>
          <CoinInput></CoinInput>
          <CoinInput></CoinInput>
          {"" && <span></span>}
          <SwapButton isActive={false} onClick={() => {}} />
        </SwapContainer>
        {/* <SelectModal /> */}
      </AppContainer>
    </>
  );
};

export default App;

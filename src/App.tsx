import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { CoinInput } from "./components/CoinInput";
import { SwapButton } from "./components/SwapButton";
import { AppContainer, Arrow, ExchangeRate, SettingButton, SwapContainer, SwapHeader } from "./styles/commons";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TOKEN } from "./types/token";
import { getTokenPrice } from "./api/tokenPrice";
import { TOKENS } from "./constants/tokens";
import { QueryResult } from "./types/queryResult";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [tokenA, setTokenA] = useState<TOKEN>("DAI");
  const [tokenB, setTokenB] = useState<TOKEN>("USDC");
  const [tokenACount, setTokenACount] = useState("0.0");
  const [tokenBCount, setTokenBCount] = useState("0.0");
  const [unitPriceA, setUnitPriceA] = useState(0);
  const [unitPriceB, setUnitPriceB] = useState(0);
  const [updatingCountA, setUpdatingCountA] = useState(false);
  const { data: dataOfTokenA } = useQuery<QueryResult>(["token", tokenA], () => getTokenPrice(TOKENS[tokenA]));
  const { data: dataOfTokenB } = useQuery<QueryResult>(["token", tokenB], () => getTokenPrice(TOKENS[tokenB]));

  useEffect(() => {
    if (dataOfTokenA !== undefined) {
      setUnitPriceA(dataOfTokenA[TOKENS[tokenA]]?.usd);
    }
    if (dataOfTokenB !== undefined) {
      setUnitPriceB(dataOfTokenB[TOKENS[tokenB]]?.usd);
    }
  }, [dataOfTokenA, dataOfTokenB]);

  useEffect(() => {
    if (tokenACount !== "0.0" && tokenBCount !== "0.0") {
      setIsActive(true);
    }
  }, [tokenACount, tokenBCount]);

  useEffect(() => {
    if (updatingCountA && tokenACount !== "0.0") {
      setTokenBCount(((Number(tokenACount) * unitPriceA) / unitPriceB).toFixed(10));
    }
  }, [updatingCountA, tokenACount, unitPriceA, unitPriceB]);

  useEffect(() => {
    if (!updatingCountA && tokenBCount !== "0.0") {
      setTokenACount(((Number(tokenBCount) * unitPriceB) / unitPriceA).toFixed(10));
    }
  }, [updatingCountA, tokenBCount, unitPriceA, unitPriceB]);

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
          <CoinInput
            token={tokenA}
            setToken={setTokenA}
            count={tokenACount}
            setCount={setTokenACount}
            unitPrice={unitPriceA}
            type={"A"}
            updateFlag={setUpdatingCountA}
          />
          <Arrow />
          <CoinInput
            token={tokenB}
            setToken={setTokenB}
            count={tokenBCount}
            setCount={setTokenBCount}
            unitPrice={unitPriceB}
            type={"B"}
            updateFlag={setUpdatingCountA}
          />
          {tokenA && tokenB && (
            <ExchangeRate>
              1 {tokenB} = {unitPriceB / unitPriceA} {tokenA} ($ {unitPriceB})
            </ExchangeRate>
          )}
          <SwapButton isActive={isActive} />
        </SwapContainer>
      </AppContainer>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;

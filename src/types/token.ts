export type TOKEN = "ETH" | "USDT" | "USDC" | "DAI" | "AAVE" | "WBTC" | "AXS" | "COMP" | "CRV" | "ENS";
export type TOKEN_ID =
  | "ethereum"
  | "tether"
  | "usd-coin"
  | "dai"
  | "aave"
  | "bitcoin"
  | "axie-infinity"
  | "compound-coin"
  | "curve-dao-token"
  | "ethereum-name-service";
export type TOKENS_OBJECT = {
  [K in TOKEN]: TOKEN_ID;
};

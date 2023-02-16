import { TOKEN_ID } from "./token";

export type QueryResult = {
  [key in TOKEN_ID]: {
    usd: number;
  };
};

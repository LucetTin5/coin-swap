import { TOKEN } from "../types/token";

export const useSavedTokens = (): TOKEN[] => {
  const tokens = localStorage.getItem("tokens");
  if (tokens) {
    return JSON.parse(tokens);
  }
  return [];
};

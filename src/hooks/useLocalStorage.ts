import { TOKEN } from "../types/token";
import { useSavedTokens } from "./useSavedTokens";

export const useLocalStorage = (token: TOKEN) => {
  const savedTokens = useSavedTokens();
  if (savedTokens.length >= 7) {
    const newSavedTokens = [...savedTokens];
    if (newSavedTokens.includes(token)) {
      localStorage.setItem("tokens", JSON.stringify(newSavedTokens));
    } else {
      newSavedTokens.shift();
      newSavedTokens.push(token);
      localStorage.setItem("tokens", JSON.stringify(newSavedTokens));
    }
  } else {
    const newSavedTokens = [...savedTokens];
    if (newSavedTokens.includes(token)) {
      localStorage.setItem("tokens", JSON.stringify(newSavedTokens));
    } else {
      newSavedTokens.push(token);
      localStorage.setItem("tokens", JSON.stringify(newSavedTokens));
    }
  }
};

import axios from "axios";
import { COIN_PRICE } from "../constants/api";

export const getTokenPrice = async (token: string) => {
  const response = await axios.get(COIN_PRICE(token));
  return response.data;
};

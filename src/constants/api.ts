const API_BASE = "https://api.coingecko.com/api/v3/";

export const COIN_PRICE = (id: string) => `${API_BASE}simple/price?ids=${id}&vs_currencies=usd`;

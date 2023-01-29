import axios from "axios";

export const Get200Coins = () => {
  const coins = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=1&sparkline=false"
    )
    .then((response) => {
      console.log("RESPONSE>>>", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
    });

  return coins;
};

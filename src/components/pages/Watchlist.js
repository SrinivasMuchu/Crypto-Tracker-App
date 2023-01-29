
import React, { useEffect, useState } from "react";
import Button from "../Common/Button/Button";
import TitleCard from "../Common/TopHeader/TitleCard";
import LabTabs from '../DashboardComponents/Tabs/Tabs';
import {Get200Coins} from "../Functions/Get200Coins"

function Watchlist() {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await Get200Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div>
      <TitleCard />
      {watchlist?.length > 0 ? (
        <LabTabs coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Watchlist
import React, { useEffect, useState } from "react";
import Info from "../CoinPageComponents/Information/Info";
import LineChart from "../CoinPageComponents/Chart/LineChart";

import ToggleComponents from "../CoinPageComponents/ToggleButtons/Toggle";
import Footer from "../Common/FooterBox/Footer";
import TitleCard from "../Common/TopHeader/TitleCard";
import Loading from "../Common/Loading/Loading";
import List from "../DashboardComponents/List/List";
import { GetCoinData } from "../Functions/GetcoinData";
import {Get200Coins} from "../Functions/Get200Coins"
import { GetPrices } from "../Functions/GetPrices";
import { settingChartData } from "../Functions/SettingChartData";
import { settingCoinObject } from "../Functions/SettingCoinObject";
import SelectCoins from "../SelectCoins/SelectCoins";

function Compare() {
    const [allCoins, setAllCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    // id states
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    // data states
    const [coin1Data, setCoin1Data] = useState({});
    const [coin2Data, setCoin2Data] = useState({});
    // days state
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState("prices");
    const [chartData, setChartData] = useState({
      labels: [],
      datasets: [],
    });
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      setLoading(true);
      const coins = await Get200Coins();
      if (coins) {
        setAllCoins(coins);
        const data1 = await GetCoinData(crypto1);
        const data2 = await GetCoinData(crypto2);
        settingCoinObject(data1, setCoin1Data);
        settingCoinObject(data2, setCoin2Data);
        if (data1 && data2) {
          // getPrices
          const prices1 = await GetPrices(crypto1, days, priceType);
          const prices2 = await GetPrices(crypto2, days, priceType);
          settingChartData(setChartData, prices1, prices2);
          setLoading(false);
        }
      }
    };
  
    const onCoinChange = async (e, isCoin2) => {
      setLoading(true);
      if (isCoin2) {
        const newCrypto2 = e.target.value;
        // crypto2 is being changed
        setCrypto2(newCrypto2);
        // fetch coin2 data
        const data2 = await GetCoinData(newCrypto2);
        settingCoinObject(data2, setCoin2Data);
        // fetch prices again
        const prices1 = await GetPrices(crypto1, days, priceType);
        const prices2 = await GetPrices(newCrypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
      } else {
        const newCrypto1 = e.target.value;
        // crypto1 is being changed
        setCrypto1(newCrypto1);
        // fetch coin1 data
        const data1 = await GetCoinData(newCrypto1);
        settingCoinObject(data1, setCoin1Data);
        // fetch coin prices
        const prices1 = await GetPrices(newCrypto1, days, priceType);
        const prices2 = await GetPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
      }
      setLoading(false);
    };
  
    const handleDaysChange = async (e) => {
      const newDays = e.target.value;
      setLoading(true);
      setDays(newDays);
      const prices1 = await GetPrices(crypto1, newDays, priceType);
      const prices2 = await GetPrices(crypto2, newDays, priceType);
      settingChartData(setChartData, prices1, prices2);
      setLoading(false);
    };
  
    const handlePriceTypeChange = async (e) => {
      const newPriceType = e.target.value;
      setLoading(true);
      setPriceType(newPriceType);
      const prices1 = await GetPrices(crypto1, days, newPriceType);
      const prices2 = await GetPrices(crypto2, days, newPriceType);
      settingChartData(setChartData, prices1, prices2);
      setLoading(false);
    };
  
    return (
      <div>
        <TitleCard />
        {loading || !coin1Data?.id || !coin2Data?.id ? (
          <Loading />
        ) : (
          <>
            <SelectCoins
              allCoins={allCoins}
              crypto1={crypto1}
              crypto2={crypto2}
              onCoinChange={onCoinChange}
              days={days}
              handleDaysChange={handleDaysChange}
            />
            <div className="grey-wrapper">
              <List coin={coin1Data} />
            </div>
            <div className="grey-wrapper">
              <List coin={coin2Data} />
            </div>
            <div className="grey-wrapper">
              <ToggleComponents
                priceType={priceType}
                handlePriceTypeChange={handlePriceTypeChange}
              />
              <LineChart chartData={chartData} multiAxis={true} />
            </div>
            <Info title={coin1Data.name} desc={coin1Data.desc} />
            <Info title={coin2Data.name} desc={coin2Data.desc} />
          </>
        )}
        <Footer/>
      </div>
    );
  }
  
  export default Compare;
  
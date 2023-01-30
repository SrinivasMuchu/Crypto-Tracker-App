import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../CoinPageComponents/Information/Info";
import LineChart from "../CoinPageComponents/Chart/LineChart";
import SelectDays from "../CoinPageComponents/DateRange/Days";
import ToggleComponents from "../CoinPageComponents/ToggleButtons/Toggle";
import Button from "../Common/Button/Button";
import TitleCard from "../Common/TopHeader/TitleCard";
import Footer from '../Common/FooterBox/Footer'
import Loading from "../Common/Loading/Loading";
import List from "../DashboardComponents/List/List";
import { GetCoinData } from "../Functions/GetcoinData";
import { GetPrices } from "../Functions/GetPrices";
import { settingChartData } from "../Functions/SettingChartData";
import { settingCoinObject } from "../Functions/SettingCoinObject";

function Coin() {
    const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    setLoading(true);
    let coinData = await GetCoinData(id, setError);
    console.log("Coin DATA>>>>", coinData);
    settingCoinObject(coinData, setCoin);
    if (coinData) {
      const prices = await GetPrices(id, days, priceType, setError);
      if (prices) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await GetPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await GetPrices(id, days, event.target.value, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  return (
    <>
      <TitleCard />
      {!error && !loading && coin.id ? (
        <>
          <div className="grey-wrapper">
            <List coin={coin} delay={0.5} />
          </div>
          <div className="grey-wrapper">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} />
          </div>
          <Info title={coin.name} desc={coin.desc} />
        </>
      ) : error ? (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, Couldn't find the coin you're looking for 😞
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
      ) : (
        <TitleCard />
        
      )}
      <Footer/>
    </>
  );
}

export default Coin
import * as React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import Loading from '../Common/Loading/Loading';
import TitleCard from '../Common/TopHeader/TitleCard';
import Footer from '../Common/FooterBox/Footer';
import Search from '../DashboardComponents/SearchBar/Search';
import LabTabs from '../DashboardComponents/Tabs/Tabs';
import PageDivision from '../DashboardComponents/PageDivision/PageDivision';
import TopButton from '../Common/TopButton/TopButton';

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  useEffect(() => {
    // Get 100 Coins
    getData();
  }, []);
    const getData=()=>{
        setLoading(true);
        axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=1&sparkline=false"
        )
        .then((res) => {
          console.log("RES>>>", res.data);
          setCoins(res.data);
          setPaginatedCoins(res.data.slice(0, 10));
         // setPaginatedCoins(response.data.slice(0, 10));
          setLoading(false);
        })
        .catch((error) => {
          console.log("ERROR>>>");
        });
    }
    const handleChange = (e) => {
      setSearch(e.target.value);
      console.log(e.target.value);
    };
    var filteredCoins = coins.filter(
      (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
    );

    const handlePageChange = (event, value) => {
      setPage(value);
      var initialCount = (value - 1) * 10;
      setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
    };

  return (
    <div>
        {loading ?(<Loading/>):
        (<>
        <TitleCard/>
        <Search search={search} handleChange={handleChange} />
        <LabTabs
             coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />{!search && (
            <PageDivision
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>)}
        <TopButton/>
        <Footer/>
    </div>
  )
}

export default Dashboard

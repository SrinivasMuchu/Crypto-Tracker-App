import React from 'react';
import './Grid.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';


function Grid({ coin, delay }) {
  return (
    <a href={`/coin/${coin.id}`}>
      <div
        className={`grid ${coin.price_change_percentage_24h < 0 && "grid-red"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="img-flex">
          <img src={coin.image} className="coin-image" alt='' />
          <div className="info-flex">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        {coin.price_change_percentage_24h >= 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon">
              <TrendingUpIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon red">
              <TrendingDownIcon />
            </div>
          </div>
        )}
        {coin.price_change_percentage_24h >= 0 ? (
          <p className="current-price">
           ₹ {coin.current_price.toLocaleString()}
          </p>
        ) : (
          <p className="current-price-red">
           ₹ {coin.current_price.toLocaleString()}
          </p>
        )}
        <p className="coin-name">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="coin-name">
          Market Capital :₹ {coin.market_cap.toLocaleString()}
        </p>
      </div>
    </a>
  );
}

export default Grid;

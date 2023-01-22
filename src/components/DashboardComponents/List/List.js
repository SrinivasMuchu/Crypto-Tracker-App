import React from 'react'
import './List.css'
import { Tooltip } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

function List({ coin, delay }) {
  return (
    <a href={`/coin/${coin.id}`}>
      <tr
        className="list-row"
      >
        <Tooltip title="Coin Image">
          <td className="td-img">
            <img src={coin.image} className="coin-image coin-image-td" alt=''/>
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td className="td-info">
            <div className="info-flex">
              <p className="coin-symbol td-p">{coin.symbol}</p>
              <p className="coin-name td-p">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip
          title="Coin Price Percentage In 24hrs"
          placement="bottom-start"
        >
          {coin.price_change_percentage_24h >= 0 ? (
            <td>
              <div className="chip-flex">
                <div className="price-chip">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="chip-icon td-chip-icon">
                  <TrendingUpIcon />
                </div>
              </div>
            </td>
          ) : (
            <td>
              <div className="chip-flex">
                <div className="price-chip red">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="chip-icon td-chip-icon red">
                  <TrendingDownIcon />
                </div>
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Coin Price In USD" placement="bottom-end">
          {coin.price_change_percentage_24h >= 0 ? (
            <td className="current-price  td-current-price">
             ₹ {coin.current_price.toLocaleString()}
            </td>
          ) : (
            <td className="current-price-red td-current-price">
             ₹ {coin.current_price.toLocaleString()}
            </td>
          )}
        </Tooltip>
        <Tooltip title="Coin Total Volume" placement="bottom-end">
          <td className="coin-name td-totalVolume">
            {coin.total_volume.toLocaleString()}
          </td>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <td className="coin-name td-marketCap">
           ₹ {coin.market_cap.toLocaleString()}
          </td>
        </Tooltip>
        {/* <td className="coin-name mobile">${convertNumber(coin.market_cap)}</td> */}
      </tr>
    </a>
  )
}

export default List

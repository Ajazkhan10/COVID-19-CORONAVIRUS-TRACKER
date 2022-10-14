import React, { useEffect, useState } from "react";
import "./Covid.css";
export default function Covid() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const dataall = await res.json();
      // console.log(dataall.statewise[0]);
      setData(dataall.statewise[0]);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  });
  return (
    <div className="body">
      <h1>Live</h1>
      <h1>COVID-19 CORONAVIRUS TRACKER</h1>
      <ul>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span> OUR </span> COUNTRY
              </p>
              <p className="card_total card_small">PAKISTAN</p>
            </div>
          </div>
        </li>

        <li className="card card1">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span> TOTAL </span> RECOVERED
              </p>
              <p className="card_total card_small">{data.recovered}</p>
            </div>
          </div>
        </li>
        <li className="card card2">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span> TOTAL </span> CONFORMED
              </p>
              <p className="card_total card_small">{data.confirmed}</p>
            </div>
          </div>
        </li>
        <li className="card card3">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span> TOTAL </span> DEATHS
              </p>
              <p className="card_total card_small">{data.deaths}</p>
            </div>
          </div>
        </li>
        <li className="card card4">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span> TOTAL </span> ACTIVE
              </p>
              <p className="card_total card_small">{data.active}</p>
            </div>
          </div>
        </li>
        <li className="card card5">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span> LAST </span> UPDATED
              </p>
              <p className="card_total card_small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>
        <li className="card card6">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span> LAST </span> DELTACONFORMED
              </p>
              <p className="card_total card_small">{data.deltaconfirmed}</p>
            </div>
          </div>
        </li>
        <li className="card card7">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span> LAST </span> DELTADEATHS
              </p>
              <p className="card_total card_small">{data.deltadeaths}</p>
            </div>
          </div>
        </li>
        <li className="card card8">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span> LAST </span> DELTARECOVERED
              </p>
              <p className="card_total card_small">{data.deltarecovered}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

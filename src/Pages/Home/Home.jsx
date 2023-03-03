import React from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Widgets } from "../../Components/Widgets/Widgets";
import "./Home.scss";
import { Featured } from "../../Components/Featured/Featured";
import { Chart } from "../../Components/Chart/Chart";
import { Tablee } from "../../Components/Table/Table";

export const Home = () => {
  return (

      <div className="home">
        <Sidebar className="claa"/>
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Last ^ Months (Revenue)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Tablee/>
          </div>
        </div>
      </div>

  );
};

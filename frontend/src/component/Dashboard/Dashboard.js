import React, { useState } from "react";
import "./Dashboard.css";
import SalesChart from "../SalesChart";
import TopSelling from "../TopSelling";
import TotalSales from "../TotalSales";

const Dashboard = ({ userName, onLogout }) => {
  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data._id),
  //   datasets: [
  //     {
  //       label: "Total Sales",
  //       data: UserData.map((data) => data.totalSales),
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  return (
    <div className="dashboard-container">
      <div class="header">
        <p>User: {userName}</p>
      </div>
      <div className="main">
        <h1 className="welcome">WELCOME TO DASHBOARD</h1>
        <div className="total-sales">
          <TotalSales />
        </div>
        <div className="chart-container">
          <SalesChart />
        </div>
        <div className="chart-container">
          <TopSelling />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

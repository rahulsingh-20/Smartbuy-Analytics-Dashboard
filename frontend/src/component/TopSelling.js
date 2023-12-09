// SalesChart.js
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

const TopSelling = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/product/topselling?limit=10");
        const topSellingData = response.data.topselling;

        // Extract _id and totalSales arrays from the data
        const ids = topSellingData.map((item) => item.name);
        const sales = topSellingData.map((item) => item.sales);

        // Set chart data
        setChartData({
          labels: ids,
          datasets: [
            {
              label: "Total Sales",
              data: sales,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h2>Sales of top 10 products:</h2>
      {Object.keys(chartData).length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default TopSelling;

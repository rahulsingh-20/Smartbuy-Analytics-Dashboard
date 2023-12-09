import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalSales = () => {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/product/totalsales");
        const { totalSales } = response.data;

        setNumber(totalSales);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      {number !== null ? (
        <>
          <p> Total sales of all time is: </p>
          <p style={{ fontWeight: "bold", fontSize: 8 + "vh" }}>
            £ {number}
          </p>{" "}
        </>
      ) : (
        <p>Loading number...</p>
      )}
    </div>
  );
};

export default TotalSales;

import React, { useState } from "react";
import { useEffect } from "react";
import Test from "./jsonToTable.jsx";

const App = () => {
  const [data, setData] = useState();

  const fetchFata = async () => {
    let response = await fetch("http://universities.hipolabs.com/search?country=Ireland");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let res = await response.json();
    setData(res);
  };

  useEffect(() => {
    fetchFata();
  }, []);

  return <Test data={data} />;
};

export default App;

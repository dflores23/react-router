import {useState, useEffect} from "react";

const Dashboard = (props) => {
  // Our api key 
  const apiKey = "13814f4acb2fc0c1af3575e0e7070b44";
  // Grabbing the Currency symbol from the URL Param
  const symbol = props.match.params.symbol;
  // Using the other two variables to create our URL
  const url = `https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=${apiKey}`;

  //state to hold the coin data
  const [stock, setStock] = useState("null");

  //function to fetch coin data
  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
  };

  // useEffect to call getStock on page load
  useEffect(() => {
    getStock()
}, [])

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.asset_id_base} / {stock.asset_id_quote}
        </h1>
        <h2>${stock.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return stock ? loaded() : loading();
};

export default Dashboard;
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, original, comedy } from "./Urls";
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <RowPost url={action} title="Netflix original" isSize={false} />
      <RowPost url={original} title="Actions" isSize={true} />
      <RowPost url={comedy} title="Comedy" isSize={true} />
    </div>
  );
};

export default App;

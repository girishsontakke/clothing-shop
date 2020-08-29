import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h1> {`hats page`.toUpperCase()} </h1>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </>
  );
};

export default App;

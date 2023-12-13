import SearchHeader from "components/SearchHeader";
import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchHeader />
      <Outlet />
    </div>
  );
}

export default App;

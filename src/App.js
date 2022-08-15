import React from "react";
import MainLayout from "./components/MainLayout";
import NavBar from "./components/Header/NavBar";

import "./App.css"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="child">
        <NavBar />
        <MainLayout />
        <Footer />
      </div>
    </div>
  );
}

export default App;

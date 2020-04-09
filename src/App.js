import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Infographic from "./components/Infographic";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Infographic />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;

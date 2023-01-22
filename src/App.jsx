// import { useState } from 'react'
import { Container } from "react-bootstrap";
import "./App.css";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Lists from "./components/Lists";

function App() {
  return (
    <div className="app">
      <Header />
      <Container className="mt-4 shadow-lg p-2">
        <Buttons />
        <Lists />
      </Container>
    </div>
  );
}

export default App;

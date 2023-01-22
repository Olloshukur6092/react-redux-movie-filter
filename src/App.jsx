// import { useState } from 'react'
import { Container } from "react-bootstrap";
import "./App.css";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Input from "./components/Input";
import Lists from "./components/Lists";

function App() {
  return (
    <div className="app">
      <Header />
      <Container className="mt-4 shadow-lg p-2">
        <div className="d-flex justify-content-between">
          <Buttons />
          <Input />
        </div>
        <Lists />
      </Container>
    </div>
  );
}

export default App;

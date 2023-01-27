import React from "react";
import { Container } from "react-bootstrap";
import Buttons from "./Buttons";
import Input from "./Input";
import Lists from "./Lists";

const Home = () => {
  return (
    <Container className="mt-4 shadow-lg p-2">
      <div className="d-flex justify-content-between">
        <Buttons />
        <Input />
      </div>
      <Lists />
    </Container>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Custom404page = () => {
  return (
    <Container>
      <img src="images/12.jpg" alt="" />
      <Details>
        <h1>Lost Your Way</h1>
        <p>
          sorry, we can't find that page. you will find lots to explore on the
          home page
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <GotoHome>Netflix Home</GotoHome>
        </Link>
        <h1>Error Code : 404</h1>
      </Details>
    </Container>
  );
};

export default Custom404page;

const Container = styled.div`
  position: relative;
  top: 0;
  z-index: 10000000000000;
  width: 100%;
  height: 100vh;

  img {
    width: 100%;
    opacity: 0.7;
    height: 100vh;
  }
`;
const Details = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  color: white;
  letter-spacing: 1.5px;
  text-align: center;
  p {
    margin: 10px 0px;
    font-size: 25px;
  }
  h1 {
    font-size: 50px;
  }
`;
const GotoHome = styled(Button)`
  background-color: white !important;
  color: black !important;
  margin: 10px 0px !important;
  font-size: large !important;
  text-transform: capitalize !important;
  letter-spacing: 1.5px !important;
  :hover {
    background-color: lightgray !important;
  }
`;

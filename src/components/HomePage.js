import React from "react";
import styled from "styled-components";
import Banner from "./home/Banner";
import MovieRow from "./home/MovieRow";

const HomePage = () => {
  return (
    <Container>
      <Banner />
      <MovieRow />
    </Container>
  );
};

export default HomePage;
const Container = styled.div`
  width: 100%;
  color: whitesmoke;
  overflow-x: hidden;
  position: absolute;
  top: 0;
`;

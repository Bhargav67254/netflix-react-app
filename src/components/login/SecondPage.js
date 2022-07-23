import React from "react";
import styled from "styled-components";

const SecondPage = () => {
  return (
    <Container>
      <LeftPage>
        <h1>Enjoy on your TV.</h1>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </p>
      </LeftPage>
      {/* =================================== */}
      <RightPage>
        <img src="images/8.png" alt="" />
        <Animation>
          <img src="images/4.gif" alt="" />
        </Animation>
      </RightPage>
    </Container>
  );
};

export default SecondPage;
const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 5px 0px;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 5px;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    padding: 20px 0px;
  }
`;
const LeftPage = styled.div`
  letter-spacing: 1.5px;
  width: 45%;
  h1 {
    color: whitesmoke;
    font-size: 50px;
  }
  p {
    color: whitesmoke;
    font-size: 25px;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
    text-align: center;
  }
`;
const RightPage = styled.div`
  position: relative;
  z-index: 1;
  width: 50%;
  img {
    z-index: 100;
    width: 100%;
    object-fit: contain;
    height: 100%;
  }
`;
const Animation = styled.div`
  position: absolute;
  top: 22%;
  left: 15%;
  z-index: -1;
  img {
    width: 80%;
    object-fit: contain;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

import React from "react";
import styled from "styled-components";

const ThirdPage = () => {
  return (
    <Container>
      <LeftPage>
        <img src="images/7.jpg" alt="" />
        <Animation>
          <img src="images/11.jpg" alt="" />
          <Details>
            <p>Stranger Things</p>
            <strong>Downloading...</strong>
          </Details>
          <img src="images/2.gif" alt="" />
        </Animation>
      </LeftPage>
      <RightPage>
        <h1>Download your shows to watch offline.</h1>
        <p>Save your favorites easily and always have something to watch.</p>
      </RightPage>
    </Container>
  );
};

export default ThirdPage;

const Container = styled.div`
  background-color: black;
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 20px 0px;
  }
`;
const LeftPage = styled.div`
  position: relative;
  width: 50%;
  z-index: 1;
  margin-right: 20px;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
    margin: 0;
  }
`;
const Animation = styled.div`
  display: flex;
  background-color: black;
  bottom: 5%;
  left: 20%;
  z-index: 10;
  align-items: center;
  justify-content: space-around;
  border: 3px solid #222222;
  padding: 10px;
  border-radius: 20px;
  position: absolute;
  width: 30vw;
  @media screen and (max-width: 950px) {
    width: 90vw;
    left: 15px;
  }
  img {
    width: 30px;
  }
`;
const Details = styled.div`
  color: whitesmoke;
  margin-left: 10px;
  text-align: center;
  p {
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1.5px;
  }
  strong {
    font-weight: 400;
    font-size: 15px;
    color: #0071eb;
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 12px;
    }
    strong {
      font-size: 10px;
    }
  }
`;
const RightPage = styled.div`
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

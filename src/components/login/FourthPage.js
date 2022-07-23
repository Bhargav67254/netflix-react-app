import React from "react";
import styled from "styled-components";

const FourthPage = () => {
  return (
    <Container>
      <LeftPage>
        <h1>Watch everywhere.</h1>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </p>
      </LeftPage>
      <RightPage>
        <img src="images/6.png" alt="" />
        <Animation>
          <img src="images/3.jpg" alt="" />
        </Animation>
      </RightPage>
    </Container>
  );
};

export default FourthPage;
const Container = styled.div`
  background-color: black;
  padding: 20px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    padding: 20px 0px;
  }
`;
const LeftPage = styled.div`
  width: 45%;
  color: whitesmoke;
  letter-spacing: 1.5px;
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 25px;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
    text-align: center;
  }
  h1 {
    font-size: 45px;
  }
`;
const RightPage = styled.div`
  width: 50%;
  position: relative;
  z-index: 10;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
const Animation = styled.div`
  position: absolute;
  top: 10%;
  left: 18%;
  object-fit: contain;
  z-index: -1;
  width: 61%;
`;

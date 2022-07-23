import React from "react";
import styled from "styled-components";

const FifthPage = () => {
  return (
    <Container>
      <LeftPage>
        <img src="images/5.png" alt="" />
      </LeftPage>
      <RightPage>
        <h1>Create profiles for kids.</h1>
        <p>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </RightPage>
    </Container>
  );
};

export default FifthPage;
const Container = styled.div`
  background-color: black;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;
const LeftPage = styled.div`
  width: 50%;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
const RightPage = styled.div`
  width: 45%;
  color: whitesmoke;
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

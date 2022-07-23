import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios";
import movies from "../Links";

const imageURL = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function getBanner() {
      const response = await axios.get(movies.popularMovie);
      setBanner(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    return getBanner();
  }, []);
  return (
    <Container>
      <img src={`${imageURL}${banner?.backdrop_path}`} alt="" />
      <Details>
        <h1>{banner.title}</h1>
        <ButtonGroup>
          <Play>Play</Play>
          <Play>My List</Play>
        </ButtonGroup>
        <p>{banner.overview}</p>
      </Details>
    </Container>
  );
};

export default Banner;
const Container = styled.div`
  position: relative;
  margin-bottom: -30px;
  img {
    width: 100%;
    height: 550px;
    opacity: 0.7;
    object-fit: cover;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;
const Details = styled.div`
  position: absolute;
  top: 100px;
  left: 30px;
  width: 500px;

  h1 {
    font-size: 25px;
    color: whitesmoke;
  }
  p {
    font-size: 15px;
    letter-spacing: 1.5px;
  }
  @media screen and (max-width: 550px) {
    width: 280px;
    left: 5px;
    overflow-y: auto;
    p {
      width: 270px;
    }
  }
`;
const ButtonGroup = styled.div`
  margin: 10px 0px;
`;
const Play = styled(Button)`
  text-transform: capitalize !important;
  background-color: rgba(0, 0, 0, 0.7) !important;
  color: whitesmoke !important;
  margin-right: 20px !important;
`;

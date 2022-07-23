import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "../axios";
import TVTrailer from "./TVTrailers";
import TVCast from "./TVCast";

const DetailPageTwo = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [genre, setGenre] = useState([]);
  const imageURL = "https://image.tmdb.org/t/p/original/";
  const API_KEY = "your tmdb-api";

  const { id } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      const response = await axios.get(
        `tv/${id}?api_key=${API_KEY}&language=en-US`
      );
      setMovieInfo(response.data);
      setGenre(response.data.genres);
    }
    return getMovieDetails();
  }, [id]);
  return (
    <Container>
      <MovieDetails>
        <MovieBanner>
          {movieInfo?.backdrop_path && (
            <img src={`${imageURL}${movieInfo.backdrop_path}`} alt="" />
          )}
        </MovieBanner>
        <MoviesInfo>
          <img src={`${imageURL}${movieInfo.poster_path}`} alt="" />
          <Overview>
            <h3>{movieInfo.title}</h3>
            <Genres>
              {genre.map((movie) => (
                <p>{`${movie.title},`}</p>
              ))}
            </Genres>
            <p>{movieInfo.overview}</p>
          </Overview>
        </MoviesInfo>
      </MovieDetails>
      <TVCast cast_id={id} />
      <TVTrailer video_id={id} />
    </Container>
  );
};

export default DetailPageTwo;
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: black;
`;
const MovieDetails = styled.div``;
const MovieBanner = styled.div`
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    opacity: 0.7;
  }
`;
const MoviesInfo = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 730px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 20px auto;
  }
  img {
    width: 200px;
    object-fit: contain;
    border-radius: 5px;
  }
`;
const Overview = styled.div`
  margin-left: 30px;
  @media screen and (max-width: 730px) {
    margin-left: 0;
    margin-top: 20px;
  }
  h3 {
    color: whitesmoke;
    letter-spacing: 1.5px;
  }
  p {
    letter-spacing: 1.5px;
    line-height: 25px;
    color: whitesmoke;
  }
`;
const Genres = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 10px 10px 10px 0px;
  }
  @media screen and (max-width: 730px) {
    flex-direction: column;
    p {
      margin: 5px 0px;
    }
  }
`;

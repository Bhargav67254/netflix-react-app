import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "../axios";

const MovieCard = ({ fetchURL, title, topRow }) => {
  const [moviesList, setMoviesList] = useState([]);

  const imageURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function getMoviesData() {
      const response = await axios.get(fetchURL);
      setMoviesList(response.data.results);
    }
    return getMoviesData();
  }, [fetchURL]);

  return (
    <>
      {moviesList?.length > 0 && (
        <Container>
          <h1>{title}</h1>
          <Wrapper>
            {moviesList.map((movie) => {
              return (
                <div key={movie.id}>
                  {topRow ? (
                    <MoviePoster>
                      <Link to={`/detail/${movie.id}`}>
                        {movie?.poster_path && (
                          <img
                            src={`${imageURL}${movie?.poster_path}`}
                            alt=""
                          />
                        )}
                      </Link>
                    </MoviePoster>
                  ) : (
                    <MoviePoster>
                      <Link to={`/details/${movie.id}`}>
                        {movie?.backdrop_path && (
                          <img
                            className="moviePoster"
                            src={`${imageURL}${movie?.backdrop_path}`}
                            alt=""
                          />
                        )}
                      </Link>
                    </MoviePoster>
                  )}
                </div>
              );
            })}
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default MovieCard;
const Container = styled.div`
  h1 {
    color: whitesmoke;
    letter-spacing: 1.5px;
    font-size: 25px;
    margin-left: 5px;
    text-transform: capitalize;
  }
`;
const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    --ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
const MoviePoster = styled.div`
  margin: 10px 0px;
  img {
    width: 150px;
    margin: 0px 10px;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      transition: all 800ms;
    }
  }
  .moviePoster {
    width: 200px;
  }
`;

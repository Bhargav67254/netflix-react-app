import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import movies from "../Links";

const MovieRow = () => {
  return (
    <Container>
      <MovieCard
        fetchURL={movies.popular}
        topRow={true}
        title={"Netflix Originals"}
      />
      <MovieCard
        fetchURL={movies.popularMovie}
        title={"Released in the Past Year"}
      />
      <MovieCard
        fetchURL={movies.top_ratedMovie}
        title={"Top Movies On Netflix"}
      />
      <MovieCard
        fetchURL={movies.upcomingMovie}
        title={"new movies only on netflix"}
      />
      <MovieCard fetchURL={movies.actionMovie} title={"action movies"} />
      <MovieCard fetchURL={movies.animationMovie} title={"movies for kids"} />
      <MovieCard fetchURL={movies.comedyMovie} title={"family movies"} />
      <MovieCard fetchURL={movies.horrorMovie} title={"top scary movies"} />
      <MovieCard fetchURL={movies.dramaMovie} title={"hollywood drama"} />
    </Container>
  );
};

export default MovieRow;

const Container = styled.div`
  width: 100%;
`;

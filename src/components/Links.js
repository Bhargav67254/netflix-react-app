const API_KEY = "your tmdb-api";

const MoviesLinks = {
  actionMovie: `discover/movie?api_key=${API_KEY}&with_genres=28&include_video=true`,
  adventureMovie: `discover/movie?api_key=${API_KEY}&with_genres=12&include_video=true`,
  animationMovie: `discover/movie?api_key=${API_KEY}&with_genres=16&include_video=true`,
  comedyMovie: `discover/movie?api_key=${API_KEY}&with_genres=35&include_video=true`,
  crimeMovie: `discover/movie?api_key=${API_KEY}&with_genres=80&include_video=true`,
  documentaryMovie: `discover/movie?api_key=${API_KEY}&with_genres=99&include_video=true`,
  dramaMovie: `discover/movie?api_key=${API_KEY}&with_genres=18&include_video=true`,
  familyMovie: `discover/movie?api_key=${API_KEY}&with_genres=10751&include_video=true`,
  fantasyMovie: `discover/movie?api_key=${API_KEY}&with_genres=14&include_video=true`,
  historyMovie: `discover/movie?api_key=${API_KEY}&with_genres=36&include_video=true`,
  horrorMovie: `discover/movie?api_key=${API_KEY}&with_genres=27&include_video=true`,
  musicMovie: `discover/movie?api_key=${API_KEY}&with_genres=10402&include_video=true`,
  mysterymovie: `discover/movie?api_key=${API_KEY}&with_genres=9648&include_video=true`,
  romancemovie: `discover/movie?api_key=${API_KEY}&with_genres=10749&include_video=true`,
  sci_fimovie: `discover/movie?api_key=${API_KEY}&with_genres=878&include_video=true`,
  tvmoviesmovie: `discover/movie?api_key=${API_KEY}&with_genres=10770&include_video=true`,
  thrillermovie: `discover/movie?api_key=${API_KEY}&with_genres=53&include_video=true`,
  warmovie: `discover/movie?api_key=${API_KEY}&with_genres=10752&include_video=true`,
  westernmovie: `discover/movie?api_key=${API_KEY}&with_genres=37&include_video=true`,
  upcomingMovie: `movie/upcoming?api_key=${API_KEY}&language=en-US`,
  popularMovie: `movie/popular?api_key=${API_KEY}&language=en-US`,
  top_ratedMovie: `movie/top_rated?api_key=${API_KEY}&language=en-US`,

  popular: `tv/popular?api_key=${API_KEY}&language=en-US`,
};

export default MoviesLinks;

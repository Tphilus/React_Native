export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGYwMTQ4MzczMjAwNWI3OWUwNDM3YmZiNGJkYTVlZiIsIm5iZiI6MTc1OTM2MDAzMC4xODgsInN1YiI6IjY4ZGRiNDFlYWZmMWRlZGU1YjZhNzYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.njcydnjpzdNKlRz-cVsTZb2sYuvLPi3Gv682fkJLU-c'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

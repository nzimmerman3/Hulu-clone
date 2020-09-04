const API_KEY = "4c1da4648617df65a0c415b1c49caacb";
export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

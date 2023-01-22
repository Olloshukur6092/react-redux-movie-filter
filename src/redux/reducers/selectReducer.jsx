import { movie } from "../../api/movie";
import {
  SELECT_ALL,
  SELECT_COUNTRY,
  SELECT_HIND,
  SELECT_USA,
  SEARCH_MOVIE_NAME,
} from "../constant/selectConstant";

const initialState = {
  movies: movie,
};

const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SELECT_:
    //   return {
    //     ...state,
    //     movies: movie.filter((movie) => movie.country === action.payload.country),
    //   };
    case SELECT_COUNTRY:
      return {
        ...state,
        movies: movie.filter(
          (movie) => movie.country === action.payload.country
        ),
      };

    case SELECT_ALL:
      return {
        ...state,
        movies: [...movie],
      };

    case SEARCH_MOVIE_NAME:
      return {
        ...state,
        movies: movie.filter(
          (value) =>
            value.name.toLowerCase().indexOf(action.payload.value) !== -1
        ),
      };
    default:
      return state;
  }
};

export default selectReducer;

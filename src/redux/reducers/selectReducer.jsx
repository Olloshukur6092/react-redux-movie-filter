import { movie } from "../../api/movie";
import {
  SELECT_ALL,
  SELECT_COUNTRY,
  SELECT_HIND,
  SELECT_USA,
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
        movies: movie.filter((movie) => movie.country === action.payload.country),
      };

    case SELECT_ALL:
      return {
        ...state,
        movies: [...movie],
      };

    default:
        return state;
  }
};

export default selectReducer;

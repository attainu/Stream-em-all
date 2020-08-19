import { combineReducers } from 'redux';
import movieReducer from './Movie/movieReducer';
import searchReducer from './Search/searchReducer';
import tvShowReducer from './TvShows/tvShowReducer';
import userReducer from './User/userReducer';
import profilesReducer from './Profiles/profileReducer';

export const rootReducer = combineReducers({
  movie: movieReducer,
  tvShow: tvShowReducer,
  user: userReducer,
  search: searchReducer,
  profiles: profilesReducer,
});

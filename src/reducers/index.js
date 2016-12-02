import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  // libraries is a state object
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

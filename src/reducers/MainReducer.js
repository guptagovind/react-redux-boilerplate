import { combineReducers } from 'redux';
import SampleReducer1 from './SampleReducer1';
import SampleReducer2 from './SampleReducer2';
import LocaleReducer from './LocaleReducer';

// TODO: DEFINE GENERIC STATE

const MainReducer = combineReducers({
  Sample1: SampleReducer1,
  Sample2: SampleReducer2,
  Locale: LocaleReducer
});

export default MainReducer;

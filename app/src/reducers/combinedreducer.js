import lastnamereducer from "./reducerlastname"
import firstnamereducer from "./reducerfirstname"

import { combineReducers } from 'redux';
import scorereducer from "./reducerscore";
const allReducers = combineReducers({

   firstname:firstnamereducer,
   lastname:lastnamereducer,
   scoreplus:scorereducer
})

export default allReducers
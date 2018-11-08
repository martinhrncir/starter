import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from "redux"
import rootReducer from "./combineReducers"

const w: any = window
export const store: any = createStore(rootReducer, w.devToolsExtension && w.devToolsExtension())

const initialState = {
    // report: { data: null, isLoaded: false, isLoading: false, error: null},
}

const combine = (reducers) => {
    const reducerNames = Object.keys(reducers);
    Object.keys(initialState).forEach(item => {
        if (reducerNames.indexOf(item) === -1) {
        reducers[item] = (state = null) => state;
      }
    });
    return combineReducers(reducers);
  };



export default store

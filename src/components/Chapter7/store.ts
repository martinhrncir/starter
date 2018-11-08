import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from "redux"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas"
import rootReducer from "./combineReducers"

const w: any = window
const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  w.devToolsExtension && w.devToolsExtension(),
)
sagaMiddleware.run(rootSaga)


const initialState = {
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

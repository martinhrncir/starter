import {combineReducers} from "redux"

import * as Reducers from "./reducers"

function getReducers(bundle) {
    return Object.keys(bundle)
        .filter(key => key.indexOf("Reducer") > -1)
        .reduce((result, key) => {
            const name = key.replace("Reducer", "")
            result[name] = bundle[key];
            return result;
        }, {});
}

export const rootReducers = {
    ...getReducers(Reducers),
}

export default combineReducers(rootReducers)

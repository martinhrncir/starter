import {
    put,
    takeEvery,
    call,
} from "redux-saga/effects"

import {getMergadoFormats as apiGetMergadoFormats} from "../Chapter6/api"

function* getMergadoFormats(action) {

    try {
        const { data } = yield call(apiGetMergadoFormats)
        console.log(data)
        yield put({
            type: "GET_MERGADO_FORMATS_DONE",
            payload: data,
        })
    } catch (err) {
        yield put({
            type: "GET_MERGADO_FORMATS_ERROR",
            error: err,
        })
    }
}

const watchGetMergadoFormats = function* (params) {
  yield takeEvery('GET_MERGADO_FORMATS_START', getMergadoFormats)
}

export default watchGetMergadoFormats
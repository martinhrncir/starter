import * as saga from "./saga"

export default function* rootSaga(): any {
    const sagas = {
        ...saga,
    }
    yield Object.keys(sagas).map(o => sagas[o]())
}

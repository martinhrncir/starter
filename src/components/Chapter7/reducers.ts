export const types = {

}

const defaultState: string[] = []

// REDUCERS
export const itemsReducer = (state = defaultState, action) =>  {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload]
        case "REMOVE_ITEM":
        case "SET_ITEM_DONE":
            const index = state.indexOf(action.payload)
            if(index > -1) {
                state.splice(index,1)
            }
            return [...state]
        case "GET_MERGADO_FORMATS_DONE":
            const formats = action.payload
            return [...state,...formats]

        default:
            return state;
    }
}
export const doneReducer = (state = defaultState, action) =>  {
    switch (action.type) {
        case "SET_ITEM_DONE":
            return [...state, action.payload]
        case "REMOVE_DONE_ITEM":
            const index = state.indexOf(action.payload)
            if(index > -1) {
                state.splice(index,1)
            }
            return [...state]
        default:
            return state;
    }
}

export const formReducer = (state = "", action) =>  {
    switch (action.type) {
        case "CHANGE_FORM_VALUE":
            return action.payload
        default:
            return state;
    }
}



// ACTIONS
export const addItem = item => ({
    type: "ADD_ITEM",
    payload: item,
})
export const removeItem = item => ({
    type: "REMOVE_ITEM",
    payload: item,
})

export const setItemDone = item => ({
    type: "SET_ITEM_DONE",
    payload: item,
})

export const removeDoneItem = item => ({
    type: "REMOVE_DONE_ITEM",
    payload: item,
})

export const changeFormValue = value => ({
    type: "CHANGE_FORM_VALUE",
    payload: value,
})

export const getMergadoFormats = () => ({
    type: "GET_MERGADO_FORMATS_START",
})

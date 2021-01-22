import {inc, dec, reset} from "../action-types";

const initialState = {
    counter: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case inc: {
            return {...state, counter: state.counter + 1}
        }
        case dec: {
            return {...state, counter: state.counter - 1}
        }
        case reset: {
            return {...state, counter: 0}
        }
        default: {
            return state;
        }
    }
}

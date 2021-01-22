import {set} from "../action-types";

const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case set: {
            return {...state, posts: action.payload};
        }
        // case toggle : {
        //     return {...state, posts: []};
        // }
        // case remove : {
        //     return {...state, posts: []};
        // }
        default: {
            return state;
        }
    }
}

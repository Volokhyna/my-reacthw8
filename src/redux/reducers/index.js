import {combineReducers} from "redux";
import {counterReducer} from "./counter-reducer";
import {postsReducer} from "./posts-reducer";

export const reducer = combineReducers({
    posts: postsReducer,
    counter: counterReducer
});

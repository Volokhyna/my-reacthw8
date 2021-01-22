import {set} from "../action-types";

export const setPostCreator = (payload) => ({ type: set, payload });
// export const toggleCreator = (payload) => ({ type: toggle, payload });
// export const removeCreator = (payload) => ({ type: remove, payload });

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const data = await response.json();
            dispatch(setPostCreator(data));
        } catch (e) {
            console.error(e)
        }
    }};

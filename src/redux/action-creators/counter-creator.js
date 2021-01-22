import {inc, dec, reset} from "../action-types";

export const incCreator = () => ({ type: inc });
export const decCreator = () => ({ type: dec });
export const resetCreator = () => ({ type: reset });

import { NAVBAR_SELECT } from './actionTypes';

export const selectNavbarChoice = index => {
    return {
        type: NAVBAR_SELECT,
        payload: index
    };
};

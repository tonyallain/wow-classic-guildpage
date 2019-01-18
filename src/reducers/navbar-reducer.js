import * as TYPES from '../actions/actionTypes';

const initialState = {
    choices: ['Home', 'Roster', 'Apply'],
    activeChoice: 0
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.NAVBAR_SELECT:
            return { ...state, activeChoice: action.payload };
        default:
            return state;
    }
};

export default navbarReducer;

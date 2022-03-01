// any code related to user state

import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { // state -> whenever an action is fired
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return { // match -> we return this new object
                ...state,
                currentUser: action.payload
            }

        default:
            return state;    
    }
}

export default userReducer;




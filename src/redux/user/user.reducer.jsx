// any code related to user state

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { // state -> whenever an action is fired
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return { // match -> we return this new object
                ...state,
                currentUser: action.payload
            }

        default:
            return state;    
    }
}

export default userReducer;




import { UserActionTypes } from "./user.types"

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // must be same as what user.reducer is expecting
    payload: user,
})








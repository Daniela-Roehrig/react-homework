import { SET_USER_INFO } from "./types";

const initialState = {
    user:
    {
        name: 'John Doe',
        status: 'online',
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                user: {...state.user, name: action.payload.name, status: action.payload.status},
            };

        default:
            return state;
    }
}
export default reducer;
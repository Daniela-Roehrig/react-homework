import { SET_FILTER } from './types'

const initialState = {
  users: [
    { id: 1, name: 'Roman' },
    { id: 2, name: 'Alexander' },
    { id: 3, name: 'Alissa' },
    { id: 4, name: 'Andrej' },
    { id: 5, name: 'Swetlana' },
    { id: 6, name: 'Malina' },
    { id: 7, name: 'Andre' },

  ],
  filter: '',  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload,  };
    default:
      return state;
  }
};

export default reducer;
  
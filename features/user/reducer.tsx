const initialState = {};

export default function personalInfosReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PERSONAL_INFOS':
      return action.payload;
    default:
      return state;
  }
}
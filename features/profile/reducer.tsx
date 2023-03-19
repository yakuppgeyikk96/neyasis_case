
const initialState = {};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PROFILE_INFOS':
      return action.payload;
    default:
      return state;
  }
}
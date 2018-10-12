const Reducer1State = {
  data: {}
};

export default (state = Reducer1State, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

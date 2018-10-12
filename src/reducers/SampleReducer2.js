const Reducer2State = {
  data: {}
};

export default (state = Reducer2State, action) => {
  switch (action.type) {
    case 'DISPLAY_DATA':
      return state;
    default:
      return state;
  }
};

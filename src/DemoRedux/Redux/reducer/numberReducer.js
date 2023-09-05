let initialState = {
  quantity: 1,
};

export let numberReducer = (state = initialState, action) => {
  switch (action.type) {
    // logic dung de thay doi data cua state tai day
    case "tang": {
      state.quantity = state.quantity + 2;
      return { ...state };
    }
    case "giam": {
      state.quantity = state.quantity - action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

// mapStateToProps, mapDispatchToProps

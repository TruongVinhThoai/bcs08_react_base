import { shoeArr } from "../Data";

const initialState = { shoeArr: shoeArr, cart: [], detail: {} };

export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case first:
    //   return { ...state, ...payload };

    default:
      return state;
  }
};

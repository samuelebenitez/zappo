import { GET_VEHICLE } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_VEHICLE:
      return {
        ...state,
        vehicle: payload,
      };
    // case GET_PROFILE:
    //   return {
    //     ...state,
    //     selectedUser: payload,
    //   };
    default:
      return state;
  }
};

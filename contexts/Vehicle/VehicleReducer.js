import { GET_VEHICLE } from "../types";
import { SELECT_VEHICLE } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_VEHICLE:
      return {
        ...state,
        vehicle: payload,
      };
    case SELECT_VEHICLE:
      return {
        ...state,
        selectedVehicle: payload,
      };
    default:
      return state;
  }
};

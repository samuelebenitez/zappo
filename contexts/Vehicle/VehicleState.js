import React, { useReducer } from "react";
import axios from "axios";

import VehicleContext from "./VehicleContext";
import VehicleReducer from "./VehicleReducer";

import { GET_VEHICLE, SELECT_VEHICLE } from "../types";

const VehicleState = (props) => {
  const initialState = {
    vehicle: [],
    selectedVehicle: null,
  };

  const [state, dispatch] = useReducer(VehicleReducer, initialState);

  const getVehicles = (vehicle) => {
    try {
      dispatch({ type: GET_VEHICLE, payload: vehicle });
    } catch (error) {
      console.error(error);
    }
  };

  const selectVehicle = (vehicle) => {
    try {
      dispatch({ type: SELECT_VEHICLE, payload: vehicle });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VehicleContext.Provider
      value={{
        vehicle: state.vehicle,
        selectedVehicle: state.selectedVehicle,
        getVehicles,
        selectVehicle,
        // getProfile,
      }}
    >
      {props.children}
    </VehicleContext.Provider>
  );
};

export default VehicleState;

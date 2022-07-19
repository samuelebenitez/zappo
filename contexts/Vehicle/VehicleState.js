import React, { useReducer } from "react";
import axios from "axios";

import VehicleContext from "./VehicleContext";
import VehicleReducer from "./VehicleReducer";

import { GET_VEHICLE } from "../types";

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

  //   const getProfile = async (id) => {
  //     try {
  //       const res = await axios.get("https://reqres.in/api/users/" + id);
  //       const { data }= res;
  //       dispatch({ type: GET_PROFILE, payload: data.data });
  //     } catch (error) {}
  //   };

  return (
    <VehicleContext.Provider
      value={{
        vehicle: state.vehicle,
        selectedVehicle: state.selectedVehicle,
        getVehicles,
        // getProfile,
      }}
    >
      {props.children}
    </VehicleContext.Provider>
  );
};

export default VehicleState;

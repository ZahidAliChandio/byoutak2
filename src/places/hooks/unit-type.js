import { useCallback, useReducer } from "react";

const unitReducer = (state, action) => {
  console.log(state.unitTypes.unitTypes[1]);
  // console.log(action.index);
  // console.log(state.unitTypes.index);
  switch (action.type) {
    case "INPUT_CHANGE":
      // const index = state.unitTypes.findIndex(
      //   (unitType, index) => index === action.index
      // );
      // const newUnitType = [...state.unitTypes];
      // let newUnitTypeItem = newUnitType[index];
      // newUnitTypeItem = { ...newUnitTypeItem, [action.inputId]: action.value };

      return {
        ...state,
        // unitTypes: newUnitTypeItem,
      };
    case "ADD_DATA":
      return {
        ...state,
        // unitTypes: [...state.unitTypes, action.value],
      };
    case "DELETE_DATA":
      return {
        ...state,
        unitTypes: state.unitTypes.filter(
          (unitType, index) => index !== action.index
        ),
      };
    default:
      return state;
  }
};

export const useUnitTypeForm = (unitTypes) => {
  const [unitType, dispatch] = useReducer(unitReducer, {
    unitTypes,
    // index: unitTypes,
  });
  const unitTypeInputHandler = useCallback((id, value, index) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      inputId: id,
      index: index,
    });
  }, []);

  const setUnitType = useCallback((inputData) => {
    dispatch({
      type: "SET_DATA",
      value: inputData,
    });
  }, []);

  const addDataHandler = useCallback((inputData) => {
    dispatch({
      type: "ADD_DATA",
      value: inputData,
    });
  }, []);

  return [unitType, unitTypeInputHandler, addDataHandler];
};

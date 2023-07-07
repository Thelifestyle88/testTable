import { TTrain } from "../../utils/typesData";

export const ADD_TRAIN_DETAILS = 'ADD_INGREDIENT_DETAILS';
export const DELETE_TRAIN_DETAILS = 'DELETE_INGREDIENT_DETAILS';

export const addTrainDetails = (train: TTrain) => {
  return {
    type: ADD_TRAIN_DETAILS,
    payload: {
      ...train,
    },
  };
};

export const deleteTrainDetails = () => {
  return {
    type: DELETE_TRAIN_DETAILS,
    payload: null,
  };
};

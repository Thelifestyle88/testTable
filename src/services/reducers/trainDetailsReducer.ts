import { PayloadAction } from '@reduxjs/toolkit'

import { TTrain } from '../../utils/typesData';
import { ADD_TRAIN_DETAILS, DELETE_TRAIN_DETAILS } from '../actions/getTrainDetails';

interface ITrainDetailsState {
  train: TTrain | null
}

const initialState: ITrainDetailsState = {
  train: null,
};

export function trainDetailsReducer(state = initialState, action: PayloadAction<TTrain>) {
  switch (action.type) {
    case ADD_TRAIN_DETAILS: {
      return {
        ...state,
        train: action.payload,
      };
    }
    case DELETE_TRAIN_DETAILS: {
      return {
        ...state,
        train: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

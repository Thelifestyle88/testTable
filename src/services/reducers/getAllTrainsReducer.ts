import { PayloadAction } from "@reduxjs/toolkit";

import { GET_ALL_TRAINS_REQUEST, GET_ALL_TRAINS_SUCCEED, GET_ALL_TRAINS_FAILED } from "../actions/getAllTrains";
import { TTrain } from "../../utils/typesData";

interface IAllUserState {
    trainsData: Array<TTrain>,
    allTrainsRequest: boolean,
    allTrainsSucceed: boolean,
    allTrainsFailed: boolean,
}

const initialState: IAllUserState = {
    trainsData: [],
    allTrainsRequest: false,
    allTrainsSucceed: false,
    allTrainsFailed: false,
}

export function getAllTrainsReducer(state = initialState, action: PayloadAction<Array<TTrain>>) {
    switch (action.type) {
        case GET_ALL_TRAINS_REQUEST: {
            return {
                ...state,
                allTrainsRequest: true
            }
        }
        case GET_ALL_TRAINS_SUCCEED: {
            return {
                ...state,
                allTrainsRequest: false,
                allTrainsSucceed: true,
                trainsData: action.payload
            }
        }
        case GET_ALL_TRAINS_FAILED: {
            return {
                ...state,
                allTrainsRequest: false,
                allTrainsSucceed: false,
                allTrainsFailed: true
            }
        }
        default: {
            return state;
        }
    }
}
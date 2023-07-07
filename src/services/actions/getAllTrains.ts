import { Dispatch } from "react";
import { getTrains } from "../../utils/api";

import { nanoid } from 'nanoid';

export const GET_ALL_TRAINS_REQUEST = 'GET_ALL_TRAINS_REQUEST'
export const GET_ALL_TRAINS_SUCCEED = 'GET_ALL_TRAINS_SUCCEED'
export const GET_ALL_TRAINS_FAILED = 'GET_ALL_TRAINS_FAILED'

export function getAllTrains() {
    return function (dispatch: Dispatch<unknown>) {
        dispatch({
            type: GET_ALL_TRAINS_REQUEST,
        });
        getTrains()
            .then((res) => {
                if (res) {
                    dispatch({
                        type: GET_ALL_TRAINS_SUCCEED,
                        payload: res.map((item) => {
                            return { ...item, id: nanoid(18) }
                        })
                    })
                } else {
                    dispatch({
                        type: GET_ALL_TRAINS_FAILED,
                    })
                }
            })
            .catch(console.error)
    }
}
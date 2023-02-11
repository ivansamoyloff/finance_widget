import * as TYPES from './types';

export function addTicker(payload) {
  return (dispatch) => dispatch({ type: TYPES.ADD_TO_WATCH_LIST, payload });
}

export function deleteTicker(payload) {
  return (dispatch) =>
    dispatch({ type: TYPES.DELETE_FROM_WATCH_LIST, payload });
}

export function switchWatchTicker(payload) {
  return (dispatch) => dispatch({ type: TYPES.SWITCH_WATCHING, payload });
}

export function updateData(payload) {
  return (dispatch) => dispatch({ type: TYPES.UPDATE_DATA, payload });
}

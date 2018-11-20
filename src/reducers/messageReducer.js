import { MESSAGE_CHANGE } from '../actions/types';

const INITIAL_STATE = {
  message: '',
};

export const messageInputReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case MESSAGE_CHANGE:
      return { ...state, message: actions.payload };
    default:
      return state;
  }
};

export const messageSendReducer = () => {};

import { MESSAGE_CHANGE, MESSAGE_UPDATE } from './types';

export const changeMessageHandler = (message) => {
  return {
    type: MESSAGE_CHANGE,
    payload: message,
  };
};

export const sendMessageHandler = (message) => {
  return {
    type: MESSAGE_UPDATE,
    payload: message,
  };
};

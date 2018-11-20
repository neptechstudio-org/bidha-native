import { MESSAGE_CHANGE } from './types';

export const changeMessageHandler = (message) => {
  return {
    type: MESSAGE_CHANGE,
    payload: message,
  };
};

export const sendMessageHandler = () => {};

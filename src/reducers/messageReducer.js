import { MESSAGE_CHANGE, MESSAGE_UPDATE } from '../actions/types';

const MESSAGE_INITIAL_STATE = {

  message: '',
  messageList: [],

};

export default (state = MESSAGE_INITIAL_STATE, actions) => {
  switch (actions.type) {
    case MESSAGE_CHANGE:
      return { ...state, message: actions.payload };
    case MESSAGE_UPDATE:
      return { ...state, messageList: [...state.messageList, actions.payload], message: '' };
    default:
      return state;
  }
};

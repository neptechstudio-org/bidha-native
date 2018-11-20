import axios from 'axios';
import { Alert } from 'react-native';
import { ASTROLOGER_UPDATE } from './types';

export const fetchInitialAppData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
      dispatch({
        type: ASTROLOGER_UPDATE,
        payload: response.data,
      });
    } catch (err) {
      Alert.alert('Error in fetching data');
    }
  };
};

export const test = '';

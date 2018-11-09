import * as DataSearchScreens from './components/DataSearch';
import { evaluateChildDrawerTitle } from './utils';

export default {
  DataSearch_Basic: {
    screen: DataSearchScreens.Basic,
    navigationOptions: evaluateChildDrawerTitle,
  },
  'DataSearch_With Icon Position': {
    screen: DataSearchScreens.WithIconPosition,
    navigationOptions: evaluateChildDrawerTitle,
  },
};

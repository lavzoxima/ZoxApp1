import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 2 / 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  tabStyle: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    color: '#a9a9a9',


  },
});

import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,

    backgroundColor: '#f5f5f5',

  },
  signIn: {
    height: hp('7.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('10%'),
    marginRight: '5%',
    marginLeft: '5%',
    backgroundColor: '#ff6347',
  },
  textInput: {
    fontSize: wp('9.5%'),
    paddingLeft: 10,
    color: '#fff',
  },

  CaItem: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: hp('3.5%'),
  },

  rStyle: {
    flex: 1,
    alignItems: 'flex-start',
    height: hp('7.5%'),
    paddingHorizontal: 20,
  },

  title: {
    color: 'grey',
    fontSize: wp('4%'),
  },

  tistyle: {
    marginTop: '1%',
    paddingLeft: 5,
    fontSize: wp('4%'),
    color: '#05375a',
  },

  CaItem1: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
  },

  detail: {
    marginTop: '12%',
    alignItems: 'center',
  },
});

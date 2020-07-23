import { StyleSheet } from 'react-native'

import { Left } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

  picker: {
    borderRadius: 10,
    width: wp('90%'),
    height: hp('5.7%'),
    marginBottom: hp('1%'),
    alignSelf: 'center',
    zIndex: 100
  },
  pickerLabel: {
    color: '#a9a9a9',
    fontFamily: 'lucida grande',
    textAlign: "left",
    width: "99%",
    flexDirection: "row",
    fontSize: wp('3.5%'),
    paddingLeft: wp('2%'),
  },
  searchFiltersContainer: {
    height: hp('9%')
  }
})
import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    color: '#4d4d4d',
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#ffffff',
  },
  headericon: {
    color: '#ff3333',
  },
  heading1: {
    color: '#666666',
    fontSize: wp('5%'),
  },
  button1: {
    borderRadius: 60,
    height: 30,
    width: 100,
    marginTop:'5%'
  },
  card1: {
    marginTop: -10,
  },
  card2: {
    marginTop: -15,
  },
  price: {
    color: '#666666',
    fontSize: 20,
  },
  cutter: {

    color: '#b3b3b3',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  plmibi: {
    marginTop: -120,
    marginLeft: 50,
  },
  percent: {
    color: '#ff1a1a',
    fontSize: wp('4%'),
    fontWeight: 'bold'
  },
  button1: {
    borderRadius: wp('4%'),
    marginLeft: '10%',
    marginTop: '7.5%',
    width: wp('15%'),

    height: hp('6%'),
    backgroundColor: '#E50505',
  },
  btntxt: {

  },
  buttons1: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ACA6A6',
    width: 65,
    marginLeft: 10,
    height: 40,
  },
  buttontext: {
    color: '#666666',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft:'3%'
  },
  size: {
    color: '#4E4E4E',
    fontSize: 22,
    fontWeight: 'bold',
  },
  details: {
    color: '#4E4E4E',
    fontSize: 22,
    fontWeight: 'bold',
  },
  detailtext: {
    color: '#595959',
    fontSize: 20,
  },
  code: {
    color: '#4d4d4d',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -15,
  },
  codetext: {
    color: '#595959',
    fontSize: 18,
    marginLeft: -15,
  },

  sleeve: {
    color: '#ACA6A6',
    fontSize: 18,
  },
  short: {
    color: '#646363',
    fontSize: 18,
  },
  plusminuscircle: {
    color: '#ACA6A6',
  },

});

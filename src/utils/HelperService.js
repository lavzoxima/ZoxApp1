import axios from 'axios'

import { is, curryN, gte } from 'ramda'

import { PermissionsAndroid, Platform, Alert, BackHandler, DeviceEventEmitter, Linking, ToastAndroid } from 'react-native';

import { Toast } from 'native-base'







function showToast({ message = '', buttonText = 'Okay', duration = 1000, position = "bottom" }) {
	if (Platform.OS == 'android') {
		ToastAndroid.show(
			message,
			ToastAndroid.LONG,
			ToastAndroid.BOTTOM
		);
	}
	else {
		Toast.show({
			text: message,
			buttonText: buttonText,
			duration: duration,
			position: position
		})
	}
}







export const HelperService = {

	showToast,

}
import * as React from 'react';
import {NavigationActions} from 'react-navigation';

export const navigationRef = React.createRef();

export function navigate(routeName, params) {
  if (navigationRef.current && routeName) {
    let action = NavigationActions.navigate({routeName, params});
    navigationRef.current.dispatch(action);
  }
}
export function goBack() {
  if (navigationRef.current) {
    let action = NavigationActions.back({});
    navigationRef.current.dispatch(action);
  }
}

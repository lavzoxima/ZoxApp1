import React from 'react';
import {Scene , Router} from 'react-native-router-flux';
import SplashScreen from  'ZoxApp1/screens/splashScreen'
import OtpScreen from 'ZoxApp1/screens/otpScreen'
import SignUpDetail from 'ZoxApp1/screens/signUpDetail'
import CasualWearScreen from 'ZoxApp1/screens/casualWear'




const RouterComponent =() => {

return(


<Router >

<Scene  key="root">


<Scene key="SplashScreen"  component={SplashScreen}     hideNavBar={true} initial />
<Scene key="OtpScreen"  component={OtpScreen}    hideNavBar={true} />
<Scene key="SignUpDetail"  component={SignUpDetail}    hideNavBar={true} />
<Scene key="CasualWearScreen"  component={CasualWearScreen}    hideNavBar={true} />



</Scene>
</Router>

);







};


export default RouterComponent;
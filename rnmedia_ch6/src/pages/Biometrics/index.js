import { StyleSheet, Text, View , TouchableHighlight, Button} from 'react-native'
import React, {useEffect} from 'react'
import TouchID from 'react-native-touch-id';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';



const Biometrics = () => {
  const navigation = useNavigation();

  function onFingerPrintPress() {
    
    const optionalConfigObject = {
      title: 'Authentication Required', // Android
      imageColor: '#e00606', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel', // Android
      fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };

    async function onGoogleSignOut() {
      return await auth().signOut();
    }

    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        navigation.replace('MainApp');
      })
      .catch(error => {
        // alert('Authentication Failed');
        onGoogleSignOut()
      });

      // TouchID.isSupported()
      // .then(biometryType => {
      //   // success code
      //   if (biometryType === 'FaceID') {
      //     alert('FaceID is supported.')
      //   } else if (biometryType === 'TouchID'){
      //     alert('TouchID is supported.')
      //   } else if (biometryType === true) {
      //     alert('supported TouchID for android.')
      //   }
      // })
      // .catch(error => {
      //   alert(error)
      // })
  }

  useEffect(() => {
    onFingerPrintPress()
  })


  return (
    <View>
      {/* <Button
            title="Fingerprint"
            onPress={() => onFingerPrintPress()}
        /> */}
      
    </View>
  )
}

export default Biometrics

const styles = StyleSheet.create({})
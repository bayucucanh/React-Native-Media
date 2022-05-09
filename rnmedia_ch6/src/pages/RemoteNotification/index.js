import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import messaging from '@react-native-firebase/messaging';


const RemoteNotification = () => {

  // for ios
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken()
    alert(JSON.stringify(token))
  }

  useEffect(() => {
    requestUserPermission()
    getToken()
  }, [])

  return (
    <View>
      <CameraScreen
        scanBarcode={true}
        showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
        laserColor="red" // (default red) optional, color of laser in scanner frame
        frameColor="white" // (default white) optional, color of border of scanner frame
      />
    </View>
  );
};

export default RemoteNotification;

const styles = StyleSheet.create({});

import React, {useEffect} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { Login, Camera, Crashlytics, Maps, Biometrics, Register } from './src/pages';  

export default function App() {

  return (
    // <NavigationContainer>
      // <Camera />
      // <Analytics />
            // <Crashlytics />
            // <Maps />
    // </NavigationContainer>
    <View style={styles.wrapper}>
      {/* <Biometrics /> */}
      <Login />
      {/* <Register /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject
  }
});

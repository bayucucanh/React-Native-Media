import React, {useEffect} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function Maps() {

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        alert(JSON.stringify(position))
      },
      (error) => {
        // See error code charts below.
        alert(error.message), {
          timeout: 20000, maximumAge: 1000
        }
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  })

  return (
    <View style={styles.wrapper}>
      <Text>App</Text>
      <MapView style={styles.map} initialRegion={{ 
        latitude:-6.840116,
        longitude:107.582547,
        latitudeDelta:0.009,
        longitudeDelta:0.009
       }}
      //  provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
       >
         <Marker coordinate={{ latitude:-6.8399029455469496, longitude:107.58471953955168 }}>
           <Callout tooltip>
             <View>
               <View style={styles.buble}>
                 <Text>Indomaret Pasir Muncang</Text>
               </View>
               <View style={styles.arrowBorder}></View>
               <View style={styles.arrow}></View>
             </View>
           </Callout>
         </Marker>
       </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject
  },
  map:{
    ...StyleSheet.absoluteFillObject
  },
  buble: {
    width: 200,
    height:100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

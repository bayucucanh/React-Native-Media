import React, {useEffect} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function Maps() {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        alert(JSON.stringify(position));
      },
      error => {
        // See error code charts below.
        alert(error.message),
          {
            timeout: 20000,
            maximumAge: 1000,
          };
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });

  return (
    <View style={styles.wrapper}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.8399029455469496,
          longitude: 107.58471953955168,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}>

        <Marker
          coordinate={{
            latitude: -6.8399029455469496,
            longitude: 107.58471953955168,
          }}
          title="Test Title"
          description="This is the test description">
          <Callout tooltip>
            <View>
              <View style={styles.buble}>
                <Text style={styles.name}>Masjid</Text>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
              <View style={styles.arrowBorder}></View>
              <View style={styles.arrow}></View>
            </View>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: -6.840089,
            longitude: 107.584722,
          }}
          title="Test Title"
          description="This is the test description">
          <Callout tooltip>
            <View>
              <View style={styles.buble}>
                <Text style={styles.name}>Indomaret</Text>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
              <View style={styles.arrowBorder}></View>
              <View style={styles.arrow}></View>
            </View>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: -6.8400187,
            longitude: 107.5847853,
          }}
          title="Test Title"
          description="This is the test description">
          <Callout tooltip>
            <View>
              <View style={styles.buble}>
                <Text style={styles.name}>Mie Ayam Baso</Text>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
              <View style={styles.arrowBorder}></View>
              <View style={styles.arrow}></View>
            </View>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: -6.8400909,
            longitude: 107.5850788,
          }}
          title="Test Title"
          description="This is the test description">
          <Callout tooltip>
            <View>
              <View style={styles.buble}>
                <Text style={styles.name}>Martbak Manis Tasikmalaya</Text>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
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
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buble: {
    // width: 200,
    // height: 100,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
});

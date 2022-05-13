import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Crashlytics from '../crashlytics'
import Analytics from '../Analytics'
import auth from '@react-native-firebase/auth';
// import Notification from '../../components/Notification';


const Profile = ({navigation}) => {
  async function onGoogleSignOut() {
    await auth().signOut().then(()=>{navigation.replace('Login')});
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Crashlytics />
      <Analytics />
      <Button
          title="Sign-Out"
          onPress={() => onGoogleSignOut()}
        />

        {/* <Notification /> */}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})
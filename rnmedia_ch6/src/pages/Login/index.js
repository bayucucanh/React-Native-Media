import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Biometrics from '../Biometrics';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const sendData = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('User account signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        if (email === null || password === null) {
          alert('Email or password null')
        }

        console.error(error);
      });
  };

  useEffect(() => {
    try {
      GoogleSignin.configure({
        webClientId:
          '1016726185760-ldma1hla5k3025vic05ii7ve1dnel39i.apps.googleusercontent.com',
      });
    } catch (error) {
      alert(error);
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function onGoogleSignOut() {
    return await auth().signOut();
  }

  if (!user) {
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Masukan email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Masukan Password"
          secureTextEntry
        />

        <Button title="Login" onPress={sendData} />

        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
        />
      </View>
    );
  }

  return (
    <View>
      {/* <Text>Welcome {user.email}</Text>
      <Button
          title="Sign-Out"
          onPress={() =>
            onGoogleSignOut().then(() => console.log('Signed Out'))
          }
        /> */}
        <Biometrics />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

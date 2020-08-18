import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';

export default function WelcomeScreen() {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="#FF1E56"
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/mola.png')}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/SaveITtext.png')} />
          <Text style={{fontFamily: 'FlashbackDemo', fontSize: 40}}>
            Save your notes acroos all your devices
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonfb}
          onPress={() => alert('clicked')}>
          <Text
            style={{
              fontSize: 15,
              textTransform: 'uppercase',
              color: colors.white,
            }}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttongoogle}
          onPress={console.log('yus')}>
          <Text
            style={{
              fontSize: 15,
              textTransform: 'uppercase',
              color: colors.white,
            }}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonemail}
          onPress={console.log('yus')}>
          <Text
            style={{
              fontSize: 15,
              textTransform: 'uppercase',
              color: colors.white,
            }}>
            Continue with Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={console.log('button tapped')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: '#FF1E56',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 33,
    alignItems: 'center',
  },
  buttonfb: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: colors.primary,
    padding: 15,
    width: '85%',
  },
  buttongoogle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: colors.primary,
    padding: 15,
    width: '85%',
    marginVertical: 20,
  },
  buttonemail: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: colors.primary,
    padding: 15,
    width: '85%',
    marginBottom: 60,
  },
  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: colors.secondary,
    padding: 10,
    width: '20%',
  },
});

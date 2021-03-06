import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function WelcomeScreen() {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>SaveIt</Text>
      <Text style={styles.slogan}>Save your notes across all your devices</Text>
      <TouchableOpacity style={styles.loginbutton}>
        <LinearGradient colors={['#393e46', '#32e0c4']} style={styles.login}>
          <Text style={styles.logintext}>Log In</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'FlashbackDemo',
    fontSize: 150,
    color: colors.secondary,
    bottom: 200,
  },
  slogan: {
    fontFamily: 'Dance',
    fontSize: 25,
    color: colors.secondary,
    bottom: 220,
  },
  loginbutton: {
    width: '80%',
    top: 90,
  },
  login: {
    padding: 13,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logintext: {
    color: colors.white,
    fontSize: 20,
  },
});

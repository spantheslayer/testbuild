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
        <TouchableOpacity style={styles.button} onPress={console.log('yus')}>
          <Text
            style={{
              fontSize: 15,
              textTransform: 'uppercase',
              color: colors.white,
            }}>
            TouchableOpacity
          </Text>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: colors.primary,
    padding: 15,
    width: '85%',
    marginVertical: 50,
  },
});

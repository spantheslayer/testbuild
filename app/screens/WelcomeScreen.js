import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';

export default function WelcomeScreen() {
  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/mola.png')}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/SaveITtext.png')} />
          <Text style={{fontFamily: 'FlashbackDemo', fontSize: 40}}>
            Save your notes acroos all your devices{' '}
          </Text>
        </View>
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
});

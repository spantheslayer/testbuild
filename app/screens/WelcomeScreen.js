import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

export default function WelcomeScreen() {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>SaveIt</Text>
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
  },
});

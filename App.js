import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.text}>Whateever Happens happens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: 'FlashbackDemo',
  },
});

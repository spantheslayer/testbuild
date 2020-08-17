import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../config/Colors';

export default function AppButton() {
  return (
    <TouchableOpacity style={[styles.buttons, {backgroundColor: Color[color]}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 7,
  },
  text: {
    color: Colors.white,
    fontSize: 15,
    textTransform: 'uppercase',
  },
});

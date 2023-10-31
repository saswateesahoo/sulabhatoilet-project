import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SaveButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 303, 
    height: 50, 
    top: -70,
    left:22,
    backgroundColor: '#2400FF',
    borderRadius: 5, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18, 
  },
});

export default SaveButton;

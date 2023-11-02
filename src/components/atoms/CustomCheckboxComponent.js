import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CheckBox} from '@rneui/themed';

const CustomCheckboxComponent = ({label, checked, onPress}) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={styles.checkbox}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 19,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    left: 16,
  },
  checkmark: {
    color: 'green',
    fontSize: 20,
  },
  label: {
    color: 'black',
    fontSize: 15,
    marginLeft: 10,
    left: 12,
  },
});

export default CustomCheckboxComponent;





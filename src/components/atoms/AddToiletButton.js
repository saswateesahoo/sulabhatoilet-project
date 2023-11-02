import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddToiletButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blackBox}>
        <Text style={styles.arrow}>←</Text>
        <Text style={styles.text}>Add A Toilet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  blackBox: {
    width: 360,
    height: 65,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    color: 'white',
    fontSize: 40,
    marginRight: 10,
    top: -13,
    width: 29,
    height: -17,
    // flexshrink: 0,
  },
  text: {
    color: 'white',
    fontSize: 18,
    // color: '#FFF',
    // fontfamily: 'Poppins',
    // fontsize: 18,
    // fontstyle: 'normal',
    // fontweight: 500,
    // lineheight: 0,
    // letterspacing: 0.72,
    
  },
});

export default AddToiletButton;

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const Superhero = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={require('../assets/superhero.jpg')}
          style={styles.additionalImage}
      />
      </View>
      <View>
        <Text style={styles.SuperHeroText}>You are a Super Hero !</Text>
        <Text style={styles.contributeText}>
          {/* You are now going to contribute to build the world's largest toilet
          network. My toilet relies on superheroes like you. */}
          You are now going to contribute to build world’s largest toilet
          network My Toilet relies on superhero like you.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  imageBox: {
    backgroundColor: '#F6F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    width: 83,
    height: 96,
    borderRadius:8,
  },
  additionalImage: {
    // width: 87,
    // height: 90,
    // top: -320,
    // left: -130,
    // position: 'relative',

  },
  textGroup: {
    width: '100%',
  },
  SuperHeroText: {
    // width: 190,
    top: -10,
    // left: -1,
    color: '#11C6FF',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0.72,
    // backgroundColor: '#11C6FF',
    // position: 'absolute',
  },
  contributeText: {
    color: '#1E1E1E',
    marginTop: 8,
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 0.02

  },
});
export default Superhero;

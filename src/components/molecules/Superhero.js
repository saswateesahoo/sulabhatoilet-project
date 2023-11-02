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
      <View style={styles.textGroup}>
        <Text style={styles.SuperHeroText}>You are a Super Hero !</Text>
        <Text style={styles.contributeText} numberOfLines={3}>
          You are now going to contribute to build the world's largest toilet
          network. My Toilet relies on superheroes like you.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 8,
  },
  additionalImage: {},
  textGroup: {
    flex: 1,
    marginLeft: 10, 
  },
  SuperHeroText: {
    color: '#11C6FF',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0.72,
  },
  contributeText: {
    color: '#1E1E1E',
    marginTop: 8,
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 0.02,
    lineHeight: 19, 
  },
});

export default Superhero;

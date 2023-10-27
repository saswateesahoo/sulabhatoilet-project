import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
const Superhero = () => {
  return (
    <View>
      <Image
        source={require('../assets/superhero.jpg')} 
        style={styles.additionalImage} 
      />
       <Text style={styles.SuperHeroText}>You are a Super Hero !</Text>
       <Text style={styles.contributeText}>You are now going to contribute to build the world's largest toilet network. My toilet relies on superheroes like you.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    additionalImage: {
        width: 87, 
        height: 90, 
        // top: -320,
        // left: -130, 
        position: 'relative', 
      },
      SuperHeroText: {
        width: 190, 
        top: -330,   
        left: -1,  
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: 0.04,
        backgroundColor: '#11C6FF',
        // position: 'absolute',
      },
      contributeText: {
        width: 212, 
        top: -300,   
        left: -8,  
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0.02,
        textAlign: 'left',
        position: 'absolute',
      },
});
export default Superhero;


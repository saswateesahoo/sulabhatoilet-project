import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputComponent from '../atoms/InputComponent';


const AmmenitiesAvailable = () => {
  const [AmmenitiesAvailable, setAmmenitiesAvailable] = useState('');
  const [ParkingFacility, setParkingFacility] = useState('');
  const [ShoppingMall, setShoppingMall] = useState('');
  const [DrinkingWater, setDrinkingWater] = useState('');
  const [EVChargingUnit, setEVChargingUnit] = useState('');
  const [FoodOutlets, setFoodOutlets] = useState('');
  const [ShowerRooms, setShowerRooms] = useState('');
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.AmmenitiesAvailableContainer}>
        <Text style={styles.AmmenitiesAvailableText}>Ammenities Available</Text>
        <InputComponent
          placeholder=" "
          value={AmmenitiesAvailable}
          onChangeText={setAmmenitiesAvailable}
        />
      </View>
      <View style={styles.ParkingFacilityContainer}>
        <Text style={styles.ParkingFacilityText}> Parking Facility</Text>
        <InputComponent
          placeholder=" "
          value={ParkingFacility}
          onChangeText={setParkingFacility}
        />
      </View>
      <View style={styles.ShoppingMallContainer}>
        <Text style={styles.ShoppingMallText}>Shopping Mall</Text>
        <InputComponent
          placeholder=" "
          value={ShoppingMall}
          onChangeText={setShoppingMall}
        />
      </View>
      <View style={styles.DrinkingWaterContainer}>
        <Text style={styles.DrinkingWaterText}>Drinking Water</Text>
        <InputComponent
          placeholder=" "
          value={DrinkingWater}
          onChangeText={setDrinkingWater}
        />
      </View>
      <View style={styles.EVChargingUnitContainer}>
        <Text style={styles.EVChargingUnitText}>EV Charging Unit</Text>
        <InputComponent
          placeholder=" "
          value={EVChargingUnit}
          onChangeText={setEVChargingUnit}
        />
      </View>
      <View style={styles.FoodOutletsContainer}>
        <Text style={styles.FoodOutletsText}>Food Outlets</Text>
        <InputComponent
          placeholder=" "
          value={FoodOutlets}
          onChangeText={setFoodOutlets}
        />
      </View>
      <View style={styles.ShowerRoomsContainer}>
        <Text style={styles.ShowerRoomsText}>Shower Rooms</Text>
        <InputComponent
          placeholder=" "
          value={ShowerRooms}
          onChangeText={setShowerRooms}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  AmmenitiesAvailableContainer: {
    // width: 94,
    // height: 36,
    top: 20, 
    left: 1, 
    // backgroundColor: 'white',
    // position: 'absolute',
   
  },
  AmmenitiesAvailableText:{
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.24,
    textAlign: 'left',
    // top: 10,
    // left: -10,
    top:-80,
    left:12,
  },
  ParkingFacilityContainer:{
    width: 13,
    height: 13,
    top: -20, 
    left: 10, 
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  ParkingFacilityText:{
    width: 88,
    top: -3, 
    left: 19, 
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  ShoppingMallContainer:{
    width: 13,
    height: 13,
    top: -20, 
    left: 125, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  ShoppingMallText:{
    width: 88,
    top: -3, 
    left: 19, 
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  DrinkingWaterContainer:{
    width: 13,
    height: 13,
    top: 10, 
    left: 10, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  DrinkingWaterText:{
    width: 88,
    top: -3, 
    left: 19, 
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  EVChargingUnitContainer:{
    width: 13,
    height: 13,
    top: 10,
    left: 125, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  EVChargingUnitText:{
    width: 88,
    top: -3, 
    left: 19, 
    color: 'black',
    fontSize: 11,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  FoodOutletsContainer:{
    width: 13,
    height: 13,
    top: 40, 
    left: 10, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  FoodOutletsText:{
    width: 88,
    top: -3, 
    left: 19, 
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  ShowerRoomsContainer:{
    width: 13,
    height: 13,
    top: 40, 
    left: 125, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  ShowerRoomsText:{
    width: 88,
    top: -3, 
    left: 19, 
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
});

export default AmmenitiesAvailable;


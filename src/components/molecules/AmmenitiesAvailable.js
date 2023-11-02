import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomCheckboxComponent from '../atoms/CustomCheckboxComponent';

const AmmenitiesAvailable = () => {
  const [ParkingFacility, setParkingFacility] = useState(false);
  const [ShoppingMall, setShoppingMall] = useState(false);
  const [DrinkingWater, setDrinkingWater] = useState(false);
  const [EVChargingUnit, setEVChargingUnit] = useState(false);
  const [FoodOutlets, setFoodOutlets] = useState(false);
  const [ShowerRooms, setShowerRooms] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel1}>Ammenities Available</Text>
      <View style={styles.inputContainer}>
        <CustomCheckboxComponent
          label="Parking Facility"
          checked={ParkingFacility}
          onPress={() => setParkingFacility(!ParkingFacility)}
        />
        <Text style={styles.spacing}>&nbsp;</Text>
        <CustomCheckboxComponent
          label="Shopping Mall"
          checked={ShoppingMall}
          onPress={() => setShoppingMall(!ShoppingMall)}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomCheckboxComponent
          label="Drinking Water"
          checked={DrinkingWater}
          onPress={() => setDrinkingWater(!DrinkingWater)}
        />
        <Text style={styles.spacing}>&nbsp;</Text>
        <CustomCheckboxComponent
          label="EV Charging Unit"
          checked={EVChargingUnit}
          onPress={() => setEVChargingUnit(!EVChargingUnit)}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomCheckboxComponent
          label="Food Outlets"
          checked={FoodOutlets}
          onPress={() => setFoodOutlets(!FoodOutlets)}
        />
        <Text style={styles.spacing}>&nbsp;</Text>
        <CustomCheckboxComponent
          label="Shower Rooms"
          checked={ShowerRooms}
          onPress={() => setShowerRooms(!ShowerRooms)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 10, // Add space between each row of checkboxes
  },
  spacing: {
    width: 10, 
    fontSize: 0, 
  },
  inputLabel1: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 17,
    letterSpacing: 0.28,
    marginLeft: 12,
  },
});

export default AmmenitiesAvailable;

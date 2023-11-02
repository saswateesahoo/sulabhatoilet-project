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
      <View style={styles.inputContainer1}>
        <Text style={styles.inputLabel}>Ammenities Available </Text>
        <View style={styles.inputContainer}>
          <CustomCheckboxComponent
            label="Parking Facility"
            checked={ParkingFacility}
            onPress={() => setParkingFacility(!ParkingFacility)}
          />
          <CustomCheckboxComponent
            label="Shopping Mall "
            checked={ShoppingMall}
            onPress={() => setShoppingMall(!ShoppingMall)}
          />
        </View>
        <View style={styles.inputContainer2}>
          <View style={styles.inputContainer}>
            <CustomCheckboxComponent
              label="Drinking Water"
              checked={DrinkingWater}
              onPress={() => setDrinkingWater(!DrinkingWater)}
            />
            <CustomCheckboxComponent
              label="EV Charging Unit"
              checked={EVChargingUnit}
              onPress={() => setEVChargingUnit(!EVChargingUnit)}
            />
            <View style={styles.inputContainer3}>
              <View style={styles.inputContainer}>
                <CustomCheckboxComponent
                  label="Food Outlets"
                  checked={FoodOutlets}
                  onPress={() => setFoodOutlets(!FoodOutlets)}
                />
                <CustomCheckboxComponent
                  label="Shower Rooms"
                  checked={ShowerRooms}
                  onPress={() => setShowerRooms(!ShowerRooms)}
                />

              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  inputContainer1: {
    marginTop: -80,
  },
  inputContainer2: {
    marginBottom: 20,
    top: -20,
  },
  inputContainer3: {
    marginBottom: -20,
    top: 40,
    left: -249,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: -20,
    
  },
  inputLabel: {
    color: 'black',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '400',
    marginBottom:12,
  },
});

export default AmmenitiesAvailable;

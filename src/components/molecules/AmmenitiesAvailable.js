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
        <Text style={styles.inputLabel1}>Ammenities Available </Text>
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
    left: -239,
  },
  inputContainer4:{
    marginBottom: -20,
    top: 40,
    left: -249,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: -20,

  },
  inputLabel1: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20, 
    marginBottom: 18,
    letterSpacing: 0.28,
    left:12,
  },
  
  inputLabel: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 0, 
    letterSpacing: 0.24,
    marginBottom: 12,
    left:16,
  },


});

export default AmmenitiesAvailable;

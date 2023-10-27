import React,{useState} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import InputComponent from '../atoms/InputComponent';


const  AmmenitiesAvailable = () => {
  const [AmmenitiesAvailable, setAmmenitiesAvailable] = useState('');
  const [ParkingFacility, setParkingFacility] = useState('');
  const [ShoppingMall, setShoppingMall] = useState('');
  const [DrinkingWater, setDrinkingWater] = useState('');
  const [EVChargingUnit, setEVChargingUnit] = useState('');
  const [FoodOutlets, setFoodOutlets] = useState('');
  const [ShowerRooms, setShowerRooms] = useState('');
  return (
    <View>
      <View style={styles.AmmenitiesAvailableContainer}>
        <Text style={styles.AmmenitiesAvailableText}>Ammenities Available</Text>
        <InputComponent
          placeholder=" "
          value={AmmenitiesAvailable}
          onChangeText={setAmmenitiesAvailable}
        />
      </View>
      <View style={styles. ParkingFacilityContainer}>
        <Text style={styles. ParkingFacilityText}> Parking Facility</Text>
        <InputComponent
          placeholder=" "
          value={ParkingFacility}
          onChangeText={setParkingFacility}
        />
      </View>
       <View style={styles. ShoppingMallContainer}>
        <Text style={styles. ShoppingMallText}>Shopping Mall</Text>
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
    AmmenitiesAvailableContainer:{
    width: 94,
    height: 36,
    top: 310, 
    left: 30, 
    backgroundColor: 'white',
    position: 'absolute',
   
  },
  AmmenitiesAvailableText:{
    color: 'black',
    fontSize: 9.3,
    fontWeight: '400',
    fontWeight: "normal",
    letterSpacing: 0.02,
    textAlign: 'left',
  },
  ParkingFacilityContainer:{
    width: 13,
    height: 13,
    top: 336, 
    left: 30, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  ParkingFacilityText:{
    width: 88,
    top: -1, 
    left: 19, 
    color: 'black',
    fontSize: 9,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  ShoppingMallContainer:{
    width: 13,
    height: 13,
    top: 336, 
    left: 125, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  ShoppingMallText:{
    width: 88,
    top: -1, 
    left: 19, 
    color: 'black',
    fontSize: 8.3,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  DrinkingWaterContainer:{
    width: 13,
    height: 13,
    top: 360, 
    left: 30, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  DrinkingWaterText:{
    width: 88,
    top: -1, 
    left: 19, 
    color: 'black',
    fontSize: 9,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  EVChargingUnitContainer:{
    width: 13,
    height: 13,
    top: 360, 
    left: 125, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  EVChargingUnitText:{
    width: 88,
    top: -1, 
    left: 19, 
    color: 'black',
    fontSize: 9,
    fontWeight: '275',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  FoodOutletsContainer:{
    width: 13,
    height: 13,
    top: 379, 
    left: 30, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  FoodOutletsText:{
    width: 88,
    top: -1, 
    left: 19, 
    color: 'black',
    fontSize: 9,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  ShowerRoomsContainer:{
    width: 13,
    height: 13,
    top: 379, 
    left: 125, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  ShowerRoomsText:{
    width: 88,
    top: -1, 
    left: 19, 
    color: 'black',
    fontSize: 9,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
});

export default AmmenitiesAvailable;

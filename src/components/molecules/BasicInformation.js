import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputComponent from '../atoms/InputComponent';
// import { Input } from '@rneui/themed';

const BasicInformation = () => {
  const [toiletName, setToiletName] = useState('');
  const [toiletAddress, setToiletAddress] = useState('');
  const [locationCode, setLocationCode] = useState('');
  const [latLong, setLatLong] = useState('');
  const [floor, setFloor] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [opensAt, setOpensAt] = useState('');
  const [closesAt, setClosesAt] = useState('');
  const [is24HoursOpen, setIs24HoursOpen] = useState(false);
  const [toiletType, setToiletType] = useState('');

  return (
    <View style={{backgroundColor: 'white'}}>
      <Text style={styles.basicInfoText}>Basic Information</Text>
      <View style={styles.additionalContainer}>
        <Text style={styles.additionalText}>Name of Toilet</Text>
        <InputComponent
          placeholder=" "
          value={toiletName}
          onChangeText={setToiletName}
        />
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>Address</Text>
        <InputComponent
          placeholder=" "
          value={toiletAddress}
          onChangeText={setToiletAddress}
        />
      </View>

      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Location Code</Text>
        <InputComponent
          placeholder=" "
          value={locationCode}
          onChangeText={setLocationCode}
        />
      </View>

      <View style={styles.LatLongContainer}>
        <Text style={styles.LatLongText}>Lat/Long</Text>
        <InputComponent
          placeholder=" "
          value={latLong}
          onChangeText={setLatLong}
        />
      </View>

      <View style={styles.FloorContainer}>
        <Text style={styles.FloorText}>Floor</Text>
        <InputComponent placeholder=" " value={floor} onChangeText={setFloor} />
      </View>

      <View style={styles.ExtraInfoContainer}>
        <Text style={styles.ExtraInfoText}>Extra Info</Text>
        <InputComponent
          placeholder=" "
          value={extraInfo}
          onChangeText={setExtraInfo}
        />
      </View>

      <View style={styles.OpensatContainer}>
        <Text style={styles.OpensatText}>Opens at</Text>
        <InputComponent
          placeholder=" "
          value={opensAt}
          onChangeText={setOpensAt}
        />
      </View>

      <View style={styles.ClosesatContainer}>
        <Text style={styles.ClosesatText}>Closes at</Text>
        <InputComponent
          placeholder=" "
          value={closesAt}
          onChangeText={setClosesAt}
        />
      </View>

      <View style={styles.HourOpenContainer}>
        <Text style={styles.HourOpenText}>24 Hours Open</Text>
        <InputComponent
          placeholder=" "
          value={is24HoursOpen.toString()}
          onChangeText={text => setIs24HoursOpen(text === 'true')}
        />
      </View>
      <View style={styles.TypeofToiletContainer}>
        <Text style={styles.TypeofToiletText}>Type of Toilet</Text>
        <InputComponent
          placeholder=" "
          value={toiletType}
          onChangeText={setToiletType}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  basicInfoContainer: {
    // width: 150,
    // height: 60,
    top: 155,
    left: 50,

    // backgroundColor: 'red',
    // position: 'absolute',
  },
  basicInfoText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    left:11,
  },
  additionalContainer: {
    width: 331,
    height: 36,
    top: 10,
    left: 10,
    borderRadius: 2,
    borderWidth: 1,
    border: 'solid',
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0),linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    // position: 'relative',
  },
  additionalText: {
    width: 88,
    top: 7,
    left: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  addressContainer: {
    width: 331,
    height: 36,
    top: 20,
    left: 10,
    borderRadius: 4,
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    position: 'relative',
  },
  addressText: {
    width: 88,
    top: 12,
    left: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  locationContainer: {
    width: 150,
    height: 36,
    top: 30,
    left: 10,
    borderRadius: 4,
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    position: 'relative',
  },
  locationText: {
    width: 88,
    top: 10,
    left: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  LatLongContainer: {
    width: 170,
    height: 36,
    top: -6,
    left: 170,
    borderRadius: 4,
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    position: 'relative',
  },
  LatLongText: {
    width: 88,
    top: 10,
    left: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  FloorContainer: {
    width: 330,
    height: 36,
    top: 5,
    left: 10,
    borderRadius: 4,
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    position: 'relative',
  },
  FloorText: {
    width: 88,
    top: 10,
    left: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  ExtraInfoContainer: {
    width: 330,
    height: 36,
    top: 15,
    left: 10,
    borderRadius: 4,
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    position: 'relative',
  },
  ExtraInfoText: {
    width: 88,
    top: 10,
    left: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  OpensatContainer: {
    width: 95,
    height: 36,
    top: 25,
    left: 10,
    borderRadius: 4,
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    position: 'relative',
      },
  OpensatText: {
    width: 88,
    top: 10,
    left: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  ClosesatContainer: {
    width: 94,
    height: 36,
    top: -11,
    left: 115,
    borderRadius: 4,
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    position: 'relative',
  },
  ClosesatText: {
    width: 88,
    top: 10,
    left: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  HourOpenContainer: {
    width: 24,
    height: 26,
    top: -40,
    left: 225,
    borderRadius: 4,
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    position: 'relative',
  },
  HourOpenText: {
    width: 88,
    top: 2,
    left: 29,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  TypeofToiletContainer: {
    width: 94,
    height: 36,
    top: -25,
    left: 10,
    borderRadius: 4,
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EBECF0, #EBECF0), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EBECF0',
    position: 'relative',
  },
  TypeofToiletText: {
    width: 88,
    top: 10,
    left: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
});

export default BasicInformation;

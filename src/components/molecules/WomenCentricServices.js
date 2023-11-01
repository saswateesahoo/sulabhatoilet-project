import React,{useState} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import InputComponent from '../atoms/InputComponent';


const WomenCentricServices = () => {
  const [WomenCentricServices, setWomenCentricServices] = useState('');
  const [SanitaryPadBin, setSanitaryPadBin] = useState('');
  const [CanBuySanitaryPad, setCanBuySanitaryPad] = useState('');
  const [BabyFeedingRoom, setBabyFeedingRoom] = useState('');
  const [ChangingRoom, setChangingRoom] = useState('');
  
  return (
    <View style={{backgroundColor: 'white'}}>
      {/* <Text style={styles.WomenCentricServicesText}>Women Centric Services</Text> */}
      <View style={styles.WomenCentricServicesContainer}>
        <Text style={styles.WomenCentricServicesText}>
          Women Centric Services
        </Text>
        <InputComponent
          placeholder=" "
          value={WomenCentricServices}
          onChangeText={setWomenCentricServices}
        />
      </View>
      <View style={styles.SanitaryPadBinContainer}>
        <Text style={styles.SanitaryPadBinText}> Sanitary Pad Bin</Text>
        <InputComponent
          placeholder=" "
          value={SanitaryPadBin}
          onChangeText={setSanitaryPadBin}
        />
      </View>
      <View style={styles.CanBuySanitaryPadContainer}>
        <Text style={styles.CanBuySanitaryPadText}> Can Buy Sanitary Pad</Text>
        <InputComponent
          placeholder=" "
          value={CanBuySanitaryPad}
          onChangeText={setCanBuySanitaryPad}
        />
      </View>
      <View style={styles.BabyFeedingRoomContainer}>
        <Text style={styles.BabyFeedingRoomText}>Baby Feeding Room</Text>
        <InputComponent
          placeholder=" "
          value={BabyFeedingRoom}
          onChangeText={setBabyFeedingRoom}
        />
      </View>
      <View style={styles.ChangingRoomContainer}>
        <Text style={styles.ChangingRoomText}>Changing Room</Text>
        <InputComponent
          placeholder=" "
          value={ChangingRoom}
          onChangeText={setChangingRoom}
        />
       </View>
    </View>
  );
};
const styles = StyleSheet.create({
WomenCentricServicesContainer:{
    // width: 94,
    // height: 36,
    top: 20, 
    left: 1, 
    // backgroundColor: 'white',
    // position: 'absolute',
   
  },
  WomenCentricServicesText:{
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    top: -70,
    left:12,
    // lineHeight:0,
  },
  SanitaryPadBinContainer:{
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
  SanitaryPadBinText:{
    width: 88,
    top: -3, 
    left: 19, 
    color: 'black',
    fontSize: 11,
    fontWeight: '400',
    letterSpacing: 0.24,
    textAlign: 'left',
    position: 'absolute',
  },
  CanBuySanitaryPadContainer:{
    width: 13,
    height: 13,
    top: -20, 
    left: 138, 
    borderWidth: 1,
    background:
      'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  CanBuySanitaryPadText:{
    width: 88,
    top: -3, 
    left: 19, 
    color: 'black',
    fontSize: 8.6,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  BabyFeedingRoomContainer:{
    width: 13,
    height: 13,
    top: 7, 
    left: 10, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  BabyFeedingRoomText:{
    width: 88,
    top: -1, 
    left: 19, 
    color: 'black',
    fontSize: 9,
    fontWeight: '400',
    letterSpacing: 0.24,
    textAlign: 'left',
    position: 'absolute',
  },
  ChangingRoomContainer:{
    width: 13,
    height: 13,
    top: 7, 
    left: 138, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  ChangingRoomText:{
    width: 88,
    top: -1, 
    left: 19, 
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
});

export default WomenCentricServices;


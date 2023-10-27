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
    <View>
      {/* <Text style={styles.WomenCentricServicesText}>Women Centric Services</Text> */}
      <View style={styles.WomenCentricServicesContainer}>
        <Text style={styles.WomenCentricServicesText}>Women Centric Services</Text>
        <InputComponent
          placeholder=" "
          value={WomenCentricServices}
          onChangeText={setWomenCentricServices}
        />
      </View>
      <View style={styles. SanitaryPadBinContainer}>
        <Text style={styles. SanitaryPadBinText}> Sanitary Pad Bin</Text>
        <InputComponent
          placeholder=" "
          value={ SanitaryPadBin}
          onChangeText={setSanitaryPadBin}
        />
      </View>
      <View style={styles. CanBuySanitaryPadContainer}>
        <Text style={styles. CanBuySanitaryPadText}> Can Buy Sanitary Pad</Text>
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
      <View style={styles. ChangingRoomContainer}>
        <Text style={styles. ChangingRoomText}>Changing Room</Text>
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
    width: 94,
    height: 36,
    top: 640, 
    left: -160, 
    backgroundColor: 'white',
    position: 'absolute',
   
  },
  WomenCentricServicesText:{
    color: 'black',
    fontSize: 8.3,
    fontWeight: '400',
    letterSpacing: 0.02,
    textAlign: 'left',
    // lineHeight:0,
  },
  SanitaryPadBinContainer:{
    width: 13,
    height: 13,
    top: 666, 
    left: -160, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  SanitaryPadBinText:{
    width: 88,
    top: -1, 
    left: 19, 
    color: 'black',
    fontSize: 9,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  CanBuySanitaryPadContainer:{
    width: 13,
    height: 13,
    top: 666, 
    left: -55, 
    borderWidth: 1,
    background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  CanBuySanitaryPadText:{
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
  BabyFeedingRoomContainer:{
    width: 13,
    height: 13,
    top: 690, 
    left: -160, 
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
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
  ChangingRoomContainer:{
    width: 13,
    height: 13,
    top: 690, 
    left: -55, 
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
    fontSize: 9,
    fontWeight: '300',
    letterSpacing: 0.02,
    textAlign: 'left',
    position: 'absolute',
  },
});

export default WomenCentricServices;


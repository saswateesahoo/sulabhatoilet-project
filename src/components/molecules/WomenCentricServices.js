import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomCheckboxComponent from '../atoms/CustomCheckboxComponent';

const WomenCentricServices = () => {
  const [SanitaryPadBin, setSanitaryPadBin] = useState(false);
  const [CanBuySanitaryPad, setCanBuySanitaryPad] = useState(false);
  const [BabyFeedingRoom, setBabyFeedingRoom] = useState(false);
  const [ChangingRoom, setChangingRoom] = useState(false);
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer1}>
        <Text style={styles.inputLabel}>Women Centric Services </Text>
        <View style={styles.inputContainer}>
          <CustomCheckboxComponent
            label="Sanitary Pad Bin"
            checked={SanitaryPadBin}
            onPress={() => setSanitaryPadBin(!SanitaryPadBin)}
          />
          <CustomCheckboxComponent
            label="Can Buy Sanitary Pad "
            checked={CanBuySanitaryPad}
            onPress={() => setCanBuySanitaryPad(!CanBuySanitaryPad)}
          />
        </View>
        <View style={styles.inputContainer2}>
          <View style={styles.inputContainer}>
            <CustomCheckboxComponent
              label="Baby Feeding Room"
              checked={BabyFeedingRoom}
              onPress={() => setBabyFeedingRoom(!BabyFeedingRoom)}
            />
            <CustomCheckboxComponent
              label="Changing Room "
              checked={ChangingRoom}
              onPress={() => setChangingRoom(!ChangingRoom)}
            />
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
    marginTop: -120,
  },
  inputContainer2: {
    marginBottom: 20,
    top: -20,
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

export default WomenCentricServices;
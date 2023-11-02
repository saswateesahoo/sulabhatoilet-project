import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomCheckboxComponent from '../atoms/CustomCheckboxComponent';

const AccessInfo = () => {
  const [Free, setFree] = useState(false);
  const [Paid, setPaid] = useState(false);
  const [OpenforAll, setOpenforAll] = useState(false);
  const [RestrictedAccess, setRestrictedAccess] = useState(false);
  const [Closed, setClosed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer1}>
        <Text style={styles.inputLabel}>Access Info</Text>
        <Text style={styles.inputLabel}>Payment Info</Text>
        <View style={styles.inputContainer}>
          <CustomCheckboxComponent
            label="Free"
            checked={Free}
            onPress={() => setFree(!Free)}
          />
          <CustomCheckboxComponent
            label="Paid"
            checked={Paid}
            onPress={() => setPaid(!Paid)}
          />
        </View>
        <View style={styles.inputContainer2}>
          <Text style={styles.inputLabel}>Access Restrictions</Text>
          <View style={styles.inputContainer}>
            <CustomCheckboxComponent
              label="Open for All"
              checked={OpenforAll}
              onPress={() => setOpenforAll(!OpenforAll)}
            />
            <CustomCheckboxComponent
              label="Restricted Access"
              checked={RestrictedAccess}
              onPress={() => setRestrictedAccess(!RestrictedAccess)}
            />
            <CustomCheckboxComponent
              label="Closed"
              checked={Closed}
              onPress={() => setClosed(!Closed)}
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
    marginBottom: 40,
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
  },
});

export default AccessInfo;

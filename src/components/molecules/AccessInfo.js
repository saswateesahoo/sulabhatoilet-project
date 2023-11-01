import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckboxComponent from '../atoms/CheckboxComponent';

const AccessInfo = () => {
  // const [AccessInfo, setAccessInfo] = useState('');
  // const [PaymentInfo, setPaymentInfo] = useState('');
  const [Free, setFree] = useState(false);
  const [Paid, setPaid] = useState(false);
  // const [AccessRestrictions, setAccessRestrictions] = useState('');
  const [OpenforAll, setOpenforAll] = useState(false);
  const [RestrictedAccess, setRestrictedAccess] = useState(false);
  const [Closed, setClosed] = useState(false);

  return (
    // <View style={{ backgroundColor: 'white' }}>
    <View style={styles.container}>
      <View style={styles.inputContainer1}>
        <Text style={styles.inputLabel}>Access Info</Text>
        <Text style={styles.inputLabel}>Payment Info</Text>
        <View style={styles.inputContainer}>
          <CheckboxComponent
            label="Free"
            checked={Free}
            onPress={() => setFree(!Free)}
            // style={styles.checkbox}
          />
          <Text style={styles.label}>Free</Text>
          <CheckboxComponent
            label="Paid"
            checked={Paid}
            onPress={() => setPaid(!Paid)}
          />
          <Text style={styles.label}>Paid</Text>
        </View>
        <View style={styles.inputContainer2}>
          <Text style={styles.inputLabel}>Access Restrictions</Text>
          <View style={styles.inputContainer}>
            <CheckboxComponent
              label="Open for All"
              checked={OpenforAll}
              onPress={() => setOpenforAll(!OpenforAll)}
            />
            <Text style={styles.label3}>OpenforAll</Text>
            <CheckboxComponent
              label="Restricted Access"
              checked={RestrictedAccess}
              onPress={() => setRestrictedAccess(!RestrictedAccess)}
            />
            <Text style={styles.label4}>RestrictedAccess</Text>
            <CheckboxComponent
              label="Closed"
              checked={Closed}
              onPress={() => setClosed(!Closed)}
            />
            <Text style={styles.label5}>Closed</Text>
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
  inputContainer2:{
    marginBottom: 20,
    top: -20,
  },
  inputContainer:{
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: -20,
    // flex:1,
  },
  inputLabel: {
    color: 'black',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '400',
  },
  label:{
    margin: -33,
    // flex:1,
  },
  label3:{
    margin: -52,
    marginLeft:-55,
  },
  label4:{
    margin: -80,
    marginLeft:-70,
   
  }
  
});

export default AccessInfo;

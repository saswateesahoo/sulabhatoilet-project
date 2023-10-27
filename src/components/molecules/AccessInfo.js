import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputComponent from '../atoms/InputComponent';

const AccessInfo = () => {
  const [AccessInfo, setAccessInfo] = useState('');
  const [PaymentInfo, setPaymentInfo] = useState('');
  const [Free, setFree] = useState('');
  const [Paid, setPaid] = useState('');
  const [AccessRestrictions, setAccessRestrictions] = useState('');
  const [OpenforAll, setOpenforAll] = useState('');
  const [RestrictedAccess, setRestrictedAccess] = useState('');
  const [Closed, setClosed] = useState('');
  
  return (
    <View>
      {/* <Text style={styles.AccessInfoText}>Access Info</Text> */}
      <View style={styles.AccessInfoContainer}>
        <Text style={styles. AccessInfoText}>Access Info</Text>
        <InputComponent
          placeholder=" "
          value={AccessInfo}
          onChangeText={setAccessInfo}
        />
      </View>
      <View style={styles.PaymentInfoContainer}>
        <Text style={styles.PaymentInfoText}>Payment Info</Text>
        <InputComponent
          placeholder=" "
          value={PaymentInfo}
          onChangeText={setPaymentInfo}
        />
      </View>
      <View style={styles. FreeContainer}>
        <Text style={styles. FreeText}> Free</Text>
        <InputComponent
          placeholder=" "
          value={ Free}
          onChangeText={setFree}
        />
      </View>
      <View style={styles.PaidContainer}>
        <Text style={styles.PaidText}>Paid</Text>
        <InputComponent
          placeholder=" "
          value={Paid}
          onChangeText={setPaid}
        />
      </View>
      <View style={styles.AccessRestrictionsContainer}>
        <Text style={styles.AccessRestrictionsText}>Access Restrictions</Text>
        <InputComponent
          placeholder=" "
          value={AccessRestrictions}
          onChangeText={setAccessRestrictions}
        />
      </View>
      <View style={styles. OpenforAllContainer}>
        <Text style={styles. OpenforAllText}> Open for All</Text>
        <InputComponent
          placeholder=" "
          value={ OpenforAll}
          onChangeText={setOpenforAll}
        />
      </View>

      <View style={styles.RestrictedAccessContainer}>
        <Text style={styles.RestrictedAccessText}>Restricted Access</Text>
        <InputComponent
          placeholder=" "
          value={RestrictedAccess}
          onChangeText={setRestrictedAccess}
        />
      </View>

      <View style={styles.ClosedContainer}>
        <Text style={styles.ClosedText}> Closed</Text>
        <InputComponent
          placeholder=" "
          value={Closed}
          onChangeText={setClosed}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    AccessInfoContainer: {
        width: 94,
        // height: 36,
        top: 488, 
        left: 20, 
        backgroundColor: 'white',
        position: 'absolute',
      },
      AccessInfoText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        fontWeight: "bold",
        letterSpacing: 0.02,
        textAlign: 'left',
      },
      PaymentInfoContainer: {
        width: 94,
        // height: 36,
        top: 520, 
        left: 20, 
        backgroundColor: 'white',
        position: 'absolute',
      },
      PaymentInfoText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0.02,
        textAlign: 'left',
      },
      FreeContainer: {
        width: 13,
        height: 13,
        top: 560, 
        left: 20, 
        borderWidth: 1,
        background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        borderColor: '#EEEEEE',
        position: 'absolute',
      },
      FreeText: {
        width: 88,
        top: -4, 
        left: 19, 
        color: 'black',
        fontSize: 12,
        fontWeight: '200',
        letterSpacing: 0.02,
        textAlign: 'left',
        position: 'absolute',
      },
      PaidContainer:{
        width: 12,
        height: 13,
        top: 560, 
        left: 100, 
        borderWidth: 1,
        background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        borderColor: '#EEEEEE',
        position: 'absolute',
      },
      PaidText:{
        width: 88,
        top: -4, 
        left: 19, 
        color: 'black',
        fontSize: 12,
        fontWeight: '200',
        letterSpacing: 0.02,
        textAlign: 'left',
        position: 'absolute',
      },
      AccessRestrictionsContainer:{
        width: 94,
        // height: 36,
        top: 582, 
        left: 20, 
        backgroundColor: 'white',
        position: 'absolute',
      },
      AccessRestrictionsText:{
        color: 'black',
        fontSize: 10,
        fontWeight: '500',
        letterSpacing: 0.02,
        textAlign: 'left',
      },
      OpenforAllContainer:{
        width: 13,
        height: 13,
        top: 610, 
        left: 20, 
        borderWidth: 1,
        background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        borderColor: '#EEEEEE',
        position: 'absolute',
      },
      OpenforAllText:{
        width: 88,
        top: -2, 
        left: 19, 
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0.02,
        textAlign: 'left',
        position: 'absolute',
      },
      RestrictedAccessContainer:{
        width: 13,
        height: 13,
        top: 612, 
        left: 120, 
        borderWidth: 1,
        background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        borderColor: '#EEEEEE',
        position: 'absolute',
      },
      RestrictedAccessText:{
        width: 88,
        top: -2, 
        left: 19, 
        color: 'black',
        fontSize: 10,
        fontWeight: '400',
        letterSpacing: 0.02,
        textAlign: 'left',
        position: 'absolute',
      },
      ClosedContainer:{
        width: 13,
        height: 13,
        top: 612, 
        left: 228, 
        borderWidth: 1,
        background: 'linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        borderColor: '#EEEEEE',
        position: 'absolute',
      },
      ClosedText:{
        width: 88,
        top: -3, 
        left: 19, 
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0.02,
        textAlign: 'left',
        position: 'absolute',
      },
  });
export default AccessInfo;

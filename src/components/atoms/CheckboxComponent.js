import React from 'react';
import {CheckBox} from '@rneui/themed';

export const CheckboxComponent = ({label, checked, onPress}) => {
  return <CheckBox title={label} checked={checked} onPress={onPress} />;
};

export default CheckboxComponent;

// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {CheckBox} from '@rneui/themed';
// const CheckboxComponent = ({label, checked, onPress}) => {
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
//       <View style={[styles.checkbox, checked && styles.checked]}>
//         {checked && <Text> </Text>}
//       </View>
//       <Text style={styles.label}>{label}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderColor: 'black',
//     borderWidth: 1,
//     marginRight: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checked: {
//     backgroundColor: 'black',
//   },
//   label: {
//     fontSize: 16,
//   },
// });

// export default CheckboxComponent;

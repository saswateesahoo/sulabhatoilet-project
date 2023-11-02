// import {Input} from '@rneui/themed';

// const InputComponent = ({placeholder, value, onChangeText}) => {
//   return (
//     <Input
//       placeholder={placeholder}
//       value={value}
//       onChangeText={onChangeText}
//     />
//   )
// }
// export default InputComponent;

import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomInputComponent = ({placeholder, value, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    color: 'black',
  },
});

export default CustomInputComponent;

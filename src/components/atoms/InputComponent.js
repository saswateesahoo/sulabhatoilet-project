import { Input } from '@rneui/themed';

const InputComponent = ({placeholder, value, onChangeText}) => {
  return (
    <Input 
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
        />
  )
}
export default InputComponent;

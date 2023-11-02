import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import InputComponent from '../atoms/InputComponent';
import DocumentPicker from 'react-native-document-picker';


const PhotoUpload = () => {
  const [photo, setPhoto] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleUploadPhoto = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      setPhoto(result.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  return (
    <View>
      <Text
        style={{
          width: 150,
          height: 60,
          top: 20,
          left: 28,
          color: 'black',
          fontSize: 17,
          fontWeight: '900',
          letterSpacing: 0.02,
          //   fontstyle: 'normal',
        }}
      >
        Upload Photos
      </Text>
      
      <Image
        source={require('../assets/Rectangle.jpg')}
        style={{ width: 65, height: 65, margin: 10,top: -11,left:20 }}
      />
      <InputComponent
        placeholder=""
        value={null}
        onChangeText={(text) => {
          
        }}
      />
      <TouchableOpacity onPress={handleUploadPhoto}>
        <View
          style={{
            width: 280,
            height: 46,
            top: -50,
            left: 40,
            borderColor: '#EBECF0',
            borderRadius: 0,
            borderWidth: 1,
            fontSize: 12,
            fontWeight: '300',
            letterSpacing: 0.02,
            textAlign: 'left',
            background: '#FFF',
          }}>
          <Text style={{color: 'black', textAlign: 'center', top: 12}}>
            Add Photos for verification
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default PhotoUpload;

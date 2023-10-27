// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Superhero from '../components/molecules/Superhero';
// // import InputComponent1 from './atoms/InputComponent1';
// import BasicInformation from '../components/molecules/BasicInformation';

// import WomenCentricServices from '../components/molecules/WomenCentricServices';
// import AccessInfo from '../components/molecules/AccessInfo';
// const AddToiletPage = () => {
//   return (
//     <View style = {styles.container}>
//        {/* <Superhero /> */}
//       {/* <InputComponent1 />  */}
//        {/* <BasicInformation /> */}
//       {/* <AccessInfo /> */}
//       <WomenCentricServices /> 
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     flexDirection:'column',
//     height: '100%',
//   },
// });
// export default AddToiletPage;

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Superhero from '../components/molecules/Superhero';
// import BasicInformation from '../components/molecules/BasicInformation';
// import WomenCentricServices from '../components/molecules/WomenCentricServices';
// import AccessInfo from '../components/molecules/AccessInfo';
// import AmmenitiesAvailable from '../components/molecules/AmmenitiesAvailable';
// import PhotoUpload from '../components/molecules/PhotoUpload';
// import SaveButton from '../components/atoms/SaveButton';
// const AddToiletPage = () => {
//   return (
//     <View style = {{ backgroundColor:'white',height:'100%',flexDirection:'column'}}>
//        {/* <ScrollView>  */}
        
//          {/* <Superhero />  */}
//          {/* <BasicInformation />  */}
//          <AccessInfo /> 
//          {/* <WomenCentricServices />  */}
//         {/* <AmmenitiesAvailable/> */}
//         {/* <PhotoUpload/> */}
//         {/* <SaveButton/> */}
// {/*         
//          </ScrollView>   */}
//      </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
// export default AddToiletPage;


import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Superhero from '../components/molecules/Superhero';
import BasicInformation from '../components/molecules/BasicInformation';
import WomenCentricServices from '../components/molecules/WomenCentricServices';
import AccessInfo from '../components/molecules/AccessInfo';
import AmmenitiesAvailable from '../components/molecules/AmmenitiesAvailable';
import PhotoUpload from '../components/molecules/PhotoUpload';
import SaveButton from '../components/atoms/SaveButton';

const AddToiletPage = () => {
  return (
    <ScrollView >
      {/* <View style={{ backgroundColor: 'white', flexDirection: 'column' }}> */}
        {/* <View style={{ backgroundColor: 'lightblue' }}> */}
          <Superhero />
        {/* </View> */}
        {/* <View style={{ backgroundColor: 'lightcoral' }}>
          <BasicInformation />
        </View>
        <View style={{ backgroundColor: 'lightgreen' }}>
          <AccessInfo />
        </View>
        <View style={{ backgroundColor: 'lightgrey' }}>
          <WomenCentricServices />
        </View>
        <View style={{ backgroundColor: 'lightyellow' }}>
          <AmmenitiesAvailable />
        </View>
        <View style={{ backgroundColor: 'lightpink' }}>
          <PhotoUpload />
        </View>
        <View style={{ backgroundColor: 'lightseagreen' }}>
          <SaveButton />
        </View> */}
      {/* </View> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddToiletPage;

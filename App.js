// import React from 'react';
// import {View, Image, Text, StyleSheet} from 'react-native';
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Image
//           source={require('./images/images.jpg')}
//           style={styles.headerImage}
//         />
//         <View style={styles.sulabhaContainer}>
//           <Text style={styles.sulabhaText}>Sulabha Toilet</Text>
//           <View style={styles.preferredContainer}>
//             <Text style={styles.preferredText}>My Preferred Toilet</Text>
//             <Text style={styles.whiteText}>10 AM-11 PM</Text>
//           </View>
        
//           <View style={styles.ratingContainer}>
//             <Text style={styles.ratingText}>3.9/5</Text>
//           </View>
//           <View style={styles.experienceContainer}>
//             <View style={styles.starContainer}>
//               <Text style={styles.star}>★</Text>
//               <Text style={styles.star}>★</Text>
//               <Text style={styles.star}>★</Text>
//               <Text style={styles.star}>★</Text>
//               <Text style={styles.star}>★</Text>
//             </View>
//             <Text style={styles.experienceText}>Experience</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.featuresContainer}>
//         <Text style={styles.featureText}>FREE</Text>
//         <Text style={styles.featureText}>WomenFriendly</Text>
//         <Text style={styles.featureText}>Divyang Friendly</Text>
//         <Text style={styles.featureText}>Public Toilet</Text>
//         <Text style={styles.featureText}>Unisex</Text>
//         <Text style={styles.featureText}>Male</Text>
//         <Text style={styles.featureText}>Female</Text>
//       </View>
//       <Text style={styles.additionalText}>
//         Bhubaneswar Municipal Corporation
//       </Text>
//       <Text style={styles.additionalText}>DN Regalia Mall</Text>
//       <View style={styles.openAccessContainer}>
//         <Text style={styles.openAccessText}>Open Access</Text>
//       </View>
//       <View style={styles.locationContainer}>
//         <View style={styles.locationLeft}>
//           <Text style={[styles.blackText, styles.boldText]}>1st Floor</Text>
//           <Text style={[styles.blackText, styles.boldText]}>DN Square</Text>
//           <Text style={[styles.blackText, styles.boldText]}>
//             Infront of Escalator
//           </Text>
//           <View style={styles.womenFriendlinessContainer}>
//             <Text style={[styles.blackText, styles.boldText]}>
//               * Women Friendliness
//             </Text>
//             <Text style={styles.blackText}>Sanitary Pad Bin</Text>
//             <Text style={styles.blackText}>Baby Feeding Room</Text>
//           </View>
//           <View style={styles.amenitiesContainer}>
//             <Text style={[styles.blackText, styles.boldText]}>* Amenities</Text>
//             <Text style={styles.blackText}>Parking Facility</Text>
//             <Text style={styles.blackText}>Drinking Water</Text>
//             <Text style={styles.blackText}>Food Outlets</Text>
//           </View>
//           <View style={styles.submitReviewContainer}>
//             <Text style={[styles.blackText, styles.boldText]}>
//               SUBMIT YOUR REVIEW
//             </Text>
//           </View>
//         </View>
//         <View style={styles.locationRight}>
//           <Text style={styles.greenText}>5 Min Away</Text>
//           <Text style={styles.blackText}>300 Mtrs</Text>
//           <Text style={styles.blackText} />
//           <Text style={styles.blackText} />
//           <Text style={styles.blackText} />
//           <Text style={styles.blackText}>Can Buy Sanitary Pad</Text>
//           <Text style={styles.blackText}>Changing Room</Text>
//           <Text style={styles.blackText} />
//           <Text style={styles.blackText}>Shopping Mall</Text>
//           <Text style={styles.blackText}>EV Charging Unit</Text>
//           <Text style={styles.blackText}>Shower Rooms</Text>
//           <Text style={styles.blackText} />
//           <Text style={[styles.goldenStars]}>★★★★★</Text>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   headerContainer: {
//     position: 'relative',
//   },
//   headerImage: {
//     width: '100%',
//     height: 155,
//   },
//   sulabhaContainer: {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     position: 'relative',
//     top: 9,
//     left: 10,
//   },
//   sulabhaText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   ratingContainer: {
//     backgroundColor: 'lightgreen',
//     // paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 2,
//     marginTop: 5,
//   },
//   ratingText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   experienceContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: 6,
//   },
//   experienceText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   starContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 3,
//     // marginBottom: 6,
//   },
//   star: {
//     fontSize: 18,
//     color: 'gold',
//     marginTop: 0,
//   },
//   preferredContainer: {
//     backgroundColor: 'blue',
//     paddingVertical: 3,
//     paddingHorizontal: 5,
//     borderRadius: 5,
//     marginTop: 5,
//     flexDirection: 'column',
//     alignItems: 'flex-end',
//     position: 'absolute',
//     top: 3,
//     right: 18,
//   },
//   preferredText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   featuresContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//     marginTop: 15,
//     marginLeft: 10,
//   },
//   featureText: {
//     backgroundColor: 'skyblue',
//     color: 'white',
//     paddingVertical: 3,
//     paddingHorizontal: 5,
//     borderRadius: 5,
//     marginRight: 5,
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   preferredTimeText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 10,
//     marginLeft: 10,
//   },
//   additionalText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//     marginTop: 7,
//     marginLeft: 10,
//   },
//   openAccessContainer: {
//     backgroundColor: 'skyblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 80,
//     height: 35,
//     borderRadius: 5,
//     alignSelf: 'flex-start',
//     marginTop: 10,
//     marginLeft: 10,
//   },
//   openAccessText: {
//     fontSize: 13,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 2,
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   locationLeft: {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//   },
//   locationRight: {
//     flexDirection: 'column',
//     alignItems: 'flex-end',
//     marginTop: 5,
//     marginBottom: 10,
//   },
//   blackText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   greenText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   redText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'red',
//   },
//   boldText: {
//     marginTop: 6,
//     fontWeight: 'bold',
//   },
//   womenFriendlinessContainer: {
//     marginTop: 5,
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//   },
//   amenitiesContainer: {
//     marginTop: 5,
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'black',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   submitReviewContainer: {
//     marginTop: 10,
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'black',
//     // marginRight: 19,
//   },
//   goldenStars: {
//     fontSize: 18,
//     color: 'gold',
//     marginTop: 2,
//     // Left: 19,
//   },
// });
// export default App;


import React from 'react';
import {SafeAreaView, StatusBar, Text, StyleSheet} from 'react-native';
import AddToiletPage from './src/screen/AddToiletPage'; 

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AddToiletPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
});

export default App;


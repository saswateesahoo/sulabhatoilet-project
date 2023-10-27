import { createStackNavigator } from '@react-navigation/stack';
import AddToiletPage from '../screens/AddToiletPage';


const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddToiletPage" component={AddToiletPage} />
    </Stack.Navigator>
  );
}


export default AppNavigator;

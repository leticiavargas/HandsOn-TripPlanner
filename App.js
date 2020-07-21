import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/screens/TripsScreen';
import TripDetail from './src/screens/TripDetail';
import AddTripScreen from './src/screens/AddTripScreen';
import AddPointScreen from './src/screens/AddPointScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddTripScreen">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Trips" component={TripsScreen} options={{headerShown: false}} />
        <Stack.Screen name="TripDetail" component={TripDetail} options={{headerShown: false}} />
        <Stack.Screen name="AddTripScreen" component={AddTripScreen} options={{headerShown: false}} />
        <Stack.Screen name="AddPointScreen" component={AddPointScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
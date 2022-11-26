
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/Home";
import Login from "./screens/Login";
import SuratKeluarPublik from "./screens/SuratKeluarPublik";
import SuratMasukPublik from "./screens/SuratMasukPublik";


const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SuratMasukPublik" component={SuratMasukPublik} />
          <Stack.Screen name="SuratKeluarPublik" component={SuratKeluarPublik} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

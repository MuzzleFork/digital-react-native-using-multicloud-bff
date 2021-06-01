import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Hello = (props) => {
  const [provider, setProvider] = useState('loading')
  
  fetch (props.base + '/health')
  .then(results => results.json())
  .then(results => {
    setProvider(results.provider)
  })

  return (
    <>
      <Text>Hello from {provider}</Text>
    </>
  )
}

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View >
        <Hello base="https://ooarjou1eh.execute-api.us-west-2.amazonaws.com/multicloud" />
        <Hello base="http://sls-lucas-wus-dev-multicloud-product-demo.azurewebsites.net/api" />
      </View>
    </>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} option={{title: 'Welcome'}} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize:20
  }
});

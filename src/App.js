import React from 'react'
import FeedScreen from './scenes/feed'
import DetailsScreen from './scenes/details'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FeedScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
)

export default App
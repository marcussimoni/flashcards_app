import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Deck from '../components/Deck'

const AppStack = createStackNavigator()

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Deck" component={Deck}></AppStack.Screen>
    </AppStack.Navigator>
)

export default AppRoutes;
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddFlashcard from './AddFlashcard'
import ListFlashcards from './ListFlashcards'

const Stack = createStackNavigator()

const Flashcards = () => (
            <Stack.Navigator initialRouteName="ListFlashcards">
                <Stack.Screen name="ListFlashcards" component={ListFlashcards}/>
                <Stack.Screen name="AddFlashcard" component={AddFlashcard}/>
            </Stack.Navigator>)

export default Flashcards            

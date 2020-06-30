import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListDecks from "./ListDecks";
import AddDeck from './AddDeck'
import { createStackNavigator } from "@react-navigation/stack";
import Flashcards from "../Flashcards";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const DeckStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ListDecks" component={ListDecks}/>
            <Stack.Screen name="Flashcards" component={Flashcards}/>
        </Stack.Navigator>
    )
}

const Deck = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Decks" component={DeckStack}/>
            <Tab.Screen name="AddDeck" component={AddDeck}/>
        </Tab.Navigator>
    )

}

export default Deck;

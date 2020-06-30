import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListDecks from "./ListDecks";
import AddDeck from './AddDeck'
import { createStackNavigator } from "@react-navigation/stack";
import Flashcards from "../Flashcards";
import DeckService from '../../services/DeckService'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const ListDeckComponent = (props) => {

    const {navigation} = props
    const [decks, setDecks] = useState({})

    const findAllDecks = () => {
        DeckService.findAll().then(response => response.json()).then(json => setDecks(json))
    }

    useEffect(() => {
        return navigation.addListener('focus', () => {
            navigation.dangerouslyGetParent().setOptions({
                tabBarVisible: true
            })
            findAllDecks()
        })
    }, [navigation])

    return <ListDecks {...props} decks={decks}></ListDecks>

}

const DeckStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ListDecks" component={ListDeckComponent}/>
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

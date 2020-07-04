import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListDecks from "./ListDecks";
import AddDeck from './AddDeck'
import { createStackNavigator } from "@react-navigation/stack";
import Flashcards from "../Flashcards";
import DeckService from '../../services/DeckService'
import CustomLoading from '../Common/CustomLoading';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const ListDeckComponent = (props) => {

    const {navigation} = props
    const [decks, setDecks] = useState({})
    const [loading, setLoading] = useState(false)

    const findAllDecks = () => {
        setLoading(true)
        DeckService.findAll().then(response => response.json()).then(json => {
            setDecks(json)
            setLoading(false)
        }).catch(error => {
            setLoading(false)
        })
    }

    useEffect(() => {
        return navigation.addListener('focus', () => {
            navigation.dangerouslyGetParent().setOptions({
                tabBarVisible: true
            })
            findAllDecks()
        })
    }, [navigation])

    return (
        <>
            <CustomLoading animating={loading}/>
            <ListDecks {...props} decks={decks}></ListDecks>
        </>    
    )

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

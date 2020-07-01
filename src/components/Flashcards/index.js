import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddFlashcard from './AddFlashcard'
import ListFlashcards from './ListFlashcards'
import FlashcardsService from '../../services/FlashcardsService'

const Stack = createStackNavigator()

const ListFlashcardsComponent = (props) => {

    const findAllFlashcards = (deck) => {
        FlashcardsService.findByDeck(deck).then(response => response.json()).then(json => setFlashcards(json))
    }

    const [flashcards, setFlashcards] = useState([])
    const {navigation, route} = props

    useEffect(() => {
        return navigation.addListener('focus', () => {
            findAllFlashcards(route.params.id)
        })
    }, [navigation])

    return <ListFlashcards {...props} flashcards={flashcards}/>
}

const Flashcards = () => (
    <Stack.Navigator initialRouteName="ListFlashcards">
        <Stack.Screen name="ListFlashcards" component={ListFlashcardsComponent}/>
        <Stack.Screen name="AddFlashcard" component={AddFlashcard}/>
    </Stack.Navigator>
)

export default Flashcards            

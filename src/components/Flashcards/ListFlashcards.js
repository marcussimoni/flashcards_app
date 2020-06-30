import React from 'react'
import { View, Text } from 'react-native'

const ListFlashcards = ({route}) => {
    return <View><Text>List flashcards {JSON.stringify(route.params)}</Text></View>
}

export default ListFlashcards;
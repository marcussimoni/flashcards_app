import React, { useState, useEffect, Fragment } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Text, FlatList, View, Alert } from 'react-native'
import DeckService from '../../services/DeckService'
import style from './style'

const ListDecks = (props) => {
    const [decks, setdecks] = useState([])
    
    useEffect(() => {
        DeckService.findAll().then(response => response.json()).then(json => setdecks(json))
    }, [])

    const deckSelectHandler = (item) => {
       const {navigation} = props
       navigation.dangerouslyGetParent().setOptions({
           tabBarVisible: false
       })
       navigation.navigate('Flashcards', {screen: 'ListFlashcards', params: item})
    }

    const selectAction = () => {
        Alert.alert('prompt')
    }

    return (
        <View>
            <ScrollView>
                <FlatList
                    data={decks}
                    keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            return (
                            <TouchableOpacity onPress={() => deckSelectHandler(item)} onLongPress={() => selectAction()}>
                                <View key={index} style={style.listItem}>   
                                    <Text style={style.listLabel}>{item.name}</Text>
                                    <View style={style.descriptionContent}>
                                        <Text style={style.listDescription}>{item.description}</Text>
                                        <Text style={style.listCards}>10 Flashcards</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            )
                        }
                    }
                />
            </ScrollView>
        </View>
    )

}

export default ListDecks;
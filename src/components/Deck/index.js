import React, { useState, useEffect, Fragment } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { StatusBar, Text, FlatList, View, Alert } from 'react-native'
import DeckService from '../../services/DeckService'
import style from './style'

const Deck = (props) => {
    const [decks, setdecks] = useState([])
    
    useEffect(() => {
        DeckService.findAll().then(response => response.json()).then(json => setdecks(json))
    }, [])

    const deckSelectHandler = (item) => {
        console.warn('deck selected')
    }

    const selectAction = () => {
        Alert.alert('prompt')
    }

    return (
        <View>
            <ScrollView>
                <StatusBar barStyle="dark-content" />
                <FlatList
                    data={decks}
                    keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            return (
                            <TouchableOpacity onPress={() => deckSelectHandler(item)} onLongPress={() => selectAction()}>
                                <View key={index} style={style.listItem}>   
                                    <Text style={style.listLabel}>{item.name}</Text>
                                    <Text style={style.listDescription}>{item.description}</Text>
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

export default Deck;
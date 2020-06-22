import React, { useState, useEffect, Fragment } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { StatusBar, Text, FlatList } from 'react-native'
import DeckService from '../../services/DeckService'
import style from './style'

const Deck = (props) => {
    const [decks, setdecks] = useState([])
    
    useEffect(() => {
        DeckService.findAll().then(response => {
            response.json().then(json => setdecks(json))      
        }, error => {
            alert('erro')
        })
    }, [])

    const deckSelectHandler = (item) => {
        console.warn('deck selected')
    }

    const selectAction = () => {
        alert('Long press ...')
    }

    return (
        <ScrollView>
            <Text>Test react native app</Text>
            <StatusBar barStyle="dark-content" />
            <FlatList
                data={decks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                    return (
                    <TouchableOpacity onPress={() => deckSelectHandler(item)} onLongPress={() => selectAction()}>
                        <Fragment key={index}>   
                            <Text style={style.listItem}>{item.name}</Text>
                            <Text>{item.description}</Text>
                        </Fragment>
                    </TouchableOpacity>
                    )
                }
                }
            />
        </ScrollView>
    )
}

export default Deck;
import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import CustomInputText from '../Common/CustomInputText'
import DeckService from '../../services/DeckService'
import CustomButton from '../Common/CustomButton'
import {Title, Paragraph} from 'react-native-paper'

const validate = (title, description) => {

    const required = 'Field required'

    if(!title){
        Alert.alert(required,'Field title is required')
        return false
    }

    if(!description){
        Alert.alert(required, 'Field description is required')
        return false
    }

    return true
}

const AddDeck = () => {
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const clearInputFields = () => {
        setTitle('')
        setDescription('')
    }

    const saveDeckHandler = () => {
        if(validate(title, description)){
            DeckService.save({name: title, description}).then(reponse => {
                Alert.alert('New deck created', `The deck ${title} was added`)
                clearInputFields()
            }).catch(error => {
                Alert.alert('Erro while saving new deck')
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.title}>
                    <Title>Create new deck</Title>
                    <Paragraph>Type the name and description to create a new deck for your flashcards.</Paragraph>
                </View>
                <CustomInputText value={title} placeholder="Deck title" onChangeText={(text) => setTitle(text)}/>
                <CustomInputText value={description} placeholder="Deck description" onChangeText={(text) => setDescription(text)}/>
                <View style={styles.button}>
                    <CustomButton icon="cards-variant" onPress={saveDeckHandler}>Save</CustomButton>
                </View>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    content: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button: {
        width: '100%'
    },
    title: {
        textAlign: 'center',
        marginBottom: 20
    }
})

export default AddDeck
import React, { useState } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'
import CustomInputText from '../Common/CustomInputText'
import DeckService from '../../services/DeckService'
import Style from '../../style'

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

    const saveDeckHandler = () => {
        if(validate(title, description)){
            DeckService.save({name: title, description}).then(reponse => {
                if(response.ok()){
                    return response.json()
                }
            }).then(json => {
                Alert.alert('New deck created', `The deck ${title} was added`)
            })
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <CustomInputText value={title} placeholder="Deck title" onChangeText={(text) => setTitle(text)}/>
                <CustomInputText value={description} placeholder="Deck description" onChangeText={(text) => setDescription(text)}/>
                <View style={styles.button}>
                    <Button title="Save" onPress={saveDeckHandler}/>
                </View>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Style.backgroundColor
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
    }
})

export default AddDeck
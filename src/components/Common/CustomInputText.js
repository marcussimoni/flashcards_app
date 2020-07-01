import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: 'white', 
        width: '100%',
        marginBottom: 20,
        borderBottomWidth: 1,
        padding: 10
    }
}) 

const CustomInputText = (props) => <TextInput style={styles.inputText} {...props}></TextInput>

export default CustomInputText
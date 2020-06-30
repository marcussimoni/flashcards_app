import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: 'white', 
        width: '100%',
        marginBottom: 20
    }
}) 

const CustomInputText = (props) => <TextInput style={styles.inputText} {...props}></TextInput>

export default CustomInputText
import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';

const login = (username, password) => {
    fetch('http://10.0.2.2:8090/authentication/sign-in', {
        method: 'post',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify(
            {
                email: username,
                password: password
            }
        )
    }).then(response => response.json())
    .then(json => alert(JSON.stringify(json)))
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5d75',
    },
    content: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '70%',
        height: '50%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    inputText: {
        backgroundColor: 'white', 
        width: '100%',
        marginBottom: 20
    },
    mainTitle: {fontSize: 28, color: 'white'},
    descriptionTitle: {fontSize: 18, color: 'white', marginTop: 10},
    title: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'

    }
}) 

const Login = () => {   

    const [username, setUsername] = useState("username")
    const [password, setPassword] = useState("password")
    
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.mainTitle}>Flashcards</Text>
                <Text style={styles.descriptionTitle}>Keep learning with flashcards</Text>
            </View>
            <View style={styles.content}>

                <TextInput placeholder="Username" style={styles.inputText} onChangeText={(text) => setUsername(text)}></TextInput>
                <TextInput placeholder="Password" style={styles.inputText} onChangeText={text => setPassword(text)}></TextInput>
                
                <View style={{width: '100%'}}>
                    <Button title="Login" onPress={() => login(username, password)}/>
                </View>

            </View>
            
        </View>
    )
    
}

export default Login;
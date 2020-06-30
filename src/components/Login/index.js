import React, { useState, useContext } from 'react'
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';
import AuthContext from '../../context/auth'
import CustomInputText from '../Common/CustomInputText';

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
    
    const { loginHandler } = useContext(AuthContext);
    const [username, setUsername] = useState('admin@flashcards.com')
    const [password, setPassword] = useState("123456")
    
    function login(){
        loginHandler(username, password)
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.mainTitle}>Flashcards</Text>
                <Text style={styles.descriptionTitle}>Keep learning with flashcards</Text>
            </View>
            <View style={styles.content}>

                <CustomInputText value={username} placeholder="Username" onChangeText={text => setUsername(text)}></CustomInputText>
                <CustomInputText value={password} secureTextEntry={true} placeholder="Password" style={styles.inputText} onChangeText={text => setPassword(text)}></CustomInputText>
                
                <View style={{width: '100%'}}>
                    <Button title="Login" onPress={login}/>
                </View>

            </View>
            
        </View>
    )
    
}

export default Login;
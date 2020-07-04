import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import AuthContext from '../../context/auth'
import CustomInputText from '../Common/CustomInputText';
import CustomButton from '../Common/CustomButton';
import {Title, Paragraph, Divider} from 'react-native-paper'
import Style from '../../style';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    mainTitle: {
        fontSize: 28, 
        color: Style.backgroundColor,
    },
    descriptionTitle: {fontSize: 18, color: Style.backgroundColor, marginTop: 10},
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
    const [signIn, setSignIn] = useState(false)
    
    function login(){
        try {
            loginHandler(username, password)
            setSignIn(true)
        } catch (Error) {
            setSignIn(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Title style={styles.mainTitle}>Flashcards</Title>
                <Paragraph style={styles.descriptionTitle}>Keep learning with flashcards</Paragraph>
            </View>
            <View style={styles.content}>

                <CustomInputText value={username} placeholder="Username" onChangeText={text => setUsername(text)}></CustomInputText>
                <CustomInputText value={password} secureTextEntry={true} placeholder="Password" onChangeText={text => setPassword(text)}></CustomInputText>
                <Divider />
                <View style={{width: '100%'}}>
                    <CustomButton icon="login" loading={signIn} onPress={login}>Login</CustomButton>
                </View>

            </View>
            
        </View>
    )
    
}

export default Login;
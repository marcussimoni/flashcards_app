import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet, Animated, Alert } from 'react-native';
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

const animations = {
    margin: new Animated.Value(-1000),
    opacity: new Animated.Value(0),
    button: new Animated.Value(-1000),
}

const startAnimation = () => {
    Animated.sequence([
        Animated.timing(animations.margin,{
            toValue: 0,
            duration: 1500,
            useNativeDriver: false
        }),
        Animated.timing(animations.opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }),
        Animated.timing(animations.button, {
            toValue: 50,
            duration: 300,
            useNativeDriver: false
        }),
        Animated.timing(animations.button, {
            toValue: 0,
            duration: 350,
            useNativeDriver: false
        })
    ]).start()
}


const Login = () => {   
    
    const { loginHandler } = useContext(AuthContext);
    const [username, setUsername] = useState('admin@flashcards.com')
    const [password, setPassword] = useState("123456")
    const [signIn, setSignIn] = useState(false)
    
    useEffect(() => {
        startAnimation()
        return () => {}
    }, [])

    function login(){
        setSignIn(true)
        loginHandler(username, password, () => {
            Alert.alert('Sign in error', 'sign failed')
            setSignIn(false)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Animated.View style={{marginTop: animations.margin}}>
                    <Title style={styles.mainTitle}>Flashcards</Title>
                </Animated.View>
                <Animated.View>
                    <Paragraph style={styles.descriptionTitle}>Keep learning with flashcards</Paragraph>
                </Animated.View>
            </View>
            <Animated.View style={[styles.content, {opacity: animations.opacity}]}>

                <CustomInputText value={username} placeholder="Username" onChangeText={text => setUsername(text)}></CustomInputText>
                <CustomInputText value={password} secureTextEntry={true} placeholder="Password" onChangeText={text => setPassword(text)}></CustomInputText>
                <Divider />
                <Animated.View style={[{width: '100%', opacity: 0}, {marginLeft: animations.button, opacity: 1}]}>
                    <CustomButton icon="login" loading={signIn} onPress={login}>Sign in</CustomButton>
                </Animated.View>

            </Animated.View>
            
        </View>
    )
    
}

export default Login;
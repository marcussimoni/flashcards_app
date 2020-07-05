import React, { createContext, useState } from "react";
import HttpService from "../services/HttpService";
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = createContext({signed: true})

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    
    function loginHandler(email, password){
        HttpService().post('authentication/sign-in',{email, password}).then(response => response.json()).then(json => {
            const setItem = async () => await AsyncStorage.setItem('token', JSON.stringify(json.token))
            setItem()
            setToken(json.token)
            setUser(json)
        }).catch(error => {
            console.warn(error)
        })
    
    }

    return (
        <AuthContext.Provider value={{ token: token, loginHandler: loginHandler, user: user }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;
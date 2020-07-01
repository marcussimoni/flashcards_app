import AsyncStorage from '@react-native-community/async-storage';

const getHeaders = (token) => {
    const headers = new Headers({
        'content-type': 'application/json'
    }) 
    if(token){
        token = JSON.parse(token)
        headers.append('Authorization', `${token.type} ${token.token}`)
    }
    return headers
}

const HttpService = () => {

    const url = 'http://10.0.2.2:8090'
    
    return {
        get: async (path) => {
            const token = await AsyncStorage.getItem('token')
            return fetch(`${url}/${path}`, {
                method: 'get',
                headers: getHeaders(token)
            })
        },
        post: async (path, body) => {
            const token = await AsyncStorage.getItem('token')
            return fetch(`${url}/${path}`, {
                method: 'post',
                headers: getHeaders(token),
                body: JSON.stringify(body)
            }) 
        },
        delete: async (path) => {
            const token = await AsyncStorage.getItem('token')
            return fetch(`${url}/${path}`, {
                method: 'delete',
                headers: getHeaders(token)
            }) 
        }
    }

}

export default HttpService;
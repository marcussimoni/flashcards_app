import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

const HttpService = axios.create({
    baseURL: "http://10.0.2.2:8080/flashcards/resources"
});

HttpService.interceptors.response.use(response => {
  
    return response;
    
  }, error => {
 
    return Promise.reject(error.response)

})
  
HttpService.interceptors.request.use(async config => {

    const token = await AsyncStorage.getItem('token')

    if (token) {
        config.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
    }

    return config;

});

export default HttpService;
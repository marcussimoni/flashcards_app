import UserService from './UserService';

const DeckService = {
    findAll: () => {
        return fetch('http://10.0.2.2:8090/deck', {
            method: 'get',
            headers: new Headers({
            'Authorization': 'Bearer ' + UserService.getToken()
            })
        })
    }
}

export default DeckService
import UserService from './UserService';
import HttpService from './HttpService';


const DeckService = {
    findAll: () => HttpService().get('deck') 
}

export default DeckService
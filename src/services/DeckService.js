import HttpService from './HttpService';

const DeckService = {
    findAll: () => HttpService().get('deck'),
    save: (deck) => HttpService().post('deck', deck)
}

export default DeckService
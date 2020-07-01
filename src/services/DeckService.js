import HttpService from './HttpService';

const DeckService = {
    findAll: () => HttpService().get('deck'),
    save: (deck) => HttpService().post('deck', deck),
    delete: (id) => HttpService().delete(`deck/${id}`)
}

export default DeckService
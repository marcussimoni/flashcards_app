import HttpService from './HttpService';

const FlashcardsService = {
    findByDeck: (deck) => HttpService().get(`question/deck/${deck}`)
}

export default FlashcardsService
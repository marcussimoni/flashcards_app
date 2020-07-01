import HttpService from './HttpService';

const FlashcardsService = {
    findByDeck: (deck) => HttpService().get(`question/deck/${deck}`),
    save: (flashcard) => HttpService().post('question', flashcard),
    delete: id => HttpService().delete(`question/${id}`)
} 

export default FlashcardsService
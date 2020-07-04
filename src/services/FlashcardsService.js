import HttpService from './HttpService';

const BASE_URL = 'flashcards'

const FlashcardsService = {
    findByDeck: (deck) => HttpService().get(`${BASE_URL}/deck/${deck}`),
    save: (flashcard) => HttpService().post(BASE_URL, flashcard),
    delete: id => HttpService().delete(`${BASE_URL}/${id}`)
} 

export default FlashcardsService
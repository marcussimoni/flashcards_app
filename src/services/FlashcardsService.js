import HttpService from './HttpService';

const BASE_URL = 'flashcards'

const FlashcardsService = {
    findByDeck: (deck) => HttpService().get(`${BASE_URL}/deck/${deck}`),
    save: (flashcard) => HttpService().post(BASE_URL, flashcard),
    delete: id => HttpService().delete(`${BASE_URL}/${id}`),
    totalOlderFlashcards: () => HttpService().get(`${BASE_URL}/total-older-flashcards`)
} 

export default FlashcardsService
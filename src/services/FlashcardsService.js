import HttpService from './HttpService';

const BASE_URL = 'flashcards'

const FlashcardsService = {
    findByDeck: (deck) => HttpService.get(`${BASE_URL}/deck/${deck}`),
    save: (flashcard) => HttpService.post(BASE_URL, flashcard),
    delete: id => HttpService.delete(`${BASE_URL}/${id}`),
    totalOlderFlashcards: () => HttpService.get(`${BASE_URL}/total-older-flashcards`),
    olderFlashcards: () => HttpService.get(`${BASE_URL}/older-flashcards`),
    deleteOlderFlashcards: (ids) => HttpService.put(`${BASE_URL}/older-flashcards`,ids)
} 

export default FlashcardsService
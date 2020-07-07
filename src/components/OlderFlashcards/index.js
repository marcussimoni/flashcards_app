import React, { useState, useEffect } from 'react'
import { View, Alert, ScrollView } from 'react-native'
import FlashcardsService from '../../services/FlashcardsService'
import { List, Checkbox } from 'react-native-paper';
import Style from '../../style';
import CustomFloatButton from '../Common/CustomFloadButton';

const OlderFlashcards = () => {

    const [olderFlashcards, setOlderFlashcards] = useState([])
    const [loading, setLoading] = useState(false)

    const isChecked = (flashcard) => flashcard.checked === true ? 'checked' : 'unchecked'

    const selectFlashcard = (selectedFlashcard) => {
        
        const flashcards = [...olderFlashcards].map(item => {
            
            item.flashcards = item.flashcards.map(flashcard => {
                if(flashcard.id === selectedFlashcard.id){
                    return {...selectedFlashcard, checked: !selectedFlashcard.checked}
                } else {
                    return flashcard
                }
            })
            return item
        })
        


        setOlderFlashcards(flashcards)

    }

    let scrollViewRef
    let yOffset

    const Flashcards = ({flashcards}) => {
        return (
            <ScrollView
                style={{marginBottom: 100}}
                ref={(ref => scrollViewRef = ref)}
                onScroll={event => { yOffset = event.nativeEvent.contentOffset.y }}
                onContentSizeChange={(contentWidth, contentHeight) => { scrollViewRef.scrollTo({ x: 0, y: yOffset, animated: false }) }}>
                {
                    flashcards.map(flashcard => <List.Item key={flashcard.id} title={flashcard.question} style={{marginLeft: 25}}
                    description={flashcard.answer} left={() => <Checkbox onPress={() => selectFlashcard(flashcard)} status={isChecked(flashcard)} color={Style.backgroundColor}/>}/>)
                }
            </ScrollView>
        )
    }
    
    const Decks = () => {
        return  olderFlashcards.map(item => {
            return (
                <List.Accordion title={item.deck.name} id={item.deck.id} key={item.deck.id}>
                    <Flashcards flashcards={item.flashcards}/>
                </List.Accordion>
            )
        })
    }

    const deleteSelectedFlashcards = () => {
        if(olderFlashcards.size === 0){
            Alert.alert('None flashcard selected', 'You have to select at least one flashcard')
            return;
        } else {
            setLoading(true)
            FlashcardsService
                .deleteOlderFlashcards(olderFlashcards)
                .then(json => {
                    Alert.alert('Older flashcards', 'Older flashcards removed')
                    retrieveFlashcards()
                    setLoading(false)
                }).catch(error => {
                    Alert.alert('Error', 'Error while delete flashcards')
                    setLoading(false)
                })
        }
    }

    const retrieveFlashcards = () => {
        FlashcardsService.olderFlashcards()
        .then(response => setOlderFlashcards(response.data))
        .catch(error => Alert.alert('error', 'Error trying to retrieve older flashcards'))
    }

    useEffect(() => {
        retrieveFlashcards()
        return () => {} 
    }, [])

    return (
        <View style={{flex: 1}}>
            <List.AccordionGroup>
                <Decks></Decks>
            </List.AccordionGroup>
            <CustomFloatButton
                onPress={() => deleteSelectedFlashcards()}
                label={"Delete"}
                showModal={false}
                loading={loading}
                icon="trash-can-outline"
                />
        </View>
    )
}

export default OlderFlashcards
import React, { useState } from 'react';
import {View, Alert} from 'react-native';
import CustomInputText from '../Common/CustomInputText';
import FlashcardsService from '../../services/FlashcardsService';
import CustomButton from '../Common/CustomButton';
import {Title, Paragraph} from 'react-native-paper'

const AddFlashcard = ({deck, updateFlashcards}) => {

    const [question, setQuestion] = useState()
    const [answer, setAnswer] = useState()

  const save = () => {
    if(question && answer){
        const flashcard = {question, answer, deck}
        FlashcardsService.save(flashcard).then(response => response.json()).then(json => {
            Alert.alert('Create new flashcard', 'Flashcard create successfuly', [
              { text: 'OK', onPress: () => updateFlashcards() }
            ])
            setQuestion('')
            setAnswer('')
            
        }).catch(erro => {
            Alert.alert('Create new flashcard', 'Erro while trying to create a new flashcard')
        })

    } else {
        Alert.alert('Fields required', 'All fields are required')
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20}}>
        <Title>Create new flashcard</Title>
        <Paragraph>Type flashcard question and answer to save into '{deck.name}'</Paragraph>
      </View>
      <CustomInputText value={question} placeholder="Type flashcard question" onChangeText={(text) => setQuestion(text)}/>
      <CustomInputText value={answer} placeholder="Type flashcard answer" onChangeText={(text) => setAnswer(text)}/>
      <CustomButton icon="cards-outline" onPress={() => save()}>Save</CustomButton>
    </View>
  );
};

export default AddFlashcard;

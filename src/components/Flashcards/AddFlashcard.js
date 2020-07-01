import React, { useState } from 'react';
import {View, Button, Text, Alert} from 'react-native';
import CustomInputText from '../Common/CustomInputText';
import FlashcardsService from '../../services/FlashcardsService';

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
      <Text>Create new flashcard</Text>
      <CustomInputText value={question} placeholder="Type flashcard question" onChangeText={(text) => setQuestion(text)}/>
      <CustomInputText value={answer} placeholder="Type flashcard answer" onChangeText={(text) => setAnswer(text)}/>
      <Button title="Save" onPress={() => save()} />
    </View>
  );
};

export default AddFlashcard;

import React, {useEffect, useState, Fragment} from 'react';
import {View, Text, Alert} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';
import CustomModal from '../Common/CustomModal';
import AddFlashcard from './AddFlashcard';
import FlashcardsService from '../../services/FlashcardsService';

Icon.loadFont();

const ShowNewCardModal = (component, {showModal}) => (
  <CustomModal showModal={showModal}>{component}</CustomModal>
);

const ListFlashcards = ({navigation, route}) => {
  const [flashcards, setFlashcards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const deck = route.params.deck;

  const findAllFlashcards = deck => {
    FlashcardsService.findByDeck(deck)
      .then(response => response.json())
      .then(json => setFlashcards(json));
  };

  const deleteFlashcard = flashcard => {
    Alert.alert(
      'Delete flashcard',
      `Confirm remove of '${flashcard.question}' flashcard?`,
      [
        {
          text: 'Yes',
          onPress: () => {
            FlashcardsService.delete(flashcard.id)
              .then(response => findAllFlashcards(route.params.deck.id))
              .catch(error => alert('Failed to remove falshcard'));
          },
        },
        {text: 'No'},
      ],
    );
  };

  useEffect(() => {
    findAllFlashcards(route.params.deck.id);
    return () => {};
  }, []);

  const ModalAddNewFlashcard = () => {
    return (
      <ShowNewCardModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}>
        <AddFlashcard
          deck={deck}
          updateFlashcards={() => findAllFlashcards(route.params.deck.id)}
        />
      </ShowNewCardModal>
    );
  };

  return (
    <Fragment>
      <ModalAddNewFlashcard />

      <View>
        <FlatList
          data={flashcards}
          keyExtractor={(id, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onLongPress={() => deleteFlashcard(item)}>
                <View key={index} style={styles.listItem}>
                  <Text style={styles.listQuestion}>{item.question}</Text>
                  <Text style={styles.listAnswer}>{item.answer}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.floatButton}>
        <TouchableOpacity
          style={styles.floatIcon}
          onPress={() => setShowModal(true)}>
          <Icon name="add" size={45} />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default ListFlashcards;

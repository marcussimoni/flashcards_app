import React, {useEffect, useState, Fragment} from 'react';
import {View, Text} from 'react-native';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';
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

  const [flashcards, setFlashcards] = useState([])
  const [showModal, setShowModal] = useState(false);
  const deck = route.params.deck;

  const findAllFlashcards = (deck) => {
      FlashcardsService.findByDeck(deck).then(response => response.json()).then(json => setFlashcards(json))
  }

  useEffect(() => {
      return navigation.addListener('focus', () => {
          alert('test')
          findAllFlashcards(route.params.deck.id)
      })
  }, [navigation])

  const ModalAddNewFlashcard = () => {
    return (
      <ShowNewCardModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}>
        <AddFlashcard deck={deck}/>
      </ShowNewCardModal>
    );
  };

  return (
    <Fragment>
      <ModalAddNewFlashcard />

      <View>
        <FlatList
          data={flashcards}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
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

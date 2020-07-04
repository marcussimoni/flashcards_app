import React, {useEffect, useState, Fragment} from 'react';
import {View, Alert} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';
import CustomModal from '../Common/CustomModal';
import AddFlashcard from './AddFlashcard';
import FlashcardsService from '../../services/FlashcardsService';
import {Card, Title, Paragraph, Avatar, Divider, FAB} from 'react-native-paper'
import CustomLoading from '../Common/CustomLoading';
import Style from '../../style';

Icon.loadFont();

const ShowNewCardModal = (component, {showModal}) => (
  <CustomModal showModal={showModal}>{component}</CustomModal>
);

const ListFlashcards = ({navigation, route}) => {
  const [flashcards, setFlashcards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [floatButtonLabel, setFloatButtonLabel] = useState('')
  const deck = route.params.deck;

  const findAllFlashcards = deck => {
    setLoading(true)
    setFloatButtonLabel('create new flashcard')
    FlashcardsService.findByDeck(deck)
      .then(response => response.json())
      .then(json => {
        setFlashcards(json)
        setLoading(false)
        setFloatButtonLabel('')
      }).catch(error => {
        setLoading(false)
        setFloatButtonLabel('')
      });
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
      
      <CustomLoading animating={loading}/>

      <View>
        <FlatList
          data={flashcards}
          keyExtractor={(id, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onLongPress={() => deleteFlashcard(item)}>
                <Card key={index} style={styles.listItem}>
                  <Title style={styles.listQuestion}>{item.question}</Title>
                  <Divider style={{backgroundColor: 'white', marginTop: 10, marginBottom: 10}}/>
                  <Paragraph style={styles.listAnswer}>{item.answer}</Paragraph>
                </Card>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {
        loading ? null :
        <FAB
          style={styles.floatButton}
          color={Style.backgroundColor}
          icon="plus" large loading={showModal}
          label={floatButtonLabel}
          onPress={() => setShowModal(true)}
        />
      }
    </Fragment>
  );
};

export default ListFlashcards;

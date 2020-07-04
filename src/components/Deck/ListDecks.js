import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatList, View, Alert} from 'react-native';
import style from './style';
import DeckService from '../../services/DeckService';
import {Card, Title, Paragraph} from 'react-native-paper'

const ListDecks = props => {
  let {decks} = props;

  const deckSelectHandler = item => {
    const {navigation} = props;
    navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: false,
    });
    navigation.navigate('Flashcards', {screen: 'ListFlashcards', params: {deck: item}});
  };

  const removeDeck = (deck) => {
    Alert.alert(
      'Delete deck',
      `Confirm remove of '${deck.name}' deck?`,
      [
        {
          text: 'Yes',
          onPress: () => {
            DeckService.delete(deck.id)
              .then(response => decks = decks.filter(item => deck.id !== item.id))
              .catch(error => alert('Failed to remove deck'));
          },
        },
        {text: 'No'},
      ],
    );
  }

  return (
      <View>
        <FlatList
          data={decks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => deckSelectHandler(item)}
                onLongPress={() => removeDeck(item)}>
                <Card key={index} style={style.listItem}>
                  <Card.Content>
                    <Title style={style.listLabel}>{item.name}</Title>
                    <View style={style.descriptionContent}>
                      <Paragraph style={style.listDescription}>{item.description}</Paragraph>
                      <Paragraph style={style.listCards}>{item.totalFlashcards} Flashcards</Paragraph>
                    </View>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            );
          }}
        />
      </View>
  );
};

export default ListDecks;

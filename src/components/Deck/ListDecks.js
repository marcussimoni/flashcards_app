import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, FlatList, View, Alert} from 'react-native';
import style from './style';
import DeckService from '../../services/DeckService';

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
                <View key={index} style={style.listItem}>
                  <Text style={style.listLabel}>{item.name}</Text>
                  <View style={style.descriptionContent}>
                    <Text style={style.listDescription}>{item.description}</Text>
                    <Text style={style.listCards}>10 Flashcards</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
  );
};

export default ListDecks;

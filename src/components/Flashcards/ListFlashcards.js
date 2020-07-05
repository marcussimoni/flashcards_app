import React, {Fragment, Component} from 'react';
import {View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';
import CustomModal from '../Common/CustomModal';
import AddFlashcard from './AddFlashcard';
import FlashcardsService from '../../services/FlashcardsService';
import {Card, Title, Paragraph, Menu, Divider, FAB} from 'react-native-paper';
import CustomLoading from '../Common/CustomLoading';
import Style from '../../style';
import CustomMenu from '../Common/CustomMenu';

Icon.loadFont();

export default class ListFlashcards extends Component {
  
  constructor() {
    
    super();
    
    this.state = {
      flashcards: [],
      showModal: false,
      loading: false,
      floatButtonLabel: 'new',
      showMenu: false,
    };

  }

  setLoading = (loading) => {
    this.setState({loading})
  }

  setShowMenu = (showMenu) => {
    this.setState({showMenu})
  }

  setFloatButtonLabel = (floatButtonLabel) => {
    this.setState({floatButtonLabel})
  }

  hideFloatButton = () => {
    this.setLoading(false);
  };

  findAllFlashcards = deck => {
    
    this.setLoading(true);

    FlashcardsService.findByDeck(deck)
      .then(response => response.json())
      .then(json => {
        this.setState({flashcards: json});
        this.hideFloatButton();
      })
      .catch(error => {
        this.hideFloatButton();
      });
  };

  deleteFlashcard = flashcard => {
    this.setShowMenu(true)
  };

  

  componentDidMount = () => {
    this.findAllFlashcards(this.props.route.params.deck.id);
  };

  render = () => {

    const ModalAddNewFlashcard = () => {
      const deck = this.props.route.params.deck

      const ShowNewCardModal = (component, {showModal}) => (
        <CustomModal showModal={showModal}>{component}</CustomModal>
      );

      return (
        <ShowNewCardModal
          showModal={this.state.showModal}
          closeModal={() => this.setState({showModal: false})}>
          <AddFlashcard
            deck={deck}
            updateFlashcards={() => this.findAllFlashcards(deck.id)}
          />
        </ShowNewCardModal>
      );
    };

    return (
      <Fragment>
        <ModalAddNewFlashcard />
        <CustomLoading animating={this.state.loading} />

        <CustomMenu visible={this.state.showMenu} onDismiss={() => this.setShowMenu(false)}>
          <Menu.Item icon="update" onPress={() => alert('update')} title="Update"/>
          <Menu.Item icon="delete" onPress={() => alert('delete')} title="Delete"/>
          <Menu.Item icon="close" onPress={() => this.setShowMenu(false)} title="Close menu"/>
        </CustomMenu>

        <View>
          <FlatList
            data={this.state.flashcards}
            keyExtractor={(id, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity onLongPress={() => this.deleteFlashcard(item)}>
                  <Card key={index} style={styles.listItem}>
                    <Title style={styles.listQuestion}>{item.question}</Title>
                    <Divider
                      style={{
                        backgroundColor: 'white',
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    />
                    <Paragraph style={styles.listAnswer}>
                      {item.answer}
                    </Paragraph>
                  </Card>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {this.state.loading ? null : (
          <FAB
            style={styles.floatButton}
            color={Style.backgroundColor}
            icon="plus"
            large
            loading={this.state.showModal}
            label={this.state.floatButtonLabel}
            onPress={() => this.setState({showModal: true})}
          />
        )}
      </Fragment>
    );
  };
}

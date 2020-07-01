import React, { useState, Fragment } from 'react'
import { View, Text, StyleSheet, Modal, Button } from 'react-native'
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Style from '../../style';

const fontColor = 'white';

const textShadow = {
  textShadowColor: '#444',
  textShadowOffset: {
    height: 2,
    width: 2,
  },
  textShadowRadius: 3,
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Style.backgroundColor,
    shadowOffset: {
        shadowColor: '#000000',
        width: 5,
        height: 5,
        opacity: 1,
        
    }
  },
  descriptionContent: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listLabel: {
    fontSize: 30,
    color: fontColor,
    fontWeight: '600',
    ...textShadow,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: "left"
  }
});


const ListFlashcards = ({flashcards}) => {

    const [showModal, setShowModal] = useState(false)
    const [flashcard, setFlashcard] = useState({})
    
    const selectDeck = (flashcard) => {
        setShowModal(true) 
        setFlashcard(flashcard)
    }

    return (
        <Fragment>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {flashcard && flashcard?.answer?.split(',').map((item, position) => {
                            return <Text style={styles.modalText}>{`${position + 1} - ${item}`}</Text>
                        })}
                        <Button title="close" onPress={() => setShowModal(false)}></Button>
                    </View>
                </View>
            </Modal>
            <ScrollView>
                <FlatList
                    data={flashcards}
                    keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            return (
                                <TouchableOpacity onPress={() => selectDeck(item)}>
                                    <View key={index} style={styles.listItem}>   
                                        <Text style={styles.listLabel}>{item.question}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    }
                />
            </ScrollView>
        </Fragment>
    )
}

export default ListFlashcards;
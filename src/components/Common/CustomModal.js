import React from 'react';
import {StyleSheet, Modal, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'left',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  modalContent: {
    marginTop: 20,
  },
});

const CustomModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.children.showModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.closeButton}>
            <TouchableOpacity onPress={() => props.children.closeModal()}>
              <Icon name="close" size={20} color={'#000'} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>{props.children.children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

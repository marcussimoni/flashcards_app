import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Style from '../../style';

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 20,
    fontSize: 20,
  },
});

const CustomInputText = props => (
  <TextInput
    underlineColor={'red'}
    mode="outlined"
    style={styles.inputText}
    theme={{
      colors: {
        primary: Style.backgroundColor,
      },
    }}
    {...props}
  />
);

export default CustomInputText;

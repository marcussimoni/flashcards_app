import Style from '../../style';
import {StyleSheet} from 'react-native';

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
    },
  },
  descriptionContent: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listQuestion: {
    fontSize: 30,
    color: fontColor,
    ...textShadow,
  },
  listAnswer: {
    fontSize: 15,
    color: fontColor,
    ...textShadow,
  },
  floatButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    borderColor: Style.backgroundColor,
    borderWidth: 2,
    fontSize: 50
  }
});

export default styles
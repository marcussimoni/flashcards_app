import {StyleSheet} from 'react-native';
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

const style = StyleSheet.create({
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
  listDescription: {
    fontSize: 18,
    color: fontColor,
    fontStyle: 'italic',
    fontWeight: '500',
    ...textShadow,
  },
  listCards: {
    fontSize: 15,
    color: fontColor,
    fontStyle: 'italic',
    fontWeight: '500',
    ...textShadow,
  },
});

export default style;

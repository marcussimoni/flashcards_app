import {StyleSheet} from 'react-native'
import Style from '../../style'

const style = StyleSheet.create({
    listItem: {
        padding: 15,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 1,
        backgroundColor: Style.backgroundColor,
        
    },
    listLabel: {
        fontSize: 30,
        color: 'white'
    },
    listDescription: {
        fontSize: 18,
        color: 'white'

    }
})

export default style
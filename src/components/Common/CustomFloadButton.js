import React from 'react'
import {FAB} from 'react-native-paper';
import Style from '../../style';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    floatButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'white',
        borderColor: Style.backgroundColor,
        borderWidth: 2,
        fontSize: 50
    }
})

const CustomFloatButton = (props) => {

    const {onPress, label, showModal, icon, loading} = props

    return (
        <FAB
            style={styles.floatButton}
            color={Style.backgroundColor}
            icon={icon}
            large
            loading={loading}
            label={label}
            onPress={onPress}
      />
    )
}

export default CustomFloatButton
import React from 'react'
import {ActivityIndicator} from 'react-native-paper'
import Style from '../../style'

const CustomLoading = ({animating}) => {
    if(animating){
        return <ActivityIndicator color={Style.backgroundColor} size="large" animating={animating} style={{flex: 1, alignItems: 'center'}}/>
    } else {
        return null
    }
}

export default CustomLoading
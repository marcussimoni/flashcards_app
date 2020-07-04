import React from 'react'
import { Button } from 'react-native-paper';
import Style from '../../style';

const CustomButton = (props) => <Button labelStyle={{fontSize: 20}} color={Style.backgroundColor} icon="save" mode="contained"  {...props}>{props.children}</Button>

export default CustomButton
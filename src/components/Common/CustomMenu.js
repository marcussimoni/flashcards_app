import React from 'react';
import {View} from 'react-native';
import {Menu, Provider} from 'react-native-paper';

const CustomMenu = props => {

  const {visible, onDismiss} = props;

  const menu = (
      <Provider>
          <View>
            <Menu visible={true}>
                <Menu.Item icon="update" onPress={() => alert('update')} title="Update"/>
                <Menu.Item icon="delete" onPress={() => alert('delete')} title="Delete"/>
                <Menu.Item icon="close" onPress={() => this.setShowMenu(false)} title="Close menu"/>
            </Menu>

          </View>
      </Provider>
  )

  return visible ? menu : null;
};

export default CustomMenu;

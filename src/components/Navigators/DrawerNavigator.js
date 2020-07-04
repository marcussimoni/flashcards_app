import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerNavigator = props => {
  const navigateTo = view => {
    props.navigation.navigate(view);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Icon icon="account" size={80} />
            </View>
            <View style={{marginLeft: 15, flexDirection: 'column'}}>
              <Title style={styles.title}>Username</Title>
              <Caption style={styles.caption}>Email@email.com</Caption>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              onPress={() => navigateTo('Home')}
            />

            <DrawerItem
              label="Configuration"
              icon={({color, size}) => (
                <Icon name="settings" color={color} size={size} />
              )}
              onPress={() => navigateTo('Configuration')}
            />

            <DrawerItem
              label="Older flashcards"
              icon={({color, size}) => (
                <Icon name="settings" color={color} size={size} />
              )}
              onPress={() => navigateTo('Configuration')}
            />

            <DrawerItem
              label="Sign out"
              icon={({color, size}) => (
                <Icon name="exit-to-app" color={color} size={size} />
              )}
              onPress={() => navigateTo('Configuration')}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    justifyContent: 'center',
  },
  drawerSection: {
    marginTop: 15,
  }
});

export default DrawerNavigator;

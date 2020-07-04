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
              <Title style={styles.title}>John Doe</Title>
              <Caption style={styles.caption}>@j_doe</Caption>
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
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerNavigator;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Badge
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const DrawerNavigator = props => {
 
  const {user, olderFlashcards, navigation} = props

  const navigateTo = (view) => {
    navigation.navigate(view)
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Icon icon="account" size={80} />
            </View>
            <View style={{marginTop: 20, marginBottom: 20, flexDirection: 'column'}}>
              <Title style={styles.title}>{user?.firstName} {user?.lastName}</Title>
              <Caption style={styles.caption}>{user?.email}</Caption>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              onPress={() => navigateTo('Home')}
            ></DrawerItem>

            <DrawerItem
              label="Configuration"
              icon={({color, size}) => (
                <Icon name="settings" color={color} size={size} />
              )}
              onPress={() => navigateTo('Configuration')}
            />

            <SafeAreaView style={{flexDirection: 'row'}}>
              <DrawerItem
                label="Older flashcards"
                icon={({color, size}) => (
                  <Icon name="cards-outline" color={color} size={size} />
                )}
                style={{flexWrap: 'wrap'}}
                onPress={() => navigateTo('OlderFlashcards')}
              />
              {olderFlashcards === 0 ? null : <Badge size={30} style={{position: 'absolute', right: 10, top: 0}}>{olderFlashcards}</Badge>}
            </SafeAreaView>

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

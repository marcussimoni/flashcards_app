import React, { useContext, useState, useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Deck from '../components/Deck';
import Configuration from '../components/Configuration';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerNavigator from '../components/Navigators/DrawerNavigator'
import AuthContext from '../context/auth';
import FlashcardsService from '../services/FlashcardsService';
import Style from '../style';

Icon.loadFont();

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{
      title: 'Decks',
      headerStyle: {
        backgroundColor: Style.backgroundColor,
      },
      headerTintColor: '#fff'
    }}>
      <AppStack.Screen name="Deck" component={Deck} />
    </AppStack.Navigator>
  );
};

const drawerContentOptions = {
  itemStyle: {marginVertical: 5},
};

const AppRoutes = (props) => {
  
  const context = useContext(AuthContext)
  const [olderFlashcards, setOlderFlashcards] = useState(0) 
      
  useEffect(() => {
    FlashcardsService.totalOlderFlashcards().then(response => response.json()).then(json => setOlderFlashcards(json))
    return () => {}
  }, [])

  return (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContentOptions={drawerContentOptions}
    drawerContent={() => <DrawerNavigator user={context.user} olderFlashcards={olderFlashcards}></DrawerNavigator>}>
    <Drawer.Screen
      name="Home"
      component={StackNavigator}
      options={{drawerIcon: () => <Icon name="home" size={24} />}}
    />
    <Drawer.Screen
      name="Configuration"
      component={Configuration}
      options={{drawerIcon: () => <Icon name="settings" size={24} />}}
    />
    <Drawer.Screen
      name="OlderFlashcards"
      component={Configuration}
      options={{drawerIcon: () => <Icon name="settings" size={24} />}}
    />
    <Drawer.Screen
      name="Logout"
      component={StackNavigator}
      options={{drawerIcon: () => <Icon name="exit-to-app" size={24} />}}
    />
  </Drawer.Navigator>)
};

export default AppRoutes;

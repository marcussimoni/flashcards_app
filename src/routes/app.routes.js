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
import OlderFlashcards from '../components/OlderFlashcards';

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

const AppRoutes = () => {
  
  const context = useContext(AuthContext)
  const [olderFlashcards, setOlderFlashcards] = useState(0) 
      
  useEffect(() => {
    FlashcardsService.totalOlderFlashcards().then(response => setOlderFlashcards(response.data))
    return () => {}
  }, [])

  return (
    <Drawer.Navigator    
      initialRouteName="Home"
      drawerContentOptions={drawerContentOptions}
      drawerContent={(props) => <DrawerNavigator user={context.user} olderFlashcards={olderFlashcards} {...props}></DrawerNavigator>}>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Configuration"
        component={Configuration}
      />
      <Drawer.Screen
        name="OlderFlashcards"
        component={OlderFlashcards}
      />
      <Drawer.Screen
        name="Logout"
        component={StackNavigator}
      />
    </Drawer.Navigator>
  )
};

export default AppRoutes;

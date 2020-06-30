import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import {AuthProvider} from './src/context/auth'

const App = () => {

  return (
    <NavigationContainer>
        
        <AuthProvider>
        
          <Routes></Routes>
        
        </AuthProvider>
        
    </NavigationContainer>
  );
};


export default App;

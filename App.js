import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes'
import {AuthProvider} from './src/context/auth'
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  return (
    <PaperProvider>

      <NavigationContainer>
          
          <AuthProvider>
          
            <Routes></Routes>
          
          </AuthProvider>
          
      </NavigationContainer>
      
    </PaperProvider>
  );
};


export default App;

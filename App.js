/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';


import Header from './src/sections/components/header';
import List from './src/sections/containers/mainList';

const App: () => React$Node = () => {
  return (
    <>
     <Header/>
     <List />
    </>
  )
};


export default App;

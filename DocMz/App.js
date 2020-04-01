/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';
import Step1 from './Screens/Step1Screen';
import Step2 from './Screens/Step2Screen';
import Step3 from './Screens/Step3Screen';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='purple' />
        <View style={{ backgroundColor: 'purple', flexDirection: 'row', alignItems: 'center', paddingTop: 50, paddingBottom: 20 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>

          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight:'bold' }}>DocMz</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>

          </View>
        </View>
        <Step1 />
      </>
    );
  }
};

export default App;

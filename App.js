import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './client/index'
import { Provider } from "react-redux";
import { store } from './client/dux/store/store'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
          <Index />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

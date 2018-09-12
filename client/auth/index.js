import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from "react-navigation";
import SignUp from './SignUp'
import SignIn from './Login'


const styles = StyleSheet.create({
    icon: {
      width: 28,
      height: 28
    }
  })

  const routes = {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Sign In',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../src/images/signInButton.png')}
            style={[styles.icon, { tintColor }]}
          />
        )
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign Up',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../src/images/signUpButton.png')}
            style={[styles.icon, { tintColor }]}
          />
        )
      }
    },
  }

  const routeConfig = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#b154c9', // dfbbb1,
      inactiveTintColor: '#76818e',
      indicatorStyle: { backgroundColor: '#f8fcfb' },
      labelStyle: {
        fontSize: 20,
        paddingTop: 10
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        paddingBottom: 7
      },
    }
  }

  export default createBottomTabNavigator(routes, routeConfig)
  
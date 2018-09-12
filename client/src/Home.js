import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from "react-navigation";

import Icon  from 'react-native-vector-icons/MaterialIcons'
import Profile from './screens/Profile'
import AddTasks from './screens/AddTasks'
import Task from './screens/Task'

const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30
    },
    icons: {
        fontSize: 55,
        position: 'relative',
        bottom: 5.5,
        paddingBottom: 50
    }
  })

  const routes = {
     Task: {
      screen: Task,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./images/home.png')}
            style={[styles.icon, { tintColor }]}
          />
        )
      }
    },
    AddTasks: {
       screen: AddTasks,
        navigationOptions: {
            tabBarIcon: () => (
             <Icon style={styles.icons} color="#ff9900" >
               add_circle
              </Icon>
            )
          }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./images/if_Account_2202250.png')}
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
      activeTintColor: '#ff9900', // dfbbb1,
      inactiveTintColor: 'black',
      indicatorStyle: { backgroundColor: 'black', },
      labelStyle: {
        fontSize: 1,
        paddingTop: 10,
    },
    style: {
        backgroundColor: 'white',
        height: 50,
        borderTopWidth: 0,
        paddingBottom: 5,
      },
    }
  }

  export default createBottomTabNavigator(routes, routeConfig)
  
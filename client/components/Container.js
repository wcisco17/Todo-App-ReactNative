import React, { Component, Fragment } from 'react'
import { Text, View, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from "expo";
import PropTypes from 'prop-types';

// Hamburger Menu implement Dark Mode Button and Colors White
export const Container = ({ title, children }) => ( 
        <Fragment>
          <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#6666ff', flex: 1 }} />
                <LinearGradient colors={['#ff66ff', 'transparent']} style={styles.linearBackround}>
                <Text style={styles.header}>{title}</Text>
                    <ImageBackground style={styles.container}>
                    <ScrollView>
                       {children}
                    </ScrollView>
                    </ImageBackground>
                </LinearGradient>
            </View>
       </Fragment>

)

Container.propTypes = {
    title: PropTypes.string.isRequired
}





const styles = StyleSheet.create({
    linearBackround: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    header: {
      textAlign: 'center',
      paddingTop: 50,
      color: 'white',
      fontSize: 25
    },
    container: {
      height: '180%',
      width: '92%',
      borderRadius: 20,
      backgroundColor: 'white',
      position: 'relative',
      left: 15,
      top: 20,
    }
})

import React, { Fragment } from 'react'
import { StyleSheet, Text, ActivityIndicator, View } from "react-native";
import { Button } from 'react-native-elements'
import  PropTypes  from "prop-types";


export const LoadingButton = ({ onPress, title, isLoading }) => (
            <Button
            title={title}
            onPress={onPress}
            buttonStyle={styles.btn}
            />
)

LoadingButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}


const styles = StyleSheet.create({
    btn: {
        borderRadius: 20,
        backgroundColor: '#ff9900',
        width: 200
      },
})


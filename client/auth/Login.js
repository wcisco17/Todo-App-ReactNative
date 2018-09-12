import React, { Component } from 'react'
import { View, Text, ImageBackground, TextInput,StyleSheet } from 'react-native'
import * as firebase from 'firebase'

import { connect } from "react-redux";
import { signingIn } from "../dux/action/authAction";

import Button from '../components/Button'

 class Login extends Component {
    state = {
        username: '',
        password: ''
    }


    signIn = () => {
      const { username, password } = this.state;

      this.props.dispatchLogin(username, password)
    }



  render() {
      const { navigate } = this.props.navigation
      const { username, password } = this.state;
      const { loginFailure, authenticate } = this.props;
      
    return (
      <View style={styles.container}>
        <Text style={{ paddingBottom: 30, fontSize: 20 }} >Sign In</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={username => this.setState({ username })}
          value={username}
        />
        <Text style={{ marginTop: 7.5 }} ></Text>
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={password}
        />


        {loginFailure ? <Text style={styles.errorText}>{loginFailure}</Text> : <Text>Success Sign In</Text>}


        <Button
        title="Sign In"
        onPress={() => this.signIn()}
        isLoading={authenticate}
        />

         <Text style={{ marginTop: 5.5 }} ></Text>
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => navigate('SignUp')}
        />
       </View>
    )
  }
}

const mapDispatchToProps = {
    dispatchLogin: (username, password) => signingIn(username, password)
}

const mapStateToProps = state => ({
    loginFailure: state.auth.signInFailureMessage,
    authenticate: state.auth.isAuthenticated
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      height: 40,
      width: '90%',
      borderColor: '#b154c9',
      borderWidth: 2,
      paddingLeft: 13.5,
      marginTop: 8,
      borderRadius: 22
    },
    errorText: {
      color: 'black',
      fontSize: 12,
      padding: 13
    }
  })
  
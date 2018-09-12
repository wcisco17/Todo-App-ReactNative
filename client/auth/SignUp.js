import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, ImageBackground, TextInput,StyleSheet, ActivityIndicator } from 'react-native'
import {firebaseConfig} from '../api/FireBaseConfig'
import { signingUp } from '../dux/action/authAction'
import Button from '../components/Button'
import * as firebase from 'firebase'

 class SignUp extends Component {
      state = {
        username: '',
        password: ''
      }
            signUp = () => {
              const { username, password } = this.state;

              this.props.dispatchSignUp(username, password)
            }




            render() {
      const { navigate } = this.props.navigation;
      const { username, password } = this.state;
      const { failureSignUp, loading, signUpSuccess } = this.props
    return (
      <View style={styles.container}>
        <Text style={{ paddingBottom: 30, fontSize: 20 }} >Sign Up</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={username => this.setState({ username })}
          value={username}
        />
        <Text style={{ marginTop: 5.5 }} ></Text>
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={password}
        />


        { failureSignUp ? <Text style={styles.errorText}>{failureSignUp}</Text> : <Text>{signUpSuccess}</Text>   }


        <Button
        title="Sign Up"
        onPress={() => this.signUp()}
        isLoading={loading}
        />
        <Text style={{ marginTop: 5.5 }} ></Text>
        <Button
          title="Already have an account? Login"
          onPress={() => navigate('SignIn')}
          color={'#b154c9'}
        />
       </View>
    )
  }
}

const mapStateToProps = state => ({
    failureSignUp: state.auth.signUpFailureMessage,
    loading: state.auth.isAuthenticated,
    successSignUp: state.auth.signUpSuccess
})

const mapDispatchToProps = {
    dispatchSignUp: (username, password) =>  signingUp(username, password)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


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
      paddingLeft: 10,
      marginTop: 8,
      borderRadius: 22
    },
    errorText: {
      color: 'black',
      fontSize: 12,
      padding: 13
    }
  })

import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, AsyncStorage } from 'react-native'
import { Container } from "../../components/Container";

import { connect } from "react-redux";
import { logOut } from "../../dux/action/authAction";

class Profile extends Component {


  render() {
    console.log(`Completed Profile: ${this.props.done}`)
      return (
      <Container title="PROFILE" >
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }} >
          <Button
            title="Sign Out"
            onPress={() => this.props.dispatchLogOut()}
          />

        </View>
      </Container>
    )
  }
}


const mapDispatchToProps = {
    dispatchLogOut: () => logOut(),
}

const mapStateToProps = state => ({
    done: state.todo.done
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)



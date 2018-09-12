import React from 'react';
import { StyleSheet, Text, View, StatusBar,  } from 'react-native';
import Auth from './auth/index'
import { connect } from "react-redux";
import { getUsersStatus } from './dux/action/authAction'
import * as firebase from 'firebase'
import Home from './src/Home'




class Index extends React.Component {

  getStatus = this.props.dispatchGetStatus()

  async componentDidMount() {
    await this.getStatus
  }

  componentWillUnmount() {
    this.getStatus = true
  }


    render() {
      const { userCurrent } = this.props
      return userCurrent ? <Home /> : <Auth />
  }
}

const mapDispatchToProps = {
  dispatchGetStatus: () => getUsersStatus()
}

const mapStateToProps = state => ({
      userCurrent: state.auth.user
})


export default connect (mapStateToProps, mapDispatchToProps)(Index)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
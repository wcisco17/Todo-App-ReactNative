import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, AsyncStorage } from 'react-native'
import { Container } from "../../components/Container";
import {LoadingButton}  from "../../components/LoadingButton";
import { addTodo, saveTodo } from '../../dux/action/todoActions'
import { connect } from 'react-redux';




class AddTasks extends Component {

  state = {
    title: '',
    place: '',
    time: ''
  }
   componentDidMount() {
      this.props.dispatchSaveTodo()
  }

    confirmTodos = () => {
      const { title, place, time } = this.state;


      // this.props.dispatchTodo(title, place , time)
      this.titleInput.clear()
      this.placeInput.clear()
      this.timeInput.clear()
    }
    
    render() {
      const { title, place, time } = this.state;
    return (
      <Container title="ADD TASK" >
      <View style={styles.iconContainer} >
          <Image
          source={require('../images/icons8-pencil-and-brush-in-a-circle-64.png')}
          style={styles.icon}
          />
        </View>
      <View style={{ position: 'relative', left: 20, top: 35, }} >
        <TextInput
                  ref={title => { this.titleInput = title }}
                  placeholder="What do you need done?"
                  autoCapitalize="none"
                  style={styles.textInput}
                  onChangeText={(title) => this.setState({ title })}
                  value={title}
                  clearButtonMode="always"
                  />
              <Text style={{ paddingBottom: 10  }} ></Text>
        <TextInput
                  ref={place => { this.placeInput = place }}
                  clearButtonMode="always"
                  placeholder="Place"
                  autoCapitalize="none"
                  style={styles.textInput}
                  onChangeText={(place) => this.setState({ place }) }
                  value={place}
                  />
              <Text style={{ paddingTop: 9  }} ></Text>
        <TextInput
                  ref={time => { this.timeInput = time }}
                  clearButtonMode="always"
                  placeholder="Time"
                  autoCapitalize="none"
                  style={styles.textInput}
                  onChangeText={(time) => this.setState({ time })}
                  value={time}
                  />

        </View>
        <View style={{ position: 'relative', top: 90, left: 60 }} >
          <LoadingButton title={'Add Task'}
          onPress={() => this.confirmTodos()} />
          </View>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  dispatchTodo: (title, place, time) => addTodo(title, place, time),
  dispatchSaveTodo: () => saveTodo()
}

const mapStateToProps = state => ({
      id: state.todo.id
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTasks)


const styles = StyleSheet.create({
  iconContainer: {
      position: 'relative',
      left: 130,
      top: 20,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
    paddingLeft: 13.5,
    marginTop: 8,
    borderRadius: 22
  },
  btn: {
    borderRadius: 20,
    backgroundColor: '#ff9900',
    width: 200
  },
  btnContainer: {
    position: 'relative',
    top: 140,
    left: 60
  },
  icon: {
    width: 80,
    height: 80
  },
})


// Task For Todo: Title, Place, (Notification && Time => later)
// Inspiration: https://medium.muz.li/todo-list-inspiration-a1d736c2718a
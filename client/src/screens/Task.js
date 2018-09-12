import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Container } from "../../components/Container";
import { months } from "../../api/FireBaseConfig";
import { connect } from 'react-redux'
import { toggleTodo } from '../../dux/action/todoActions'
import TodoContainer  from "../../components/TodoContainer";

class Task extends Component {



  render() {

    const currentMonth = new Date().getMonth() // Fix Dates ! ! !
    const day = new Date().getDay()
    const date = months.map((list, i) => {
          if (list.id === currentMonth) {
              return (
                <Text key={i} style={styles.dateText}>{day}, {list.month}</Text>
              )
          }
    })


    return (
        <Container title="TASK">
            <View style={styles.container} >
               <Text style={styles.taskHeader}>Today</Text>
                  {date}
            </View>
            <TodoContainer
            data={this.props.task}
            />
        </Container>
    )
  }
}





const mapDispatchToProps = {
  dispatchToggleTodo: id => toggleTodo(id)
}

const mapStateToProps = state => {
  return {
    task: !state.todo ? [] : state.todo,
    completed: state.todo.completed,
    index: state.todo.id
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Task)



const styles = StyleSheet.create({
    container: {
      padding: 30,
      display: 'flex',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#C0C0C0',
      borderBottomWidth: 3,
    },
    taskHeader: {
      color: '#ff9900',
      fontSize: 30
    },
    dateText: {
      fontWeight: 'bold',
      color: '#d3d3d3',
      fontSize: 16
    },
})

// UI/UX: https://dribbble.com/shots/4541956-ToDo-List-App-IphoneX
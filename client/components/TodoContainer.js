import React, { Fragment } from 'react'
import { View, Text, StyleSheet, FlatList, AsyncStorage } from "react-native";
import RoundCheckbox from 'rn-round-checkbox';
import { LinearGradient } from "expo";
import { toggleTodo, saveTodo } from '../dux/action/todoActions';
import { store } from '../dux/store/store'
import { connect } from 'react-redux'


 class TodoContainer extends React.Component {
    state = {
      title: '',
      place: '',
      time: ''
    }


    render() {
      const { data, dispatchToggleTodo,  } = this.props;
      return (
        <FlatList
        data={data}
        renderItem={({ item }) => {
          const { completed,  id, title, place, time } = item;

            if (completed === true) {
               console.log('direct the item to profile && save it.')
            } else if (completed === false) {
               console.log('Leave item')
            }
            return (
              <Fragment>
             <LinearGradient
             colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
             start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={styles.todoContainer}>
                           <View style={styles.items}>
                               <Text style={styles.itemStyle}>{title}</Text>
                               <Text style={styles.itemStyle} >{place}</Text>
                             <Text style={styles.itemStyle}>{time}</Text>
                           </View>
             </LinearGradient>
                 <View style={styles.checkbox} >
                 <RoundCheckbox
                       size={50}
                       checked={completed}
                       backgroundColor='#ff66ff'
                       onValueChange={() => dispatchToggleTodo(id)}
                       borderColor='black'
                       key={id}
                       />
               </View>
            </Fragment>
           )
         }}
         keyExtractor={item => item.id}
         />
       )
    }
  }
  const mapDispatchToProps = {
      dispatchToggleTodo: (id) => toggleTodo(id),
      dispatchSaveTodo: (id, title, place, time) => saveTodo(id, title, place, time)
  }

  const mapStateToProps = state => ({
     title: state.todo.title,
     time: state.todo.time,
     place: state.todo.place 
  })

  export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)

const styles = StyleSheet.create({
    todoContainer: {
        position: 'relative',
        top: 20,
        left: 52,
        height: 80,
        width: 240,
        borderRadius: 34,
        backgroundColor: '#6666ff',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1.5,
      },
      items: {
        position: 'relative',
        left: 150
        
      },
      itemStyle: {
        paddingTop: 4.5,
        paddingBottom: 4.5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
      },
      checkbox: {
        position: 'relative',
        bottom: 45,
        left: 93
      }
})
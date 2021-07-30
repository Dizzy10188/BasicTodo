import React from 'react';
import { StyleSheet, StatusBar, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

class App extends React.Component {
  //State
  state = {
    text: "",
    todo: []
  }

  //Add TODO
  addTodo = () => {
    let newTodo = this.state.text;
    let arr = this.state.todo;
    arr.push(newTodo);
    this.setState({ todo: arr, text: "" });
  }

  //Delete TODO
  deleteTodo = (t) => {
    let arr = this.state.todo
    let index = arr.indexOf(t);
    arr.splice(index, 1);
    this.setState({ todo: arr });
  }

  //Render TODO
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <TouchableOpacity key={t}>
          <Text style={styles.listText} onPress={() => { this.deleteTodo(t) }}>{t}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={styles.container, styles.section}>
        <StatusBar hidden={true} />
        <Text style={styles.centerText}>Wesley's TODO</Text>
        <TextInput style={styles.inputArea} onChangeText={(text) => this.setState({ text })} value={this.state.text} />
        <Button style={styles.buttonStyle} title="Add TODO" onPress={this.addTodo} />
        {this.renderTodos()}
      </View>
    )
  }
}

//Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {
    borderColor: "black",
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    padding: 5
  },
  buttonStyle: {
    padding: 10,
    margin: 10
  },
  listText: {
    padding: 10,
    backgroundColor: "#99c0ff",
    borderWidth: 1,
    fontSize: 18
  },
  centerText: {
    textAlign: 'center',
    color: "black",
    fontSize: 25
  },
  section: {
    margin: 15,
    padding: 30,
    backgroundColor: '#7dabf5',
    borderRadius: 10
  }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   wholeStyle: {
//     backgroundColor: "grey",
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonStyle: {
//     backgroundColor: "grey",
//     color: "black",
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   viewStyle: {
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   inputStyle: {
//     borderColor: "black",
//     color: "white",
//     padding: 10,
//     borderWidth: 1
//   },
//   header: {
//     fontSize: 30,
//     color: "white",
//     fontWeight: "bold"
//   },
//   todo: {
//     fontSize: 40,
//     color: "black"
//   }
// });
export default App;
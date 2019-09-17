import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css'

export default class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        todos: data
      });
    })
  }

  completeTask = (id, checked) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      method: 'put',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        id: id,
        completed: checked
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id == id){
            todo.completed = !todo.completed;
          }

          return todo;
        })
      });
    })
  }

  deleteTask = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      method: 'delete'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
         todos: this.state.todos.filter(todo => {
          if(todo.id != id){
            return todo;
          }
        })
      });
    })
  }

  addTask = (title) => {
    var length = this.state.todos.length;
    var newTodo = {id: length+1, title: title, completed: false};
    fetch(`https://jsonplaceholder.typicode.com/todos/`,{
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        title: title,
        completed: false
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        todos: [newTodo,...this.state.todos]
      });
    })
  }

  render(){
    return(
      <div>
        <h1>Todos App</h1>
        <AddTodo addTask={this.addTask} />
        <Todos 
          deleteTask={this.deleteTask} 
          completeTask={this.completeTask} 
          todos={this.state.todos} 
        />
      </div>
    );
  }
}

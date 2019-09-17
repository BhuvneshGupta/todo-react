import React from 'react'
import TodoItem from './TodoItem';

export default class Todos extends React.Component {
	constructor(props){
		super();
	}

	render(){
		return(
			this.props.todos.map((todo) => (
				<TodoItem 
					deleteTask={this.props.deleteTask} 
					completeTask={this.props.completeTask} 
					key={todo.id} todo={todo} 
				/>
			))
		)
	}
}
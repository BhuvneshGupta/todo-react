import React from 'react'
import '../App.css'

export default class TodoItem extends React.Component {
	constructor(props){
		super()
	}

	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted'
		}
	}

	getPStyle = () => {
		return {
			display: 'inline-block',
			padding: '5px',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
		}
	}

	completeTask = (e, id) => {
		this.props.completeTask(e.target.getAttribute('id'), e.target.checked);
	}

	render(){
		const {id, title} = this.props.todo
		return(
			<div style={this.getStyle()} >
				<input type="checkbox" id={id} onChange={this.completeTask.bind(this)} />
				<p style={this.getPStyle()}>{title}</p>
				<button className="deleteBtn" onClick={this.props.deleteTask.bind(this,id)}>X</button>
			</div>
		);
	}
}
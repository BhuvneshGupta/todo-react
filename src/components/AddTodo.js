import React from 'react'

export default class AddTodo extends React.Component {
	constructor(props){
		super();
		this.state = {
			title : ''
		}
	}

	changeMe = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addTask = (e) => {
		e.preventDefault();
		this.props.addTask(this.state.title);
		this.setState({
			title:''
		})
	}

	textStyle = () => {
		return{
			width: '30%',
			padding: '12px 20px',
			margin: '8px 0',
			boxSizing: 'border-box'
		}
	}

	buttonStyle = () => {
		return {
			backgroundColor: '#4CAF50', /* Green */
			border: 'none',
			color: 'white',
			padding: '12px 20px',
			textAlign: 'center',
			textDecoration: 'none',
			display: 'inline-block',
			margin: '8px 0',
			fontSize: '16px'
		}
	}

	render(){
		return(
			<form onSubmit={this.addTask}>
				<input placeholder="Add todo..." style={this.textStyle()} name="title" type="text" value={this.state.title} 
					onChange={this.changeMe} 
				/>
				<button style={this.buttonStyle()}>Add</button>
			</form>
		)
	}
}
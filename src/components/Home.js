import React from 'react'

export default class Home extends React.Component{
	constructor(props){
		super();
		this.state = {
			age : props.age,
			name: 'ritu'
		}
	}

	click(){
		this.props.click(this.state.name)
	}

	render(){
		return(
			<div>
				<h1 onClick={this.click.bind(this)}>Home: {this.state.age}</h1>
			</div>
		);	
	}
}
import React from "react";
import Checkbox from "./Checkbox";

import icon_cross from "../Assets/images/icon-cross.svg";

export default class Task extends React.Component {

  constructor(props) {
		super(props);
		
		this.state = {
			completed: this.props.completed,
		}
	}
	
	toggleStatus() {
		this.setState({ completed: !this.state.completed });
	}

	render() {
		return (
			<div className='task'>
				<div className='task-content'>
					<Checkbox toggleStatus={this.toggleStatus.bind(this)} selected={this.state.completed} />
					<span className={this.state.completed ? 'completed' : ''}>{this.props.text}</span>
					<img className="cross" src={icon_cross} alt='icon-cross' onClick={() => {this.props.deleteTask(this.props.id)}} />
				</div>
				<hr />
			</div>
		);
	}
}
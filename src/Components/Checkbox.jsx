import React from "react";

import check_icon from '../Assets/images/icon-check.svg';

export default class Checkbox extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			selected: false,
		}
	}
	
	toggleStatus() {

		this.setState({ selected: !this.state.selected });
	}

	render() {
		return(
			<div className={`check${this.state.selected ? ' true-check' : ''}`} onClick={this.toggleStatus.bind(this)}>
				{!this.state.selected ? "" :
					<img src={check_icon} alt="check-icon" />
				}
			</div>
		);
	}
}
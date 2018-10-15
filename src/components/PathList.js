import React, {Component, Fragment} from 'react';
import { Item, Input, Icon, Button} from "semantic-ui-react";

import ItemPath from "../containers/ItemPath";

class PathList extends Component{
	constructor(props){
		super(props);
		this.state = {
			inputVal: '',
		}
	}

	selectItem(point){
		this.props.selectPath(point);
	}

	handleInputChange({target}){
		this.props.setSearchQuery(target.value);
		this.setState({
			inputVal: target.value,
		});
		
	}


	render(){
		
		return (
			<Fragment>
				<Button
					icon='plus'
					title='Add new path'
					primary
					onClick = {this.props.toggleModal.bind(this)}
				/>
				<Input
					icon
					placeholder='Search...'
					className='searchInput'
					value = {this.state.inputVal}
					onChange = {this.handleInputChange.bind(this)}
				>
					<input />
					<Icon name='search' />
				</Input>
				<Item.Group style={{ padding: 10 }}>
		
					{
						this.props.path ?
							this.props.path.map(point => (
								<ItemPath point={point} key={point.id} />
							))
							
							:
							<p> Список пуст</p>
		
					}
				</Item.Group>
			</Fragment>
		)
	}
	
}

export default PathList;
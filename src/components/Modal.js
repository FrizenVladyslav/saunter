import React, {Component} from 'react';
import { Button, Header, Icon, Modal, Form, Grid, Input, Message } from 'semantic-ui-react';
import Map from "./Map";
import ConfirmModal from './ConfirmModal';
import fire from "../fire";

class ModalWindow extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			shortDescription: '',
			description: '',
			pathPoints: [],
			distance: '',
			errors: '',
			titleError: false,
			shortDescriptionError: false,
			descriptionError: false,
			conmfirmModalOpen: false,

		}
	}

	handleClose(){
		this.setState({
			title: '',
			shortDescription: '',
			description: '',
			pathPoints: [],
			distance: '',
			errors: '',
			titleError: false,
			shortDescriptionError: false,
			descriptionError: false,
			conmfirmModalOpen: false,
		});
		this.props.toggleModal()
	}

	closeConmfirmModal(){
		this.setState({conmfirmModalOpen: false});
	}

	handleClickMap(lat, lng){
		this.setState({
			pathPoints: [...this.state.pathPoints, {lat, lng}],
		})
	}

	handleAddPath(){
		let {title, shortDescription, description, pathPoints} = this.state;
		if(!title || !shortDescription || !description){
			this.setState({errors: 'Все поля должны быть заполнены'});
			if(!title) this.setState({titleError: true});
			if(!shortDescription) this.setState({shortDescriptionError: true});
			if(!description) this.setState({descriptionError: true});
		}else{
			if(shortDescription.length > 160) {
				this.setState({
					errors: 'Краткое описание должно быть меньше 160 символов',
					shortDescriptionError: true,
				});
			}else if(pathPoints.length < 2){
				this.setState({errors: 'Установите минимум 2 местности на карте'})
			}else{
				this.setState({
					conmfirmModalOpen: true,
					errors: '',
					titleError: false,
					shortDescriptionError: false,
					descriptionError: false,
				});
			}
		}
		
	}

	setDistance(distance) {
		this.setState({distance});
	}

	addPathConmfirm(){
		const {
			title,
			shortDescription,
			description,
			pathPoints,
			distance
		} = this.state;
		let newPath = {
			id: Date.now(),
			title,
			shortDescription,
			description,
			pathPoints,
			distance
		};
		this.setState({
			title: '',
			shortDescription: '',
			description: '',
			pathPoints: [],
			distance: '',
			errors: '',
			titleError: false,
			shortDescriptionError: false,
			descriptionError: false,
			conmfirmModalOpen: false,
		});

		fire.database().ref('path').push( newPath);
		this.props.toggleModal();
		
	}

	render(){
		
		return (
			
				<Modal open={this.props.open} >
					<Header icon='map outline' content='Add new path' />
					<Grid divided='vertically'>
						<Grid.Row columns={2}>
							<Grid.Column mobile={16} computer={8}>
								<Modal.Content style={{padding: 10}}>
									{this.state.errors? <Message color='red'>{this.state.errors}</Message> : null}
									<Form>
										<Form.Field>
											<label>Title</label>
											<Input error={this.state.titleError} value={this.state.title} onChange={({target}) => this.setState({title: target.value})} placeholder='Title' />
										</Form.Field>
										<Form.Field>
											<Form.TextArea
												label='Short description'
												placeholder='Short'
												onChange={({target}) => this.setState({shortDescription: target.value})}
												error = {this.state.shortDescriptionError}
											/>
										</Form.Field>
										<Form.Field>
											<Form.TextArea
												error ={this.state.descriptionError}
												label='Description'
												placeholder='Full'
												onChange={({target}) => this.setState({description: target.value})}
												style={{height: 100}}
											/>
										</Form.Field>
									</Form>
								</Modal.Content>
							</Grid.Column>
							<Grid.Column mobile={16} computer={8}>
								<Map 
									lat={36.169828}
									lng={-115.2200541}
									handleClickMap={this.handleClickMap.bind(this)}
									pathPoints = {this.state.pathPoints}
									setDistance = {this.setDistance.bind(this)}
									
								/>
								
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Modal.Actions>
					<Button
						color='red'
						onClick={this.handleClose.bind(this)}
					>
						<Icon name='remove' /> Отмена
					</Button>
					<Button
						color='green'
						onClick = {this.handleAddPath.bind(this)}
					>
						<Icon name='checkmark' /> Добавить
					</Button>
					</Modal.Actions>

					<ConfirmModal 
						conmfirmModalOpen = {this.state.conmfirmModalOpen}
						title = {this.state.title}
						shortDescription = {this.state.shortDescription}
						description = {this.state.description}
						closeConmfirmModal = {this.closeConmfirmModal.bind(this)}
						pathPoints = {this.state.pathPoints}
						addPathConmfirm = {this.addPathConmfirm.bind(this)}
						setDistance = {this.setDistance.bind(this)}
						distance = {this.state.distance}
					/>
				</Modal>
			
		)}
}

export default ModalWindow;
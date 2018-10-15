import React from 'react';
import { Link } from "react-router-dom";
import { Container, Header, Loader, Grid, Icon, Button } from 'semantic-ui-react';
import fire from "../fire";

import Map from "./Map";

const PathPage = props => {
	const {
		path,
		match,
		favoritePath,
	} = props;
	let book,
		inFavorite;
	path? book = path.find(point => point.id == match.params.id) : book = null;

	(favoritePath && book)? inFavorite = favoritePath.find(item => item === book.id) : inFavorite = false;
	return(
		book ?
			<Container fluid>
				<Grid divided='vertically'>
						<Grid.Row>
							<Grid.Column style={{marginBottom: 0}}>
								<Link to='/' className='PageLink'>
									<Icon name='chevron circle left' size='big'/>
								
								</Link>
								{
									inFavorite?
										<Icon
											className='FavoriteStar'
											name='star'
											size='big'
											title='remove from favorite'
											onClick = {() =>{
												props.removeFromFavorite(book.id)}}

										/>
									:
										<Icon
											className = 'FavoriteStar'
											name='star outline'
											size='big'
											floated='right' 
											title='add to favorite'
											onClick = {
												() => {
													props.addToFavorite(book.id)
												}
											}
										/>
								}
							</Grid.Column>
						</Grid.Row>

						<Grid.Row columns={2} style={{padding: 20}}>
							<Grid.Column mobile={16} computer={8}>
								<Header as='h2'>{book.title}</Header>
								<p>{book.shortDescription}</p>
								<p>{book.description}</p>
							</Grid.Column>
							<Grid.Column mobile={16} computer={8}>
								<Map
									lat={36.169828}
									lng={-115.2200541}
									pathPoints = {book.pathPoints}
								/>
								<div className='pathPageSegment'>
									<p>Длина: {book.distance/1000}км.</p>
									<Button 
										color='red'
										onClick = {() => {
											props.removeFromFavorite(book.id);
											fire.database().ref('path/' + book.key).remove();
										}}
									><a
										href='/'
										style ={{color: '#fff'}}
										onClick = {() => {
										props.removeFromFavorite(book.id);
										fire.database().ref('path/' + book.key).remove();
									}}>Удалить</a></Button>
								</div>
							</Grid.Column>
						</Grid.Row>
				</Grid>
			</Container>
		:
			<Loader active inline='centered' />
	);
}

export default PathPage;
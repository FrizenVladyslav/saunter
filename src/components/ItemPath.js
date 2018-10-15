import React from 'react';
import { Button, Item, Icon, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ItemPath = ({point, favoritePath}) => {
	let inFavorite;
	favoritePath? inFavorite = favoritePath.find(item => item === point.id): inFavorite = false
	

	return (
		<Item >
			<Item.Content>
				<Segment>
					<Grid divided='vertically'>
						<Grid.Row columns={2}>
							<Grid.Column mobile={16} computer={8}>
								<Item.Header ><Link to={`${point.id}`}><Icon name='map'/>{point.title}</Link></Item.Header>
								<Item.Meta>{point.shortDescription}</Item.Meta>
								<Item.Description>
									{point.description}
								</Item.Description>
								<Item.Extra 
									floated='right'>{`${point.distance/1000}км`}</Item.Extra>
							</Grid.Column>
							<Grid.Column mobile={16} computer={8}>
								<Button floated='right'>  
									<Link to={`${point.id}`}>Подробнее</Link>
								</Button>
								{
									inFavorite? 
										<Button
											floated='right'
											color='red'
											content='in favorite'
											icon='star outline'	
										/>
									:
										null
								}
								
								
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Item.Content>
		</Item>
	);
}

export default ItemPath;


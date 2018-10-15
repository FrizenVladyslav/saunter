import React from 'react';
import { Header, Segment } from "semantic-ui-react";

const PageHeader = props => {
	return (
		<Segment clearing>
			<Header as='h2' floated='left'>
				Saunter
    		</Header>
		</Segment>
	)
}

export default PageHeader;
import React from 'react';
import './FavouriteList.css'; 
import { Button, Container, Row, Col } from 'react-bootstrap';

const FavouriteList = props => {
	
	const imageUrl = props.sendfavouriteList.artworkUrl100;
	return (
		<div className="FavouriteList-column">
			<Container>
                <Row>
       				<Col>
						<img onClick={props.playSong} 
							src={imageUrl} 
							alt="" 
							style={{width: '90%' }} 
						/>
					</Col>
				</Row>
				
				<Row>     
                    <Col>
                    	<Button  variant="danger" className="mr-2" onClick={props.removeSong}> Remove </Button>
                    </Col>  
                </Row>
		    </Container>
		</div>
		
	);
}

export default FavouriteList;
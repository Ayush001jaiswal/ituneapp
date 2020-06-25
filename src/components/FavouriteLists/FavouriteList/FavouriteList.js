import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFavouriteList = styled.div `
	float: left;
    width: 25%;
    padding: 20px;
    box-sizing: border-box;
    
    Button {
    	margin: 10px;
    }

    img {
    	width:90%;

    }
`;

const FavouriteList = props => {
	
	const imageUrl = props.sendfavouriteList.artworkUrl100;
	return (
		<StyledFavouriteList>
			<Container>
                <Row>
       				<Col>
						<img onClick={props.playSong} 
							src={imageUrl} 
							alt="" 
						/>
					</Col>
				</Row>
				
				<Row>     
                    <Col>
                    	<Button  variant="danger" className="mr-2" onClick={props.removeSong}> Remove </Button>
                    </Col>  
                </Row>
		    </Container>
		</StyledFavouriteList>
		
	);
}

export default FavouriteList;
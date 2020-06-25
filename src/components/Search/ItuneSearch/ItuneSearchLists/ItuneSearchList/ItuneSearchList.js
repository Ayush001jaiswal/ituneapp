import React from 'react';
import moment from 'moment';
import { Button, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSearchList = styled.div `
    float: left;
    width: 25%;
    padding: 20px;

    Button {
        margin: 10px;
    }

    img {
        width: 80%;
    }

`; 


const ituneSearchList = props => {
	
    const imageUrl = props.searchList.artworkUrl100;
    const formattedDate = moment(props.searchList.releaseDate).format('DD MMM YY');

    return (
        <StyledSearchList>
            <Container>
                <Row> 
                    { imageUrl ?
                        <Col>
                            <img 
                                onClick={props.playSong} 
                                src={imageUrl} 
                                alt="" 
                            />
                        </Col>
                    : '' }
                </Row>    
                
                <Row>     
                    <Col>
                        <Button variant="primary" className="mr-2" onClick={props.addToFavouriteList}> Favourite List </Button>
                    </Col>  
                </Row>
            </Container>
        </StyledSearchList>
    );
}

export default ituneSearchList;






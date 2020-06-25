import React from 'react';
import './ItuneSearchList.css';
import moment from 'moment';
import { Button, Container, Row, Col } from 'react-bootstrap';

const ituneSearchList = props => {
	
    const imageUrl = props.searchList.artworkUrl100;
    const formattedDate = moment(props.searchList.releaseDate).format('DD MMM YY');

    return (
        <div className="ituneSearchList-column">
            <Container>
                <Row> 
                    { imageUrl ?
                        <Col>
                            <img 
                                onClick={props.playSong} 
                                src={imageUrl} 
                                alt="" 
                                style={{width: '80%' }} 
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
        </div>
    );
}

export default ituneSearchList;






import React from 'react';
import FavouriteList from './FavouriteList/FavouriteList';
import styled from 'styled-components';

const favouriteLists = props => {
	
	const StyledFavouriteLists = styled.div `
		&:after {
			content: "";
  			clear: both;
  			display: table;
		}	
	`;


	const favouriteListDetails = props.sendfavouriteList.map((items, key) => {
		return( 
			<FavouriteList 
				key={key} 
				removeSong={props.removeSong.bind(this, items)} 
				playSong={props.playSong.bind(this, items)} 
				sendfavouriteList={items}  
			/>
		);
	}); 

	return (
		<StyledFavouriteLists>
			 {favouriteListDetails}
		</StyledFavouriteLists>
	);
}

export default favouriteLists;
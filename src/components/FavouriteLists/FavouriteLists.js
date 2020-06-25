import React from 'react';
import './FavouriteLists.css'; 
import FavouriteList from './FavouriteList/FavouriteList'

const favouriteLists = props => {
	
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
		<div className="FavouriteLists-row">
			 {favouriteListDetails}
		</div>
	);
}

export default favouriteLists;
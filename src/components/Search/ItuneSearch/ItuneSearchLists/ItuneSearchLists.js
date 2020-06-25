import React from 'react';
import './ItuneSearchLists.css';
import ItuneSearchList from './ItuneSearchList/ItuneSearchList';


const ItuneSearchLists = props => {
	    
    const serachLists = props.searchResults.map((items, key) => {
		return( 
			<ItuneSearchList 
				playSong={props.playSong.bind(this, items)} 
				addToFavouriteList={props.addToFavouriteList.bind(this, items)}
				key={key} 
				searchList={items} 
			/>
		);
	});

	return(
		<div className="ituneSearchLists-row">
			{serachLists}
		</div>
	);
}	

export default ItuneSearchLists;






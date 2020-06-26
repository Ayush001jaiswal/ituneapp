import React from 'react';
import ItuneSearchList from './ItuneSearchList/ItuneSearchList';
import styled from 'styled-components';

const StyledSearchLists = styled.div `
    &:after {
  		content: "";
  		clear: both;
  		display: table;
	}
`;


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
		<StyledSearchLists>
			{serachLists}
		</StyledSearchLists>
	);
}


export default ItuneSearchLists;







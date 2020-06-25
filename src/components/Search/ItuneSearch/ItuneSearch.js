import React from 'react';
import './ItuneSearch.css';


const ituneSearch = props => (
	<div className="ituneSearch">
	    <div className="search-container">
		    <form>
				<input 
					onKeyPress={props.search} 
					type="text" 
					ref={props.searchInput} 
					placeholder="Search.." 
				/>
			</form>	
		</div>
	</div>
);

export default ituneSearch;
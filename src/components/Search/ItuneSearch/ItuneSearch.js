import React from 'react';
import styled from 'styled-components';

const StyledItemSearch = styled.div `
	float: right;
`;

const Input = styled.input `
	padding: 6px;
  	border: none;
 	margin-top: 8px;
  	margin-right: 20px; 
  	font-size: 17px;
`;


const ituneSearch = props => (
	<StyledItemSearch>
        <form>
			<Input 
				onKeyPress={props.search} 
				type="text" 
				ref={props.searchInput} 
				placeholder="Search.." 
			/>
		</form>	
	</StyledItemSearch>
);

export default ituneSearch;
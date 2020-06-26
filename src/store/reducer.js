import axios from 'axios';

const initialState = {
	searchResults: [],
	error: false	
}


const reducer = (state = initialState , action) => {
	switch(action.type) {
		case  'onSearch':
			const seachItem = action.searchInput.current.value; 
	    	axios.get('https://itunes.apple.com/search?term=' + seachItem)
	    	.then((response) => { 
	    		return {  ...state, searchResults: response.data.results }
	    	})
	    	.catch((error) => {
	    		return {...state, error:true}
	    	});
		}	  
		
		return state;
}

export default reducer;
import React, {Component} from 'react';
import axios from 'axios';
import ItuneSearch from '../../components/Search/ItuneSearch/ItuneSearch';
import ItuneSearchLists from '../../components/Search/ItuneSearch/ItuneSearchLists/ItuneSearchLists';
import FavouriteLists from '../../components/FavouriteLists/FavouriteLists';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import styled from 'styled-components';


const StyledNavbar =  styled.div  `
	overflow: hidden;
  	background-color: #e9e9e9;

  	a {
  		float: left;
  		display: block;
  		color: black;
  		text-align: center;
  		padding: 14px 16px;
  		text-decoration: none;
  		font-size: 17px;

  	}

  	& a:hover {
  		background-color: #ddd;
  		color: black;
  	}

  	& a:active {
  		background-color: #2196F3;
  		color: white;	
	}
 
`;

class Home extends Component {

	constructor(props) {
		super(props);
		this.searchInput = React.createRef();
		
		this.state = {
			searchResults: [],
			succees: false,
			error: false, 
			favouriteList:[],
			currentSongs: '',
			isPlay: false,
			message: false,
		};
	}

	
	searchHandler = (e) => {
		const seachItem = this.searchInput.current.value; 
	    axios.get('https://itunes.apple.com/search?term=' + seachItem)
	    .then((response) => {
	    	this.setState({searchResults: response.data.results, succees: true});
	    })
	    .catch((error) => {
	    	this.setState({error: true});
	    });
	}

	addToFavouriteList = (favSong) => {
		const favouriteList  = [ ...this.state.favouriteList ];
		if(favouriteList.indexOf(favSong) === -1) {
			favouriteList.push(favSong);
			this.setState({favouriteList: favouriteList});
		}
	}

	
	playSongHandler = (song) => {
		var audio = document.getElementById("myAudio"); 

		if(this.state.currentSongs == '' || (this.state.currentSongs === song.previewUrl)) {
			this.setState({currentSongs: song.previewUrl, isPlay:!this.state.isPlay, message: false})
		}  
		else if(this.state.isPlay === true && this.state.message == false) {
			this.setState({message: true, currentSongs: song.previewUrl});
		} else {
		  this.setState({currentSongs: song.previewUrl, isPlay:!this.state.isPlay, message: false})
		}
		
	}

	removeSongHandler = (removeSong) => {
		const removeSongs =	removeSong.previewUrl;
		const favouriteSongList = [ ...this.state.favouriteList ];
		const newFavourateList = favouriteSongList.filter(song => song.previewUrl !==  removeSongs);
		this.setState({favouriteList: newFavourateList});	
	}

	
	render() {
		return(
			<div className="Home">
				<StyledNavbar>
					<Link  to="/">Home</Link>
					<Link  to="/favourite">Favourite List</Link>
						<Route path="/" exact>
							<ItuneSearch 
								searchInput={this.searchInput} 
								search={this.searchHandler} 
							/>
						</Route>
				</StyledNavbar>
				
				{ this.state.message ? 
					(<p style={{color:'red'}}>Please first stop the previous audio</p>): 
					
					this.state.isPlay ? ( 
				        <audio id="myAudio" controls autoPlay="autoplay">
	 				    <source src={this.state.currentSongs} type="audio/mpeg" />
	 				    </audio>
	 				 ) : null
				}
				
				<Route path="/" exact>
					<ItuneSearchLists 
						playSong={this.playSongHandler} 
						addToFavouriteList={this.addToFavouriteList} 
						searchResults={this.state.searchResults} />
				</Route>
					
				<Route path="/favourite">
					<FavouriteLists 
						removeSong={this.removeSongHandler} 
						playSong={this.playSongHandler} 
						sendfavouriteList={this.state.favouriteList}  
					/>
				</Route>
			</div>	
		);
	}
}

export default Home;


import React, {Component} from 'react';
import {View ,Text,ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetail'

//first install axios for making http requests and then import them.. 
class AlbumList extends Component{
    // state is created .. to handke data to store data or state of app , as soon as state is updated , app re renders itself, and is displayed on screen , and this state is used in class based coponent only
     state={
        albums : [],
     };
//on success we use .then to handle that promise
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response =>this.setState({albums:response.data}));
        
    }

    renderAlbums(){
        return this.state.albums.map(album =>
             <AlbumDetails key={album.title} album={album} />)
    }
    // ye jo argument mein album h , ye albums ke har ek object ko pakad rha h aur uske title ko display kar rha h 


    render(){
        return(
            <ScrollView>
            {this.renderAlbums()}
            </ScrollView> 
        );
    }
}
//classes do not require semi colon at the end
export default AlbumList;


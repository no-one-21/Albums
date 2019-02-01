//import a library to help create a component
import React from 'react';
import ReactNative,{ View } from 'react-native'; 
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


  
//create a component
const App = () => {

    return(
        <View>
        <Header headerText={ 'Albums!'} />
        <AlbumList/>
        </View> // do ko return karne ke liye , we have to cobine them into one view tag , cant return header and list ek saath
    );

};


// in line 14, string pass krni h toe , it should be passed with quotations 
// render a component
ReactNative.AppRegistry.registerComponent('albums', ()=> App)
// ue album ka naam same rehna chahiye ...project ka naam and ...ek fat arroe function jismein sab kuch rakha hua h 

 
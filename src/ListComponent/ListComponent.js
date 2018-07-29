import React, { Component } from 'react';
import ListItem  from './ListItem';
import './ListComponent.css';

class ListComponent extends Component {
    render(){
        return(
            <div className = "list-component">
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
            </div>
        );
    }
}

export default ListComponent;
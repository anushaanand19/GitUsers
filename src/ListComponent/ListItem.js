import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <div className="avatar">
          <img src="http://placehold.it/100" alt="Test" />
        </div>
        <div className="user-details">
          <div className="name">Name</div>
          <div className="url">URL</div>
          <div className="data-one">DataOne</div>
          <div className="data-two">DataTwo</div>
        </div>
        <button className="details-btn">Details</button>
      </div>
    );
  }
}

export default ListItem;

// const squares = nums.map((num) => {return num*num;} )

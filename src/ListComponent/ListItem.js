import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <div className="avatar">
          <img src={`http://robohash.org/${this.props.user.id}`} alt="Test" />
        </div>
        <div className="user-details">
          <div className="name">{this.props.user.id}</div>
          <div className="url">{this.props.user.title}</div>
          <div className="data-one">{this.props.user.body}</div>
          <div className="data-two">DataTwo</div>
        </div>
        <button className="details-btn">Details</button>
      </div>
    );
  }
}

export default ListItem;

// const squares = nums.map((num) => {return num*num;} )

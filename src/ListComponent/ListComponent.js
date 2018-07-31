import React, { Component } from "react";
import ListItem from "./ListItem";
import "./ListComponent.css";

class ListComponent extends Component {
  render() {
    let listItems = [];
    if (this.props.users.length > 0) {
      listItems = this.props.users.map(userData => {
        return <ListItem key={userData.id} user={userData} />;
      });
    }

    return <div className="list-component">{listItems}</div>;
  }
}

export default ListComponent;

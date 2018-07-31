import React, { Component } from "react";
import "./App.css";
import SearchComponent from "./SearchComponent/SearchComponent.js";
import ListComponent from "./ListComponent/ListComponent.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedUsers: [],
      searchfield: "est"
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
    fetch("https://jsonplaceholder.typicode.com/posts?q=" + event.target.value)
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        this.setState({ searchedUsers: responseData });
      });
  };
  render() {
    return (
      <div className="appcomponent">
        <SearchComponent searchdata={this.onSearchChange} />
        <ListComponent users={this.state.searchedUsers} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./SearchComponent.css";
class SearchComponent extends Component {
  render() {
    return (
      <div className="searchcomponent">
        <div className="container">
          <div className="search-dropdown">
            <select>
              <option value="A-Z">Sort By Name(A-Z)</option>
              <option value="Z-A">Sort By Name(Z-A)</option>
              <option value="RankAsc">Rank Ascending</option>
              <option value="RankDesc">Rank Descending</option>
            </select>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search here"
              onChange={this.props.searchdata}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchComponent;

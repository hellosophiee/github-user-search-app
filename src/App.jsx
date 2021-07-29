import React, { Component } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Profiles from "./Profiles";

import "./styles.css";

const API = "https://api.github.com/";

export default class App extends Component {
  state = {
    searchText: "hellosophiee",
    data: ""
  };

  fetchSearch = (username) => {
    let url = `${API}search/users?q=${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data
        });
      })
      .catch((err) => console.log("Oops! There is a problem" + err));
  };

  componentDidMount() {
    this.fetchSearch(this.state.searchText);
  }

  render() {
    return (
      <div>
        <Header />
        <SearchForm fetchSearch={this.fetchSearch} />
        <Profiles data={this.state.data} />
      </div>
    );
  }
}

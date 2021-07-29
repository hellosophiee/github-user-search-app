import React, { Component } from "react";

export default class SearchForm extends Component {
  handleForm = (e) => {
    e.preventDefault();
    let username = this.refs.username.value;
    this.props.fetchSearch(username);
  };

  render() {
    return (
      <div className="search-bar">
        <form className="input-group" onSubmit={this.handleForm}>
          <input
            type="search"
            ref="username"
            placeholder="Type Username here"
            className="form-control"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

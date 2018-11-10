import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { appLoadingStart, appLoadingEnd } from "../actions/app";

class App extends Component {
  componentDidMount() {
    this.props.appLoadingEnd();
  }

  render() {
    const { loading, fetching, error } = this.props;

    return (
      <div>
        {loading ? "Loading" : "Loaded"}
        <h2>!MERN Stack Boilerplate!</h2>
        <p>The set up is finished successfuly!</p>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  loading: app.loading,
  fetching: app.fetching,
  error: app.error
});

export default connect(
  mapStateToProps,
  { appLoadingStart, appLoadingEnd }
)(App);

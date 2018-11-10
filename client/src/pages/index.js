import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { appLoadingStart, appLoadingEnd } from "../actions/app";

class Index extends Component {
  componentDidMount() {
    this.props.appLoadingEnd();
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <h2>!MERN Stack Boilerplate!</h2>
        <p>The set up is finished successfuly!</p>

        {this.children}
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
)(Index);

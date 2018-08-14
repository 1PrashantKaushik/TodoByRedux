import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { removePersonInStore } from "./todoredux.js";
import { completedTaskINStore } from "./todoredux.js";
import Rename from "./Rename.js";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Showingdetail extends Component {
  state = {
    rename: false
  };

  renameShow = () => {
    if (this.state.rename) this.setState({ rename: false });
    else this.setState({ rename: true });
  };

  removePerson = () => {
    let ikey = this.props.ikey;
    removePersonInStore(this.props.ikey);
  };

  Complete = () => {
    completedTaskINStore(this.props.ikey);
  };

  render() {
    console.log(
      "the data is IN ADDINGDETAIL IS:",
      this.props.Data,
      this.props.ikey
    );
    let index = this.props.ikey;
    return (
      <p key={this.props.key}>
        <span onClick={this.Complete}>{this.props.Data}</span>
        &nbsp;&nbsp;&nbsp;
        <Button
          variant="outlined"
          color="secondary"
          className="btn-1"
          onClick={this.renameShow}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className="btn-1"
          onClick={this.removePerson}
        >
          X
        </Button>
        {this.state.rename ? (
          <Rename index={index} renameShow={this.renameShow} />
        ) : null}
      </p>
    );
  }
}

export default Showingdetail;

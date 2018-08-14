import React from "react";
import TextField from "@material-ui/core/TextField";
import { addName } from "./todoredux.js";
import { connect } from "react-redux";
import Persons from "./Person.js";
import store from "./todoredux.js";
import CompletedTask from "./CompletedTask.js";

class Addingdetail extends React.Component {
  state = {
    name: "",
    AddButton: true
  };

  nameEntered = e => {
    new Promise((resolve, reject) => {
      resolve(this.setState({ [e.target.name]: e.target.value }));
    }).then(res => {
      if (this.state.name.trim().length) {
        this.setState({ AddButton: false });
      } else {
        this.setState({ AddButton: true });
      }
    });
  };

  addNameHere = () => {
    if (this.state.name.length > 0) {
      const { name } = this.state;
      this.setState({
        name: ""
      });
      addName(name);
      this.setState({ addAble: true });
    }
  };

  entered = event => {
    if (event.keyCode === 13 && this.state.name) {
      this.setState({ addAble: true });
      addName(this.state.name);
    }
  };

  render() {
    console.log(this.props.names, "names");
    console.log(this.props.completedTaskInAddingdetail, "<<<<<<<===>>>>>>>>");
    return (
      <React.Fragment>
        <div className="App">
          <div className="App-header1">
            <h2>My Task List</h2>
          </div>
          <div class="Product-manager">
            <TextField
              id="with-placeholder"
              label="What you Want to Do?"
              placeholder="Enter List"
              margin="normal"
              type="text"
              name="name"
              placeholder="Add Your Task"
              size="54"
              onChange={this.nameEntered}
              onKeyDown={this.entered}
            />
            &nbsp;&nbsp;
            <button onClick={this.addNameHere} disabled={this.state.AddButton}>
              ADD
            </button>
          </div>
          <div>{this.props.names.length ? <Persons /> : null}</div>
          <CompletedTask
            CompletedTaskArray={this.props.completedTaskInAddingdetail}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log("The state is in AddingDetail is:==>>>>>>>", state);
  return {
    names: state.nameArray,
    completedTaskInAddingdetail: state.completedTask
  };
};

export default connect(mapStateToProps)(Addingdetail);

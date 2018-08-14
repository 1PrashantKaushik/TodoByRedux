import React from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import { ChangeTaskInStore } from "./todoredux.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#eaefef"
  }
};

class Rename extends React.Component {
  state = {
    name: ""
  };
  goAndChange = () => {
    this.props.renameShow();
    const { name } = this.state;
    ChangeTaskInStore(this.props.index, this.state.name);
    this.setState({ name: "" });
  };

  nameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  cancel = () => {
    this.props.renameShow();
  };
  render() {
    console.log("The Key Coming is", this.props.index);
    return (
      <Modal isOpen="true" style={customStyles}>
        <input type="text" size="54" name="name" onChange={this.nameChange} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="outlined" onClick={this.cancel}>
          Cancel
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="outlined"
          onClick={this.goAndChange}
          // disabled={this.state.namelength}
        >
          Change
        </Button>
      </Modal>
    );
  }
}

export default Rename;

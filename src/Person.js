import React from "react";
import { connect } from "react-redux";
import store from "./todoredux.js";
import Showingdetail from "./ShowingDetails.js";

class Persons extends React.Component {
  render() {
    console.log(this.state, "state ");
    let { persons } = this.props;
    console.log(this.props, "props in child");
    return (
      <div>
        <div className="Product-Info">
          {persons && persons.length
            ? persons.map((item, index) => {
                // return <div key={index}>{item}</div>;
                return (
                  <div key={index}>
                    <Showingdetail Data={item} ikey={index} />
                  </div>
                );
              })
            : []}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.nameArray
  };
};

export default connect(mapStateToProps)(Persons);

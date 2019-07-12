import React, { Component } from "react";

class House extends Component {
  render() {
    console.log(this.props.obj.id, this.props.deleteHouse);
    console.log(typeof this.props.obj.id);
    console.log('did mount',this.props.didMount)

    return (
      <div>
        {" "}
        House
        <article>{this.props.obj.address}</article>
        <article>{this.props.obj.city}</article>
        <article>{this.props.obj.property_name}</article>
        <article>{this.props.obj.state}</article>
        <article>{this.props.obj.zip}</article>
        <button
          onClick={() => {
            this.props.deleteHouse(this.props.obj.id);
            this.props.didMount();
          }}
        >
          X
        </button>
      </div>
    );
  }
}

// address: "123 street"
// city: "Draper"
// id: 1
// property_name: "My House"
// state: "Utah"
// zip: 84020
export default House;

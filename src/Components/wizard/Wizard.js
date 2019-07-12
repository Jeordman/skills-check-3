import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  }

  handleInputs = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  // handleAddButton() {
  //   console.log(this.state)
  //   const { name, address, city, state, zipcode } = this.state
  //   console.log(name, address, city, state, zipcode)
  //   axios.post("/api/add", { name, address, city, state, zipcode}).then(res => {
  //     this.props.didMount()
  //   })
  //   this.setState({
  //     name: "",
  //     address: "",
  //     city: "",
  //     state: "",
  //     zipcode: ""
  //   })

  // }
  

  render() {
    const { name, address, city, state, zipcode } = this.state;
    return (
      <div>
        <h1>WIZARD</h1>
        <Link to={{ pathname: "/" }}>
          <button>CANCEL</button>
        </Link>

        <input
          name="name"
          value={name}
          onChange={e => this.handleInputs(e)}
          placeholder="name"
        />
        <input
          name="address"
          value={address}
          onChange={e => this.handleInputs(e)}
          placeholder="Address"
        />
        <input
          name="city"
          value={city}
          onChange={e => this.handleInputs(e)}
          placeholder="City"
        />
        <input
          name="state"
          value={state}
          onChange={e => this.handleInputs(e)}
          placeholder="State"
        />
        <input
          name="zipcode"
          value={zipcode}
          onChange={e => this.handleInputs(e)}
          placeholder="Zipcode"
        />
        <button >ADD</button>
      </div>
    );
  }
}

export default Wizard;

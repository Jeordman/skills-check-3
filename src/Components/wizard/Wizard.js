import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      image_url: "",
      morgage: "",
      rent: ""
    };
  }

  goBack = () => {
    window.history.back()
  }

  handleInputs = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  handleAddButton = () => {
    console.log(this.state)
    const { property_name, address, city, state, zip, image_url, morgage, rent } = this.state
    console.log(property_name, address, city, state, zip, image_url, morgage, rent)
    axios.post("/api/add", { property_name, address, city, state, zip, image_url, morgage, rent}).then(res => {
    })
    this.setState({
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      image_url: "",
      morgage: "",
      rent: ""
    })

  }

  handleNext = () => {
    const { property_name, address, city, state, zip } = this.state
    this.setState({
      property_name: property_name,
      address: address,
      city: city,
      state: state,
      zip: zip
    })
  }
  

  render() {
    const { property_name, address, city, state, zip } = this.state;
    return (
      <div>
        <h1>WIZARD</h1>
        <Link to={{ pathname: "/" }}>
          <button>CANCEL</button>
        </Link>

        <input
          name="property_name"
    
          value={property_name}
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
          name="zip"
          value={zip}
          onChange={e => this.handleInputs(e)}
          placeholder="Zip"
        />
        <Link to={{ pathname: "/" }}>
        <button onClick={this.handleAddButton} >ADD</button>
        </Link>
        <Link to={{ pathname: '/step2'}}>
          <button handleNext={this.handleNext}>Next</button>
        </Link>

        
      </div>
    );
  }
}

export default Wizard;

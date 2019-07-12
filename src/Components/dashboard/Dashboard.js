import React, { Component } from "react";
import House from "../house/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/houses")
      .then(res => {
        this.setState({ houses: res.data });
        console.log("houses", this.state.houses);
      })
      .catch(err => console.log("Error in dashboard", err));
  }

  render() {
      console.log('before destructure', this.state.houses)
    //   let { houses } = this.state.houses
    //   console.log('houses in render',houses)
    return (
      <div>
        <Link to={{ pathname: "/wizard" }}>
          <button>ADD A NEW PROPERTY</button>
        </Link>
        
        <div className="mapped houses" key={0}>
          {this.state.houses.map((obj, index) => {
            return (
              <div key={index}>
                <House obj={obj}/>
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}

export default Dashboard;

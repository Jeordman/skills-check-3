import React, { Component } from 'react'

class House extends Component {
    

    render() {
        return (
            <div> House
            <article>{this.props.obj.address}</article>
            <article>{this.props.obj.city}</article>
            <article>{this.props.obj.property_name}</article>
            <article>{this.props.obj.state}</article>
            <article>{this.props.obj.zip}</article>
            <button>X</button>
            </div>
        )
    }
}


// address: "123 street"
// city: "Draper"
// id: 1
// property_name: "My House"
// state: "Utah"
// zip: 84020
export default House
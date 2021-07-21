import React, { Component } from 'react';

class Donation_name extends Component {
    render() {
        return (
            <div>
                 <h5 className="card-title">{this.props.name}</h5>
            </div>
        );
    }
}

export default Donation_name;
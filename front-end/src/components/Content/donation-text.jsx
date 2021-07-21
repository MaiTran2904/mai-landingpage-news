import React, { Component } from 'react';
class Donation_text extends Component {
    render() {
        return (
            <div>
                <p className="card-text">{this.props.content}</p>
            </div>
        );
    }
}
export default Donation_text;
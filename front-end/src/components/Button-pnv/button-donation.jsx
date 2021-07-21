import React, { Component } from 'react';

class Button_donation extends Component {
    render() {
        return (
            <div>
               <a className="btn-footer btn-primary">{this.props.name_butotn}</a>
            </div>
        );
    }
}

export default Button_donation;
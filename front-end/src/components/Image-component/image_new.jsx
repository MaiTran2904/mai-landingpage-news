import React, { Component } from 'react';

class Image_new extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} />
            </div>
        );
    }
}

export default Image_new;
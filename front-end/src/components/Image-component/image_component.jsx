import React, { Component } from 'react';

class Image_component extends Component {
    render() {
        return (
            <div>
                <center>
                    <img className="card-img-top" src={this.props.image} alt="Card image cap" id="imgFooter-donation" />
                </center>
            </div>
        );
    }
}

export default  Image_component;
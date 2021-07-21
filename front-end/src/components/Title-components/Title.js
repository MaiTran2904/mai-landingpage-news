import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div>
                <h2 className="title">{this.props.title}</h2>
            </div>
        );
    }
}

export default Title;
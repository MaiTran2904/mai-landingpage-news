import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                    <p>{this.props.content}</p>
                    <p> Sponsor our actions on a monthly basis. Because it gives us long term stability, 
                        this regular donation is one of the most convenient and powerful help you can provide to Passerelles numériques.
                    </p>
                    <p>You can also make a one-off donation and contribute to Passerelles numériques’ program. 
                        It’s easy and secure! You can use our secure donation form below.
                    </p>
                    <p>If you prefer to pay by check, just send it to the PN centre nearest to you.</p>
            </div>
        );
    }
}

export default Content;
import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="preloader"> 
            <div className="loader_34">   
              <div className="ytp-spinner">
                <div className="ytp-spinner-container">
                  <div className="ytp-spinner-rotator">
                    <div className="ytp-spinner-left">
                      <div className="ytp-spinner-circle" />
                    </div>
                    <div className="ytp-spinner-right">
                      <div className="ytp-spinner-circle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </React.Fragment>
        );
    }
}

export default Loading;
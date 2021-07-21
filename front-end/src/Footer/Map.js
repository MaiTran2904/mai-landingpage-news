import React, { Component } from 'react';

class Map extends Component {
    render() {
        return (
            <section id="map" className="map-area">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1096850731064!2d108.24130931414177!3d16.059796988886742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421836ed15dfc9%3A0x99c3cc369a33576c!2sPasserelles%20num%C3%A9riques%20Vietnam!5e0!3m2!1svi!2s!4v1625573229806!5m2!1svi!2s" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
            </div>
          </div>
          <div className="map-bg bg_cover d-none d-lg-block" style={{backgroundImage: 'url(assets/images/map/map-bg.jpg)'}} />
        </section>
        );
    }
}

export default Map;
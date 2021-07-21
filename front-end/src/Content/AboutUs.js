import React, { Component } from 'react';
import Loading from '../Header/Loading';

import axios from 'axios';
class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: [],
            isLoaded: false,
        }
    }
    componentDidMount = async() =>{
        await  axios({
                method: 'GET',
                url: 'http://pnvmeu22admin.herokuapp.com/api/introduction',
                data: null
            }).then(res => {
                if(res.data){
                    this.setState({
                        introduction: res.data,
                        isLoaded: true,
                    });
                }
            }).catch(err => { });
        }
    render() {
        const { introduction } = this.state;
        // if (!isLoaded) {
        //   return <Loading></Loading>;
        // } else {
        return (
            <section id="about" className="about-area pt-80 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image mt-50 clearfix">
                                <div className="single-image float-left">
                                    <img src="assets/images/about/about-1.jpg" alt="About" />
                                </div>
                                <div data-aos="fade-right" className="about-btn">
                                    <a className="main-btn" href="#"><span>10+</span> Years Experience</a>
                                </div>
                                <div className="single-image image-tow float-right">
                                    <img src="assets/images/about/about-2.jpg" alt="About" />
                                </div>
                                {/* single image */}
                            </div>
                            {/* about image */}
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content mt-45">
                                <h4 className="about-welcome">{introduction.title}</h4>
                                <h2 className="about-title mt-10">{introduction.content}</h2>
                                <p className="mt-25">{introduction.descriptions}
                                </p>
                                <a className="mt-25" href="#">Read more</a>
                            </div>
                            {/* about content */}
                        </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </section>
        );
    }
}

export default AboutUs;
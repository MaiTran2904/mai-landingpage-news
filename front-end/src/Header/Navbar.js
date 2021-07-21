import React, { Component } from 'react';
import Loading from './Loading';
import Header from './Header';
import AboutUs from '../Content/AboutUs';
import Value from '../Content/Value';
import History from '../Content/History';
import ManagementAndStaff from '../Content/ManagementAndStaff';
import ChiaSeCamNghi from '../Content/ChiaSeCamNghi';
import DangKiNhanThongTin from '../Content/DangKiNhanThongTin';
import Map from '../Footer/Map';
import Footer from '../Footer/Footer';
import News from '../Content/News';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
        {/*====== PRELOADER PART START ======*/}
        <Loading />
        {/*====== PRELOADER ENDS START ======*/}
        <div className="navigation-bar">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                      <img src="assets/images/logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="toggler-icon" />
                      <span className="toggler-icon" />
                      <span className="toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul id="nav" className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <a className="page-scroll" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#about">Introduce</a>
                        </li> 
                        <li className="nav-item">
                          <a className="page-scroll" href="#team">Manager</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#news">News</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#partner">Partner</a>
                        </li>
                        <li className="nav-item">
                          <Link to="enrollment"><a className="page-scroll" href="#enrollmenr">Enrollment</a></Link>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#contact">Contact</a>
                        </li>
                      </ul> {/* navbar nav */}
                    </div>
                    <div className="navbar-btn ml-20 d-none d-sm-block">
                      <Link to="donate"><a className="main-btn" href="#"><i className="lni-phone" />DONATE</a></Link>
                    </div>
                  </nav> {/* navbar */}
                </div>
              </div> {/* row */}
            </div> {/* container */}
          </div> {/* navigation bar */}
        
        <Header />
        {/*====== HEADER PART START ======*/}
        
        {/*====== HEADER PART ENDS ======*/}
        {/*====== ABOUT PART START ======*/}
        <AboutUs />
        {/*====== ABOUT PART ENDS ======*/}
        
        {/*====== SERVICES PART START ======*/}
        <Value />
        {/*====== SERVICES PART ENDS ======*/}
        {/*====== PROJECT PART START ======*/}
        <History />
        {/*====== PROJECT PART ENDS ======*/}
        {/*====== TEAM PART START ======*/}
        <ManagementAndStaff />
        {/*====== TEAM PART ENDS ======*/}
        <News />
        {/*====== TESTIMONIAL PART START ======*/}
        <ChiaSeCamNghi />
        {/*====== TESTIMONIAL PART ENDS ======*/}
        {/* <Partner /> */}
        {/*====== CONTACT PART START ======*/}
        <DangKiNhanThongTin></DangKiNhanThongTin>
        
        {/*====== CONTACT PART ENDS ======*/}
        {/*====== MAP PART START ======*/}
        <Map />
        
        {/* <Local_partner /> */}
        {/*====== MAP PART ENDS ======*/}
        {/*====== FOOTER PART START ======*/}
        <Footer />
        {/*====== FOOTER PART ENDS ======*/}
        {/*====== BACK TO TOP PART START ======*/}
      
        <a href="#" className="back-to-top"><i className="lni-chevron-up" /></a>
       
        {/*====== BACK TO TOP PART ENDS ======*/}
        {/*====== PART START ======*/}
        {/*
    <section class="">
        <div class="container">
            <div class="row">
                <div class="col-lg-"></div>
            </div>
        </div>
    </section>
*/}
        {/*====== PART ENDS ======*/}
        {/* row */}
      </div>
        );
    }
}

export default Navbar;
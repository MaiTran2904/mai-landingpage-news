import React, { Component } from 'react';
import $ from "jquery";
import './style.css';
import Donation_name from '../components/Name-Staff-Donation/donation-name';
import Donation_text from '../components/Content/donation-text';
// import Button_donation from '../components/Button-pnv/button-donation';
import Content from '../components/Description/description';
import Image_component from '../components/Image-component/image_component';
import Footer from '../Footer/Footer';
import Loading from '../Header/Loading';
import AboutUs from '../Content/AboutUs';
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import Map from '../Footer/Map';
import axios from 'axios';


class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            otherValue: "",
            total: "",
            orther: "",
            your_name:'',
            id_role:'',
            email:'',
            address:'',
            payment_methord:'',
        };
        this.postDonation=this.postDonation.bind(this);
    }

    onChange = (e) => {
        const newVal = parseInt(e.target.value);
        let other = parseInt(newVal - 10);
        let total = newVal + other;
        this.setState({ value: newVal, orther: other, total: total });
        console.log(e.target.value);
    }
    handleOnChange = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({ [key]: value });
    }
    postDonation =  (event)=>{
        event.preventDefault();
        alert('Kỳ lồn   ');
        let formData = new FormData();
        formData.append("your_name",this.state.your_name);
        formData.append("money", this.state.total);
        formData.append("id_role", this.state.id_type);
        formData.append("email", this.state.email);
        formData.append("payment_method", this.state.payment_method);
        formData.append("phone",this.state.phone);
            if(this.state.id_role=="individual"){
                axios({
                    method: 'POST',
                    url: 'http://localhost:8000/api/individual',
                    data: FormData
                }).then(res => {
                    console.log(this.product);
                }).catch(err => { });
            }else{
                this.axios.post('individual',formData).then(response=>{
                    console.log(response.data);
                }).catch(error=>{
                    console.log(error)
                })
            }        
    }
    
    render() {
        var types = [
            { "text": "Individuals", "value": "Individual" },
            { "text": "Organizations", "value": "Aorganization" },
        ];

        return (
            <div>
                {/* <Loading /> */}
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
                                                <a className="page-scroll" href="#home">Trang chú</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#about">Thông tin</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#service">Giá trị</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#project">Thành tựu</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#team">Hội đồng</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#contact">Liên hệ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#news">Tin tức</a>
                                            </li>
                                        </ul> {/* navbar nav */}
                                    </div>
                                    <div className="navbar-btn ml-20 d-none d-sm-block">
                                        <a className="main-btn" href="#"><i className="lni-phone" />DONATE</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <Header></Header>
                <AboutUs></AboutUs>
                <div className="donation wow fadeInUp" data-wow-delay="0.1s" id="review">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/olcVx8xnwWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-center">
                                            <span className="mr-4">Share about student</span>
                                            <a type="button" className="btn-floating btn-sm btn-fb"><i className="lni-facebook-filled" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-tw"><i className="lni-twitter-original" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-ins"><i className="lni-linkedin-original" /></a>
                                            <button type="button" className="btn btn-footer btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a><img className="img-fluid z-depth-1" src="images/huou.jpg" alt="video of student PNV22" data-toggle="modal" data-target="#modal1" /></a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="modal fade" id="modal6" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/NDHBdV3QUCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-center">
                                            <span className="mr-4">About PNV</span>
                                            <a type="button" className="btn-floating btn-sm btn-fb"><i className="lni-facebook-filled" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-tw"><i className="lni-twitter-original" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-ins"><i className="lni-linkedin-original" /></a>
                                            <button type="button" className="btn btn-footer btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a><img className="img-fluid z-depth-1" src="images/pnv.jpg" alt="video" data-toggle="modal" data-target="#modal6" /></a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="modal fade" id="modal4" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/tZPy-PjL_3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-center">
                                            <span className="mr-4">Alumni class 17-20</span>
                                            <a type="button" className="btn-floating btn-sm btn-fb"><i className="lni-facebook-filled" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-tw"><i className="lni-twitter-original" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-ins"><i className="lni-linkedin-original" /></a>
                                            <button type="button" className="btn btn-footer btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a><img className="img-fluid z-depth-1" src="images/alumMs.Quyen.jpg" alt="video" data-toggle="modal" data-target="#modal4" /></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Content content="You can make a difference and improve the lives of underprivileged youths by helping Passerelles numériques in many different ways"></Content>
                    <div className="donates-form container" >
                        <img src="https://th.bing.com/th/id/OIP.VGclM04uzA6nLx6KcrKVxwHaFP?pid=ImgDet&rs=1" width="50px" height="33px" style={{ float: 'right' }} />
                        <img src="https://th.bing.com/th/id/R3faa0b3d7207fcb4f8bfc91dfa55d0be?rik=%2bkg6YoVdIzrMQA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2f2%2f21%2fFlag_of_Vietnam.svg%2f2000px-Flag_of_Vietnam.svg.png&ehk=ch8dvYpGh7gop%2bsuPbVjXDbHZdGC5ry%2f2p%2bmv9qn1iI%3d&risl=&pid=ImgRaw" width="50px" style={{ float: 'right' }} />
                        <div className="form-group">
                            <img src="images/logo.png" width="80px" />
                            <span><h4>Donate now to Passerelles numériques Vietnam</h4></span>
                        </div>
                        <form id="form-outsize" method="post">
                            <div className="row">
                                <div className="col-sm-6" id="my-donation" >
                                    <div id="header-donation" className="col">
                                        <h4>My Donation</h4>
                                    </div>
                                    <div id="month-amount" className="col">
                                        <br></br>
                                        <div className="form-group donate-buttons" id="donate-buttons" >
                                            <div className="amount" style={{ display: 'float' }}>
                                                <button name="value" value={30} onClick={this.onChange.bind(this)} className="btn-blue">€30</button>
                                                <button name="value" value={50} onClick={this.onChange.bind(this)} className="btn-blue">€50</button>
                                                <button name="value" value={100} onClick={this.onChange.bind(this)} className="btn-blue">€100</button>
                                                <button name="value" className="btn-blue-other" id="other">Other
                                                </button>
                                                <strong id="other-input">
                                                    <input type="number" min={0} max={100000} name="value" onChange={this.onChange.bind(this)} value={this.state.value} data-impact="That’s great. Thank you!" />
                                                </strong>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="col" name="your_name" id="name"  placeholder="Enter your name and your organization" onChange={this.handleOnChange} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="col" name="email" id="email" placeholder="Email *" onChange={this.handleOnChange} required />
                                        </div>
                                        <div className="form-group" >
                                            <input type="text" name="phone" lassName="col" id="phone" placeholder="Enter your phone*" onChange={this.handleOnChange} required />
                                        </div>
                                        <div className="form-group" >
                                        <input type="text" name="address" lassName="col" id="address" placeholder="Enter your address*" onChange={this.handleOnChange} required />
                                            <select className="col" onChange={this.handleOnChange} required>
                                                <option>Types</option>
                                                {
                                                    types.map(a => (
                                                        <option>{a.text.toString()}</option>
                                                    ))
                                                };
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6" id="sumary-donation">
                                    <div id="header-sumary" style={{ textAlign: 'center' }}>
                                        <h4>My Sumary</h4>
                                    </div>
                                    <div className="col" id="content-sumary">
                                        <br></br>
                                    <table className="styled-table">
                                            <thead>
                                                <tr>
                                                    <th>Selection</th>
                                                    <th>Donation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="active-row">
                                                    <td>Total</td>
                                                    <td>{this.state.total}€</td>
                                                </tr>
                                            </tbody>
                                        </table>                                                                      
                                        <div className="form-group">
                                            <input type="checkbox" name="agree" className="col-sm-1" />
                                            <p>I understand and I confirm that I want to provide financial support to HelloAsso by finalizing my paymen</p>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-radio-flex col" id="payment_method">
                                                <input type="radio" name="payment_type" id="payment_visa" defaultValue="payment_visa" defaultChecked="checked" />
                                                <label htmlFor="payment_visa"><img src="resource/images/icon-visa.png" alt="" /></label>
                                                <input type="radio" name="payment_type" id="payment_master" defaultValue="payment_master" />
                                                <label htmlFor="payment_master"><img src="resource/images/icon-master.png" alt="" /></label>
                                                <input type="radio" name="payment_type" id="payment_paypal" defaultValue="payment_paypal" />
                                                <label htmlFor="payment_paypal"><img src="resource/images/icon-paypal.png" alt="" /></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group payment">         
                                        <button type="button" onClick={this.postDonation} className="main-btn " id="paypal-button"> <p><small>100% secured donate </small></p>  </button>
                                    </div>
                                    <div className="reason">
                                    </div>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
               
                <footer className="wow fadeInUp container" data-wow-delay="0.1s" id="review">
                    <div className="about-content mt-45">
                        <h4 className="about-welcome">Sharing of our partner</h4>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <Image_component image="images/quan.jpg"></Image_component>
                                <div className="card-body">
                                    <Donation_text content="Before joining PNV,
                                        all of my relatives disapproved my wish to come here to study as they thought IT was not suitable for a girl.
                                        But my mother advised me to go and study at PNV.
                                        Before I left, she asked me to try to study hard which I did!
                                        My mother is my everyday inspiration and motivation."></Donation_text>
                                    <Donation_name name="Hoang Trung Quan" ></Donation_name>
                                    {/* <Link to="/"><Button_donation name_butotn="read more"></Button_donation></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <Image_component image="images/duong.jpg"></Image_component>
                                <div className="card-body">
                                    <Donation_text content="There was a huge change in my life after PN.
                                        I realized that I am capable of doing something bigger!
                                        That my dreams before weren’t just dreams…
                                        My family is my first source of motivation.
                                        I wanted to study, to get a good job and help them.
                                        And now, I am proud to see them in a situation way better than before.
                                        Proud to help my brother finish his education.
                                        Proud to help my family slowly build a new and stronger house." />
                                    <Donation_name name="A Viet Duong" ></Donation_name>
                                    {/* <Link to="/"><Button_donation name_butotn="read more"></Button_donation></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <Image_component image="images/phat.jpg"></Image_component>
                                <div className="card-body">
                                    <Donation_text content="PN Cambodia has given me great training & education!
                                        I am not sure I could find that anywhere else.
                                        I learned so much at PNC programme and having this on my resume has put me light years ahead of the competition.
                                        I would not be where I am today if it was not thanks to the training programme in Information Technology I was part of.
                                        Thanks to all the teachers, staffs and partners who make the programme a true success: thank PNV!"/>
                                    <Donation_name name="Tran Van Phat" />
                                    {/* <Link to="/"><Button_donation name_butotn="read more"></Button_donation></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Map />
                <Footer></Footer>
                <a href="#" className="back-to-top"><i className="lni-chevron-up" /></a>
            </div>
        );
    }
}
$(document).ready(function () {
    $("#donate-buttons").on("click", ".btn-blue", function (e) {
        e.preventDefault();
        $(".active").removeClass("active");
        $("#other-input").hide().siblings("#other").show();
        $(this).filter(".btn-blue").addClass("active");
        var value = $(this).data("impact");
        $(this)
            .closest("div")
        $("#other-input").find("input").val("");
    });
    $("#other").on("click", function (e) {
        e.preventDefault();
        var buttons = $(this).parent("#donate-buttons");
        buttons.find(".active").removeClass("active");
        var other = $(this).hide().siblings("#other-input");
        other.show();
        other.find("input").focus();
    });
});



export default Donate;
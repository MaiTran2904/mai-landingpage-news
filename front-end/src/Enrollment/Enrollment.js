import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Enrollment.css';
import Image_new from '../components/Image-component/image_new';
import Title from '../components/Title-components/Title';
import Header from '../Header/Header';
import AboutUs from '../Content/AboutUs';
import Loading from '../Header/Loading';
import Footer from '../Footer/Footer';
import Map from '../Footer/Map';
import { Link } from 'react-router-dom';
export default class Enroll extends Component {
	static propTypes = {
		manager: [],
		isLoaded: false,
	};

	render() {
		return (
            <div>
                <Loading />
                <div className="navigation-bar" id="enrollmenr">
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
                <Header></Header>
                <AboutUs></AboutUs>
			<div className="container" id="enrollmenr">
				<section  className="enroll-area pt-125 pb-130 gray-bg">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6">
								<div className="section-title text-center pb-20">
									<Title title="Enrollment" />
								</div>{' '}
								{/* section title */}
							</div>
						</div>
						<div style={{ marginTop: '-9vh' }}>
							<div className="portfolio" id="portfolio">
								<div className="container">
									<div className="row portfolio-container">
										<div
											className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
											data-wow-delay="0.0s"
										>
											<div className="portfolio-wrap">
												<h2>Đối tượng tuyển sinh</h2>
												<div className="contents">
													<div className="form-group">
														<i class="fa fa-book" aria-hidden="true" />
														<p>Đang học lớp 12 hoặc đã tốt nghiệp trong vòng 5 năm</p>
													</div>
													<div className="form-group">
														<i class="fa fa-home" />
														<p>Có hoàn cảnh gia đình khó khăn</p>
													</div>
													<div className="form-group">
														<i class="fa fa-desktop" />
														<p>Yêu thích lĩnh vực CNTT</p>
													</div>
												</div>
											</div>
										</div>

										<div
											className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
											data-wow-delay="0.2s"
										>
											<div className="portfolio-wrap">
												<h2>Cơ hội nghề nghiệp</h2>
												<div className="contents ml-4">
													<div className="form-group">
														<span
															class="fa fa-star star_icon"
															style={{ fontSize: '24px' }}
														/>
														<p>Lập trình viên di động</p>
													</div>

													<div className="form-group">
														<span
															class="fa fa-star star_icon"
															style={{ fontSize: '24px' }}
														/>
														<p>Lập trình viên phần mềm</p>
													</div>
													<div className="form-group">
														<span
															class="fa fa-star star_icon"
															style={{ fontSize: '24px' }}
														/>
														<p> Lập trình và thiết kế web</p>
													</div>
													<div className="form-group">
														<span
															class="fa fa-star star_icon"
															style={{ fontSize: '24px' }}
														/>
														<p>Kiểm thử vên</p>
													</div>
												</div>
											</div>
										</div>

										<div
											className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
											data-wow-delay="0.4s"
										>
											<div className="portfolio-wrap">
												<h2>Qui trình tuyển sinh</h2>
												<div className="contents ">
													<div className="form-group">
														<i class="fa fa-check" aria-hidden="true" />
														<p> Giới thiệu học bổng</p>
													</div>
													<div className="form-group">
														<i class="fa fa-check" aria-hidden="true" />
														<p>Thi đầu vào</p>
													</div>
													<div className="form-group">
														<i class="fa fa-check" aria-hidden="true" />
														<p> Khảo sát gia cảnh</p>
													</div>
													<div className="form-group">
														<i class="fa fa-check" aria-hidden="true" />
														<p> Thông báo kết quả</p>
													</div>
													<div className="form-group">
														<i class="fa fa-check" aria-hidden="true" />
														<p> Nhập học</p>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
											data-wow-delay="0.6s"
										>
											<div className="portfolio-wrap">
												<div className="portfolio-img">
													<Image_new image="assets/images/imgPNV/khaosat.PNG" />
												</div>
											</div>
										</div>
										<div
											className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
											data-wow-delay="0.8s"
										>
											<div className="portfolio-wrap">
												<div className="portfolio-img">
													<Image_new image="assets/images/imgPNV/enroll.PNG" />
												</div>
											</div>
										</div>
										<div
											className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
											data-wow-delay="1s"
										>
											<div className="portfolio-wrap">
												<div className="portfolio-img">
													<Image_new image="assets/images/imgPNV/tuyensinh.PNG" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="center">
							<button className="main-btn" onClick="" data-toggle="modal" data-target="#myModal">
								Click to Enroll
							</button>
						</div>

						<div class="modal fade" id="myModal" role="dialog">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">
											&times;
										</button>
										{/* <h4 class="modal-title">Modal Header</h4> */}
									</div>

									<div class="modal-body">
										<form>
											<div class="form-group">
												<label for="">Name</label>
												<input
													type="text"
													name="name"
													id=""
													class="form-control"
													placeholder="Your Name"
													aria-describedby="helpId"
												/>
											</div>
											<div class="form-group">
												<label for="">Address</label>
												<input
													type="text"
													name="address"
													id=""
													class="form-control"
													placeholder="Your Name"
													aria-describedby="helpId"
												/>
											</div>
											<div class="form-group">
												<label for="">Age</label>
												<input
													type="text"
													name="age"
													id=""
													class="form-control"
													placeholder="Your Name"
													aria-describedby="helpId"
												/>
											</div>

											<div className="form-group">
												<label>Email</label>
												<input
													type="email"
													class="form-control"
													aria-describedby="emailHelp"
													placeholder="Your email address"
												/>
											</div>
										</form>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
            <Map />                                                        
                <Footer></Footer>
            </div>
		);
	}
}
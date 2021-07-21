import React, { Fragment } from 'react';
import './stylePartner.css';
import Local_partner from './local_partner';
import Header from '../Header/Header';
function Partner() {
    return (
        <Fragment>
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
                        </nav> {/* navbar */}
                        </div>
                    </div> {/* row */}
                    </div> {/* container */}
                </div> {/* navigation bar */}
                {/* <Header></Header> */}
                <Header></Header>
            <div className="team" id="team" >
                <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <h2>Đối Tác Của Chúng Tôi</h2>
                </div>
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#DNVTC"><img src="resource/images/image_partner/DNVTC_college.png" style={{ height: '300px', width: '270px' }} alt="Image" /></p>
                            </div>
                        </div>

                        <div className="team-text collapse" id="DNVTC">
                            <h2>DANAVTC</h2>
                            <h4>Trường Cao Đẳng Nghề Đà Nẵng</h4>
                            <h6>
                                <p style={{ fontSize: '17px' }}>Sinh viên của chúng tôi được đào tạo tại Trường Cao Đẳng Nghề Đà Nẵng từ tháng 9 năm 2017</p>
                                <p style={{ padding: '2px 9px' }}><i className="fas fa-map-marker-alt" /> {'\u00A0'} &nbsp;Tô Hiến Thành - Đà Nẵng</p>
                            </h6>
                            <div className="team-social">
                                <a className="btn" href='http://danavtc.edu.vn/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.facebook.com/DANAVTC/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='http://danavtc.edu.vn/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='http://danavtc.edu.vn/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#motorola"><img src="resource/images/image_partner/Motorola_logo.jpg" style={{ height: '300px', width: '250px' }} alt="Image" /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="motorola">
                            <h2>Motorola Solution</h2>
                            <h4>Tổ Chức</h4>
                            <h6><p style={{ fontSize: '17px' }}>
                                Kể từ năm 2017, quỹ Motorola Solutions hỗ trợ việc triển khai Dự án giáo dục và kỹ thuật số "trung tâm" sáng tạo của chúng tôi,
                                toàn diện, lấy sinh viên làm trung tâm cho thanh thiếu niên chưa được phục vụ tại Việt Nam và Philippines.
                            </p> </h6>
                            <div className="team-social">
                                <a className="btn" href='https://www.motorolasolutions.com/en_us/about/company-overview/corporate-responsibility/motorola-solutions-foundation.html'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.motorolasolutions.com/en_us/about/company-overview/corporate-responsibility/motorola-solutions-foundation.html'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://www.motorolasolutions.com/en_us/about/company-overview/corporate-responsibility/motorola-solutions-foundation.html'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://www.motorolasolutions.com/en_us/about/company-overview/corporate-responsibility/motorola-solutions-foundation.html'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3  wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse" data-target="#KMS_company">
                                    <img src="resource/images/image_partner/KMS_company.png" alt="Image" style={{ height: '250px', width: '250px' }} /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="KMS_company">
                            <h2>KMS Technology</h2>
                            <h4>Công ty</h4>
                            <h6>
                                <p  style={{ padding: '2px 9px' }} href><i className="fas fa-map-marker-alt" /> {'\u00A0'} &nbsp;Hồ Chí Minh, Đà Nẵng</p>
                                <p  style={{ padding: '2px 9px' }} href><i className="fas fa-cog"></i> {'\u00A0'} &nbsp; Dịch Vụ</p>
                                <p  style={{ padding: '2px 9px' }} href><i className="far fa-calendar-alt"></i> {'\u00A0'} &nbsp; Thứ 2 - Thứ 6</p>
                                <p  style={{ padding: '2px 9px' }} href><i className="fas fa-user-friends"></i>{'\u00A0'} &nbsp; 1000+</p>
                            </h6>
                            <div className="team-social">
                                <a className="btn" href='https://www.kms-technology.com/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.facebook.com/kmstechnologyvietnam/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://www.kms-technology.com/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://www.kms-technology.com/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#Enouvo"><img src="resource/images/image_partner/Enouvo_company.png" style={{ height: '300px', width: '270px' }} alt="Image" /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="Enouvo">
                            <h2>Enouvo</h2>
                            <h4>Công ty</h4>
                            <h6>
                                <p style={{ padding: '2px 12px' }}><i className="fas fa-map-marker-alt" /> {'\u00A0'} &nbsp;Đà Nẵng</p>   
                                <p style={{ padding: '2px 12px' }}><i className="fas fa-cog"></i> {'\u00A0'} &nbsp; Dịch Vụ</p>
                                <p style={{ padding: '2px 12px' }}><i className="far fa-calendar-alt"></i> {'\u00A0'} &nbsp; Thứ 2 - Thứ 6</p>
                                <p style={{ padding: '2px 12px' }}><i className="fas fa-user-friends"></i>{'\u00A0'} &nbsp;1-50</p>
                            </h6>
                            <div className="team-social">
                                <a className="btn" href='https://enouvo.com/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.facebook.com/enouvo/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://enouvo.com/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://enouvo.com/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* row 2 */}
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#thales"><img src="resource/images/image_partner/Thales_logo.png" style={{ height: '300px', width: '270px' }} alt="Image" /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="thales">
                            <h2>THALES</h2>
                            <h4>Tổ Chức</h4>
                            <h6><p style={{ fontSize: '17px' }}>
                                Kể từ tháng 3 năm 2016, Thales Đông Nam Á hỗ trợ các chương trình của chúng tôi tại Campuchia,
                                Việt Nam và Philippines với hỗ trợ tài chính và tình nguyện kỹ năng.</p>
                            </h6>
                            <div className="team-social">
                                <a className="btn" href='https://www.thalesgroup.com/en/countries/asia-pacific/singapore'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.thalesgroup.com/en/countries/asia-pacific/singapore'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://www.thalesgroup.com/en/countries/asia-pacific/singapore'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://www.thalesgroup.com/en/countries/asia-pacific/singapore'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#Fondation"><img src="resource/images/image_partner/Fondation_Amanjaya.png" style={{ height: '300px', width: '270px' }} alt="Image" /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="Fondation">
                            <h2>FONDTION AMANJAYA</h2>
                            <h4>Tổ chức</h4>
                            <h6>
                                <p style={{ fontSize: '17px' }}>Được thành lập vào năm 2008,
                                    Quỹ Amanjaya hỗ trợ các tổ chức hoạt động nhằm thúc đẩy khả năng tiếp cận giáo dục cho trẻ em và thanh thiếu niên có hoàn cảnh khó khăn.
                                    Từ năm 2008, Quỹ Amanjaya hỗ trợ Passerelles numériques..</p>
                            </h6>
                            <div className="team-social">
                                <a className="btn" href='https://www.amanjaya.org/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.amanjaya.org/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://www.amanjaya.org/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://www.amanjaya.org/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#pycogroup"><img src="resource/images/image_partner/PYCOGROUP_company.png" alt="Image" style={{ height: '300px', width: '270px' }} /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="pycogroup">
                            <h2>PYCOGROUP</h2>
                            <h4>Công ty</h4>
                            <h6><p style={{ fontSize: '17px' }}>
                                Năm 2016, PYCO Group, một cơ quan tư vấn kỹ thuật số và phát triển phần mềm,
                                đã bắt đầu quan hệ đối tác lâu dài với Passerelles numériques Việt Nam
                                như một phần trong cam kết hỗ trợ các tổ chức từ thiện tại Việt Nam.
                            </p></h6>
                            <div className="team-social">
                                <a className="btn" href='https://www.linkedin.com/company/pycogroup/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.facebook.com/pycogroupau/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://www.linkedin.com/company/pycogroup/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://www.linkedin.com/company/pycogroup/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#fondation_luciole"><img src="resource/images/image_partner/Fondation_luciole.png" style={{ height: '350px', width: '320px' }}style={{ height: '300px', width: '270px' }} alt="Image" /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="fondation_luciole">
                            <h2>Fondation Luciole</h2>
                            <h4>Tổ Chức</h4>
                            <h6><p style={{fontSize: '17px'}}>
                                Quỹ Luciole hỗ trợ đào tạo học viên tại trung tâm của chúng tôi tại Việt Nam (Đà Nẵng) trong 3 năm
                            </p></h6>
                            <div className="team-social">
                                <a className="btn" href='https://www.institutdefrance.fr/lesfondations/prix-fondations-fondation-luciole/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.institutdefrance.fr/lesfondations/prix-fondations-fondation-luciole/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://www.institutdefrance.fr/lesfondations/prix-fondations-fondation-luciole/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://www.institutdefrance.fr/lesfondations/prix-fondations-fondation-luciole/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* row 3 */}
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#lekhanh"><img src="resource/images/image_partner/LeKhanh_company.png" style={{ height: '300px', width: '270px' }} alt="Image" /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="lekhanh">
                            <h2>LeKhanh Tech</h2>
                            <h4>Công ty</h4>
                            <h6>
                                <p style={{ padding: '2px 12px' }} href><i className="fas fa-map-marker-alt" /> {'\u00A0'} &nbsp;Tran Cao Van, Đà Nẵng</p>
                                <p style={{ padding: '2px 12px' }} href><i className="fas fa-cog"></i> {'\u00A0'} &nbsp;Phần mềm dịch vụ kinh doanh</p>
                            </h6>
                            <div className="team-social">
                             <a className="btn" href='https://lekhanhtech.com/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.facebook.com/lekhanhtech/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://lekhanhtech.com/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://lekhanhtech.com/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse" data-target="#fondation_logo">
                                    <img src="resource/images/image_partner/Fondation_logo.jpg" alt="Image" style={{ height: '300px', width: '250px' }} /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="fondation_logo">
                            <h2>Fondation Blanc Mesnil</h2>
                            <h4>Tổ Chức</h4>
                            <h6><p style={{ fontSize: '17px' }}>
                                Quỹ Blanc Mesnil hỗ trợ đào tạo học viên tại trung tâm của chúng tôi tại Việt Nam (Đà Nẵng) trong 3 năm
                            </p> </h6>
                            <div className="team-social">
                                <a className="btn" href='https://unespritdefamille.org/blancmesnil/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://unespritdefamille.org/blancmesnil/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://unespritdefamille.org/blancmesnil/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://unespritdefamille.org/blancmesnil/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#jp_morgan"><img src="resource/images/image_partner/JP-Morgan-logo.png" alt="Image" style={{ height: '300px', width: '260px' }} /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="jp_morgan">
                            <h2>JP Morgan Chase</h2>
                            <h4>Tổ Chức</h4>
                            <h6><p style={{ fontSize: '17px' }}>
                                Quỹ JP Morgan Chase là một nhà tài trợ quan trọng cho PN tại Việt Nam và Philippines,
                                để hỗ trợ các chương trình đào tạo của chúng tôi, chuẩn bị cho sinh viên vào cuộc sống chuyên nghiệp thành công,
                                thiết lập quan hệ đối tác địa phương với các tổ chức phi chính phủ, trường đại học,
                                công ty, để làm việc cùng nhau và kết hợp nỗ lực của họ vì thiếu niên.
                            </p></h6>
                            <div className="team-social">
                                <a className="btn" href='https://www.jpmorganchase.com/impact'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.jpmorganchase.com/impact'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://www.jpmorganchase.com/impact'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://www.jpmorganchase.com/impact'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#laidon"><img src="resource/images/image_partner/Laidon_logo.png" alt="Image" style={{ height: '300px', width: '270px' }} /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="laidon">
                            <h2>Laidon Consulting Vietnam</h2>
                            <h4>Công ty</h4>
                            <h6><p style={{ fontSize: '17px' }}>
                                Kể từ năm 2021, Laidon hỗ trợ chúng tôi thực tập và cố vấn cho sinh viên của chúng tôi trong Đồ án Tốt nghiệp.
                            </p> </h6>
                            <div className="team-social">
                                <a className="btn" href='https://laidon.com/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.facebook.com/laidongroupllc/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://laidon.com/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://laidon.com/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* row 4 */}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3  wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse" data-target="#linkbynet">
                                    <img src="resource/images/image_partner/Linkbynet_logo.png" alt="Image" style={{ height: '300px', width: '270px' }}/></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="linkbynet">
                            <h2>LINKBYNET</h2>
                            <h4>Tổ Chức</h4>
                            <h6><p style={{ fontSize: '17px' }}>
                                LinkByNet đã tài trợ PNV vào năm 2016, 2018 và 2020.
                            </p> </h6>
                            <div className="team-social">
                                <a className="btn" href='https://www.linkbynet.com/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.linkbynet.com/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://www.linkbynet.com/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://www.linkbynet.com/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item">
                            <div className="team-img">
                                <p aria-expanded="false" data-toggle="collapse"
                                    data-target="#microsoft"><img src="resource/images/image_partner/Microsoft_company.png" alt="Image" style={{ height: '300px', width: '270px' }} /></p>
                            </div>
                        </div>
                        <div className="team-text collapse" id="microsoft">
                            <h2>Microsoft</h2>
                            <h4>Tập Đoàn</h4>
                            <h6><p style={{ fontSize: '17px' }}>
                                Kể từ năm 2017, Microsoft đang tích cực hỗ trợ các hoạt động của PN bằng cách tiếp cận toàn diện bao gồm tài trợ,
                                tặng giấy phép phần mềm, tạo hệ thống quản lý sinh viên tích hợp, hoạt động tình nguyện và hơn thế nữa!
                            </p></h6>
                            <div className="team-social">
                                <a className="btn" href='https://www.microsoft.com/en/'><i className="fab fa-twitter" /></a>
                                <a className="btn" href='https://www.microsoft.com/en/'><i className="fab fa-facebook-f" /></a>
                                <a className="btn" href='https://www.microsoft.com/en/'><i className="fab fa-linkedin-in" /></a>
                                <a className="btn" href='https://www.microsoft.com/en/'><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </Fragment >
    );
}

export default Partner;
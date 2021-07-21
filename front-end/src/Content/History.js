import React, { Component } from 'react';
import Title from '../components/Title-components/Title';

class History extends Component {
    render() {
        return (
            <React.Fragment>
            <section id="project" className="project-area pt-125 pb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-50">
                </div> 
              </div>
            </div> {/* row */}
          </div>
          <div className="container-fluid">
            <div className="row project-active">
              <div className="col-lg-4">
                <div className="single-project">
                  <div className="project-image">
                    <img src="assets/images/project/p-1.jpg" alt="Project" />
                  </div>
                  <div className="project-content">
                    <a className="project-title">PN Việt Nam kỉ niệm 10 năm hoạt động.</a>
                    <a className="project-title">7/10/2020</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-project">
                  <div className="project-image">
                    <img src="assets/images/project/p-2.png" alt="Project" />
                  </div>
                  <div className="project-content">
                    <a className="project-title" href="#">Hợp tác cùng đối tác mới là trường Cao đẳng Nghề Đà Nẵng</a>
                    <a className="project-title">2017</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-project">
                  <div className="project-image">
                    <img src="assets/images/project/p-3.jpg" alt="Project" />
                  </div>
                  <div className="project-content">
                    <a className="project-title" href="#">Kết hợp đào tạo cùng trường Cao đẳng Kĩ thuật Đà Nẵng</a>
                    <a className="project-title">2016</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-project">
                  <div className="project-image">
                    <img src="assets/images/project/p-4.png" alt="Project" />
                  </div>
                  <div className="project-content">
                    <a className="project-title" href="#">Kỉ niệm 5 năm hoạt động.</a>
                    <a className="project-title">2015</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-project">
                  <div className="project-image">
                    <img src="assets/images/project/p-5.png" alt="Project" />
                  </div>
                  <div className="project-content">
                    <a className="project-title" href="#">Trở thành một tổ chức hoạt động độc lập. </a><br />
                    <a className="project-title">2014</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-project">
                  <div className="project-image">
                    <img src="assets/images/project/p-2.png" alt="Project" />
                  </div>
                  <div className="project-content">
                    <a className="project-title" href="#">Home Interior Design</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-project">
                  <div className="project-image">
                    <img src="assets/images/project/p-4.png" alt="Project" />
                  </div>
                  <div className="project-content">
                    <a className="project-title" href="#">Home Interior Design</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
        );
    }
}

export default History;
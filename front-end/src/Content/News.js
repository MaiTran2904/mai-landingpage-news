import React, { Component } from "react";
import Donation_text from "../components/Content/donation-text";
// import Image_new from '../components/Image-component/image_new';
import Title from "../components/Title-components/Title";
import callAPI from "../service/api-donation";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoaded: false,
    };
  }
  getData = async () => {
   await  callAPI("news", "GET", null)
      .then((res) => {
        this.setState({
          news: res.data,
          isLoaded: true,
        });
        console.log("hihih");
        console.log(this.state.news);
      })
      .catch((err) => {});
  };
  componentDidMount () {
    this.getData();
  }
  render() {
    const { news } = this.state;
    return (
      <section id="service" className="services-area pt-125 pb-130 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-20">
                <Title title="News Information"></Title>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {news.map((newss) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div
                    className="single-news text-center mt-30 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    <div className="services-img">
                      <i>
                        <img src={newss.image} />
                      </i>
                    </div>
                    <div className="services-content mt-15">
                      <h4 className="services-title">{newss.title}</h4>
                      <p> {newss.content}</p>
                    </div>
                    <button href="" className="main-btn">
                      Đọc tiếp
                    </button>
                  </div>
                </div>
              );
            })}
            <div class="center">
              <button className="main-btn">
                Đọc thêm nhiều bài báo của PNV
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default News;

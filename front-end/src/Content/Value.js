import React, { Component } from 'react';
import Title from '../components/Title-components/Title';
// import callAPI from '../service/api-donation';
class Value extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: [],
        isLoaded: false,
    }
}
getData = () => {
    // callAPI('values','GET',null).then(res=>{
    //     this.setState({ 
    //         value: res.data,
    //         isLoaded: true,
    //     });
    //     console.log(this.state.value);
    // }).catch(err => { });
}
componentDidMount() {
    this.getData();
}
    render() {
      // const{value}=this.state;
        return (
            <section id="service" className="services-area pt-125 pb-130 gray-bg">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title text-center pb-20">
                      <Title title="THE CORE VALUES"></Title>     
                    </div> {/* section title */}
                  </div>
                </div> {/* row */}
                <div className="row justify-content-center">
                  {/* {
                    value.map((values)=>{
                      return( */}
                        <div className="col-lg-4 col-md-6 col-sm-8">
                          <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                            <div className="services-icon"> 
                              {/* <i> <img src={values.image} alt="" height="100" width="100" style={{borderRadius:'100px'}} /></i> */}
                            </div>
                            <div className="services-content mt-15">
                              {/* <h4 className="services-title">{values.name}</h4> */}
                            </div>
                          </div> 
                        </div>
                      {/* )})                
                  } */}
                {/*                   
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                      <div className="services-icon">
                        <i className="lni-home" />
                      </div>
                      <div className="services-content mt-15">
                        <h4 className="services-title">TIN TƯỞNG</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                      <div className="services-icon">
                        <i className="lni-briefcase" />
                      </div>
                      <div className="services-content mt-15">
                        <h4 className="services-title">TRÁCH NHIỆM</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                      <div className="services-icon">
                        <i className="lni-handshake" />
                      </div>
                      <div className="services-content mt-15">
                        <h4 className="services-title">ĐOÀN KẾT</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                      <div className="services-icon">
                        <i className="lni-grow" />
                      </div>
                      <div className="services-content mt-15">
                        <h4 className="services-title">TÔN TRỌNG</h4>
                      </div>
                    </div>
                  </div>
                 */}
                </div> 
              </div> 
            </section>
        );
    }
}

export default Value;
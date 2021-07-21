import React, { Component } from 'react';
import callAPI from '../service/api-donation';
import axios from 'axios';
class DangKiNhanThongTin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: "",
      messages: '',
      email: "",
      position: "",
    };
    this.postContact = this.postContact.bind(this);
  }
  onChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({ [key]: value });
  }

  clear = () => {
    this.setState({ name: "" })
    this.setState({ phone: "" })
    this.setState({ messages: "" })
    this.setState({ email: "" })
    this.setState({ position: "" })
  }
  postContact = (event) => {
    event.preventDefault();
    const FormData = {
      name: this.state.name,
      email: this.state.email,
      messages:this.state.messages,
      phone:this.state.phone,
      position: this.state.position
    }
    console.log(FormData); 
    if(FormData){
      axios.post('http://localhost:8000/api/contacts/', FormData).then((res) => {
        this.clear();
        alert('oke');
    }).catch((err) => console.log(err));
    }else{
      alert('Rỗng');
    }
  }

  render() {
    return (
      <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-20">
                <h2 className="title">ĐĂNG KÍ ĐỂ TRỞ THÀNH TÌNH NGUYỆN VIÊN CỦA CHÚNG TÔI</h2>
              </div> 
            </div>
          </div> 
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form">
                <form onSubmit={(event) => this.postContact(event)} method="post" >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="single-form form-group">
                        <input type="email" value={this.state.email} name="email" placeholder="Địa chỉ E-mail" onChange={this.onChange} data-error="Valid email is required."  />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input type="text" value={this.state.name} name="name" placeholder="Họ và tên" onChange={this.onChange} data-error="Name is required."  />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input type="text" value={this.state.phone} name="phone" placeholder="Số điện thoại" onChange={this.onChange} data-error="Phone is required."  />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form form-group">
                        <input type="text" value={this.state.position} name="position"  onChange={this.onChange} placeholder="Vị ví mong muốn tham gia" data-error="Phone is required."  />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form form-group">
                        <textarea value={this.state.messages} placeholder="Lời nhắn của bạn" onChange={this.onChange} name="messages" data-error="Please,leave us a message."  />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <p className="form-message" />
                    <div className="col-md-12">
                      <div className="single-form form-group text-center">
                        <button type="submit" className="main-btn">ĐĂNG KÍ</button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div> 
        </div> 
      </section>
    );
  }
}

export default DangKiNhanThongTin;
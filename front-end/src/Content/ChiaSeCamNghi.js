import React, { Component } from 'react';

class ChiaSeCamNghi extends Component {
    render() {
        return (
            <section id="testimonial" className="testimonial-area pt-130 pb-130">
          <div className="shape shape-one">
            <img src="assets/images/testimonial/shape.png" alt="testimonial" />
          </div>
          <div className="shape shape-tow">
            <img src="assets/images/testimonial/shape.png" alt="testimonial" />
          </div>
          <div className="shape shape-three">
            <img src="assets/images/testimonial/shape.png" alt="testimonial" />
          </div>
          <div className="container">
            <div className="testimonial-bg bg_cover pt-80 pb-80" style={{backgroundImage: 'url(assets/images/testimonial/testimonial-bg.png)'}}>
              <div className="row">
                <div className="col-xl-4 offset-xl-7 col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                  <div className="testimonial-active">
                    <div className="single-testimonial text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/testimonial/t-1.png" alt="Testimonial" />
                        <div className="quota">
                          <i className="lni-quotation" />
                        </div>
                      </div>
                      <div className="testimonial-content mt-20">
                        <p>Nhiều người đã hỏi em rằng “Tại sao là con gái mà mà lại chọn nghề IT này cho cực, sao không đi theo ngành giáo viên hay du lịch cho khỏe”, rồi “Con gái theo ngành này thì không bao giờ bằng con trai đâu”. Khi ấy em cũng không biết phải trả lời thế nào, chỉ biết rằng mình nhất định phải theo đuổi ước mơ này dù có chuyện gì. Em tin rằng nếu cố gắng thì em sẽ làm được. Và em đã chọn PN là nơi nuôi dưỡng ước mơ ấy.”</p>
                        <h5 className="testimonial-name mt-15">Ngô Thị Mỹ Hoài</h5>
                        <span className="sub-title">Sinh viên, khóa 2023, PN Việt Nam</span>
                      </div>
                    </div> {/* single-testimonial */}
                    <div className="single-testimonial text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/testimonial/t-2.png" alt="Testimonial" />
                        <div className="quota">
                          <i className="lni-quotation" />
                        </div>
                      </div>
                      <div className="testimonial-content mt-20">
                        <p>Người ta luôn nghĩ rằng thế giới CNTT rất lạnh lẽo vì chỉ toàn máy móc và AI. Nhưng thông qua PN, tôi đã khám phá lại khía cạnh nhân văn của công nghệ. Những nụ cười tươi tắn hay hay những gương mặt tò mò của sinh viên đã gợi nhớ cho tôi về lí do mà mình bắt đầu học code. Chính là vì thế giới trong máy tính và những tiến bộ công nghệ tràn đầy sức hấp dẫn ấy! Ở PN Việt Nam, chúng tôi đang đào tạo ra những kỹ sư công nghệ từ những sinh viên lớn lên cùng việc đồng áng – nhiều em thậm chí còn chưa từng chạm vào máy tính trước đây. Và chúng tôi rất tận hưởng điều đó, bởi tại sao không chứ?</p>
                        <h5 className="testimonial-name mt-15">Lucas SINROD</h5>
                        <span className="sub-title">Giáo đốc Đào tạo & IT, PN Việt Nam</span>
                      </div>
                    </div> {/* single-testimonial */}
                    <div className="single-testimonial text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/testimonial/t-3.png " alt="Testimonial" />
                        <div className="quota">
                          <i className="lni-quotation" />
                        </div>
                      </div>
                      <div className="testimonial-content mt-20">
                        <p>PN Việt Nam đến như một phép màu. Chúng em là khóa đâu tiên của chương trình đào tạo mới kéo dài 3 năm. Chúng em đã có nhiều thời gian hơn để tìm hiểu các công nghệ tiên tiến mà các công ty cần, cũng như cải thiện khả năng tiếng Anh và kĩ năng mềm của mình – những hành trang cần thiết trên con đường sự nghiệp. Chúng em được học cách trở thành một thành viên có giá trị trong nhóm, một nhà lãnh đạo tài tình, hoặc thậm chí là một doanh nhân thành công. Và hơn hết, học phần Chuyên môn hóa và kỳ thực tập cuối cùng chính là cơ hội để em tăng khả năng được tuyển dụng của mình một cách đáng kinh ngạc. Bây giờ, em rất tự hào khi nói rằng em đã có thể chăm sóc cho bản thân và gia đình. Em cảm thấy có thêm động lực để cống hiến cho cộng đồng bằng cách tham gia Hội Cựu sinh viên PN Việt Nam và các hoạt động xã hội khác.</p>
                        <h5 className="testimonial-name mt-15">Cường NGUYỄN HỮU</h5>
                        <span className="sub-title">Cựu sinh viên PNV, khóa 2019, Lập trình viên full stack, mgm technology partners</span>
                      </div>
                    </div> {/* single-testimonial */}
                  </div> {/*  testimonial active */}
                </div>
              </div> {/* row */}
            </div> {/* testimonial bg */}
          </div> {/* container */}
        </section>
        );
    }
}

export default ChiaSeCamNghi;
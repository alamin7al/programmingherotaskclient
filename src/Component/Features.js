import React, { Component } from "react";
import Slider from "react-slick";
import './Features.css'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="my-5 container">
       <div className="text-center mt-5">
       <h3 className="text-center dfdff fw-bold "><strong style={{color:'#062265'}}>CHOOSE A</strong > DIAL</h3>
       <div class="wpb_text_column wpb_content_element  vc_custom_1508129479744">
		<div class="wpb_wrapper">
			<p className=" text-start fs-5 text-muted my-3 mb-5">This is the best in class effective watches from the luxury brand watch.co and gizmo. Lot of efforts. Take a peek look into it</p>

		</div>
	</div>
       </div>
        <Slider {...settings}>
          <div>
          <div class="cardss mx-auto ">
                                <div class="content">
                                    <h2>Golden WAtch</h2>
                                    <p className='text-start'>This is the best in class effective watches from the luxury brand watch.co and gizmo. Lot of efforts. Take a peek look into it</p>
                                    <em target="_blank">Read More</em>
                                    <img src="https://i.ibb.co/Njrqx7k/watch.jpg" alt="Thor img" />
                                </div>
                            </div>
          </div>
          <div>
          <div class="cardss mx-auto ">
                            <div class="content">
                                <h2>Golden WAtch</h2>
                                <p className='text-start'>This is the best in class effective watches from the luxury brand watch.co and gizmo. Lot of efforts. Take a peek look into it</p>
                                <em target="_blank">Read More</em>


                                <img src="https://i.ibb.co/NxnVJsC/watch4.jpg" alt="Thor img" />
                            </div>
                        </div>
          </div>
          <div>
          <div class="cardss mx-auto ">
                            <div class="content">
                                <h2>Golden WAtch</h2>
                                <p className='text-start'>This is the best in class effective watches from the luxury brand watch.co and gizmo. Lot of efforts. Take a peek look into it</p>
                                <em target="_blank">Read More</em>


                                <img src="https://i.ibb.co/JHjc8TC/watch3.jpg" alt="Thor img" />
                            </div>
                     </div>
          </div>
          <div>
          <div class="cardss mx-auto ">
                            <div class="content">
                                <h2>Golden WAtch</h2>
                                <p className='text-start'>This is the best in class effective watches from the luxury brand watch.co and gizmo. Lot of efforts. Take a peek look into it</p>
                                <em target="_blank">Read More</em>


                                <img src="https://i.ibb.co/k8YhNzH/watch2.jpg" alt="Thor img" />
                            </div>
                        </div>
          </div>
        
        </Slider>
      </div>
    );
  }
}



// import './Features.css'
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";


// // import required modules
// import { Pagination } from "swiper";


// // import required modules

// const Features = () => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (index + 1) + "</span>";
//         },
//       };
    
//     return (
//         <>
//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >


//                 <SwiperSlide>
//                     <div className="row">
//                         <div className="col-md-12 col-sm-12">


                            
                        // </div>



//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="col-md-12 col-sm-12">


                      
//                     </div>

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="col-md-12 col-sm-12">


                      
//                     </div>

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="col-md-12 col-sm-12">


                      
//                     </div>
//                 </SwiperSlide>

//             </Swiper>
//         </>






//     );
// };
// export default Features;
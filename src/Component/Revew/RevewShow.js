import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img2 from '../img/download.png'
import './Revew.css'
import { Card } from "react-bootstrap";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
      <div 
     
      className="container revew">

       <div className="row">
<div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
   <div>
   <div className="d-flex  align-items-center">
        <hr className="hrr"  />

        <h3 style={{color: '#1766A8'}} className="text-start">TESTIMONIAL</h3>

    </div>
    <p className="testimonialp text-start my-4">What People Says
 </p>
    <p className="testimonialp2 text-start">We met years ago at an advertising agency where we learned a ton of dos and some don’ts.

</p>
<div class="wrapper">
  <a class="cta" >
    <span>NEXT</span>
    <span>
      
    </span> 
  </a>
</div>

   </div>
</div>
<div className="col-md-8 col-sm-12">
<div className="my-5">
       <Slider {...settings}>
         

          <div>
          <Card className="cardscolor p-4" style={{ width: '100%' }}>
             
  <Card.Body>
  
    <Card.Text className="cardLekhs">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore beatae assumenda iste sapiente dolor voluptatibus sint autem nesciunt asperiores asperiores asperiores.
    </Card.Text>
  </Card.Body>
  
</Card>
<div className="d-flex justify-content-center align-items-center  mt-4">
  <Card.Img   style={{width:'auto' ,height:'100px',objectFit:'cover',borderRadius:'15px'}}  src={img2} />
  <div className="text-start ms-2">
  <h3 style={{color:'#062265'}}>Al Amin</h3>
    <h4 className="text-muted"> Web Design</h4>
  </div>
   

              </div>
          </div>
          <div>
          <Card className="cardscolor p-4" style={{ width: '100%' }}>
             
  <Card.Body>
  
    <Card.Text className="cardLekhs">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore beatae assumenda iste sapiente dolor voluptatibus sint autem nesciunt asperiores asperiores asperiores.
    </Card.Text>
  </Card.Body>
  
</Card>
<div className="d-flex justify-content-center align-items-center  mt-4">
  <Card.Img   style={{width:'auto' ,height:'100px',objectFit:'cover',borderRadius:'15px'}}  src={img2} />
  <div className="text-start ms-2">
  <h3 style={{color:'#062265'}}>Sakib</h3>
    <h4 className="text-muted"> Graphic Design</h4>
  </div>
   

              </div>
          </div>
          <div>
          <Card className="cardscolor p-4" style={{ width: '100%' }}>
             
  <Card.Body>
  
    <Card.Text className="cardLekhs">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore beatae assumenda iste sapiente dolor voluptatibus sint autem nesciunt asperiores asperiores asperiores.
    </Card.Text>
  </Card.Body>
  
</Card>
<div className="d-flex justify-content-center align-items-center  mt-4">
  <Card.Img   style={{width:'auto' ,height:'100px',objectFit:'cover',borderRadius:'15px'}}  src={img2} />
  <div className="text-start ms-2">
  <h3 style={{color:'#062265'}}>Hasan</h3>
    <h4 className="text-muted"> Web Developer</h4>
  </div>
   

              </div>
          </div>
         
         
        </Slider>
       </div>
</div>

       </div>

      </div>
    );
  }
}







// import React from 'react';
// import { Card } from 'react-bootstrap';
// import './Blog.css'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

// const Blog = () => {
//     return (
//         <div className='my-5'>
//             {/* <h1 className='blogs'>  আমাদের ব্লগ </h1>


//             <div>
//                 <Card style={{ width: '18rem' }}>
//                     <div>
                       
//                     </div>
//                     <Card.Img   style={{width:'auto' ,height:'200px',objectFit:'cover',borderRadius:'15px'}}  src={im1} className='pictu' />
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             </div> */}
            
//         </div>
//     );
// };

// export default Blog;
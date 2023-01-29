import React, { Component } from "react";
import Slider from "react-slick";

export default class UnevenSetsFinite extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 5,
      slidesToShow: 6
    };
    var setting = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 5,
      slidesToShow: 4
    };

    return (
      <div>

        

        <h3>FEATURED OBJECTS</h3>
        <Slider {...settings} className= "name">
          <div className="slides">
          <div className="slide">
            <img src="./images/steal1.jpg" alt="" className="slideimage"/>
          </div>
          </div>
          <div className="slides">
          <div className="slide">
            <img src="./images/steal2.jpg" alt="" className="slideimage"/>
          </div>
          </div><div className="slides">
          <div className="slide">
            <img src="./images/steal4.jpg" alt="" className="slideimage"/>
          </div>
          </div><div className="slides">
          <div className="slide">
            <img src="./images/steal5.jpg" alt="" className="slideimage"/>
          </div>
          </div><div className="slides">
          <div className="slide">
            <img src="./images/steal13.jpg" alt="" className="slideimage"/>
          </div>
          </div>
          <div className="slides">
          <div className="slide">
            <img src="./images/steal8.jpg" alt="" className="slideimage"/>
          </div>
          </div><div className="slides">
          <div className="slide">
            <img src="./images/steal9.png" alt="" className="slideimage"/>
          </div>
          </div><div className="slides">
          <div className="slide">
            <img src="./images/steal2.jpg" alt="" className="slideimage"/>
          </div>
          </div>
                   
        </Slider>


        <div className="paragraph">
          <h1>Maria Sibylla Merian: pioneering artist of flora and fauna</h1>
          <p>Discover the life, work and remarkable contribution to history of natural science.</p>
          <h2>Who built Stonehenge?</h2>
          <p>Watch experts discuss how studying ancient DNA has revealed valuable new information about the lives of those in the Stonehenge landscape.</p>
          <h2>Highlights from ‘feminine power’</h2>
          <p>Watch experts discuss how studying ancient DNA has revealed valuable new information about the lives of those in the Stonehenge landscape.</p>
        </div>

        <div className="news">

        </div>


      <div className="recommended">

      <h3>RECOMMENDED</h3>
        <Slider {...setting}>
      <div>
          <div className="slide1">
            <img src="./images/steal10.jpg" alt="" className="slideimage1"/>
            <div className="description">
            <h4>Buddha <span>1200CE</span></h4> 
            <hr />
            <p>Siddhartha Gautama, most commonly referred to as the Buddha, was a wandering ascetic</p>
          </div>
          </div>
        </div>
        

        <div>
          <div className="slide1">
            <img src="./images/steal11.jpg" alt="" className="slideimage1"/>
            <div className="description">
            <h4>Dharmaraja<span>400CE</span></h4> 
            <hr />
            <p>Yama is the judge of the dead, while Dharmadeva is one of the Prajapatis</p>
          </div>
          </div>
        </div>
      
        <div>
          <div className="slide1">
            <img src="./images/steal12.jpg" alt="" className="slideimage1"/>
            <div className="description">
            <h4>Buddha <span>1200CE</span></h4> 
            <hr />
            <p>Siddhartha Gautama, most commonly referred to as the Buddha, was a wandering ascetic</p>
          </div>
          </div>
        </div>
        <div>
          <div className="slide1">
            <img src="./images/steal20.jpg" alt="" className="slideimage1"/>
            <div className="description">
            <h4>Saraswati<span>900CE</span></h4> 
            <hr />
            <p>Maa (Mother) Saraswati is a Hindu goddess who represents education, creativity, and music.</p>
          </div>
          </div>
        </div>
        <div>
          <div className="slide1">
            <img src="./images/steal15.jpg" alt="" className="slideimage1"/>
            <div className="description">
            <h4>Venkateswara<span>100CE</span></h4> 
            <hr />
            <p>Lord Venkateswara popularly known as Balaji, Tirupati is famous for the Venkateswara temple</p>
          </div>
          </div>
        </div>
        <div>
          <div className="slide1">
            <img src="./images/steal16.jpg" alt="" className="slideimage1"/>
            <div className="description">
            <h4>Hanuman <span>1300CE</span></h4> 
            <hr />
            <p>Brass (heavily leaded zinc-brass) head cast using the lost wax (cireperdue) technique.</p>
          </div>
          </div>
        </div>
        <div>
          <div className="slide1">
            <img src="./images/steal17.jpg" alt="" className="slideimage1"/>
            <div className="description">
            <h4>Nataraja <span>1300CE</span></h4> 
            <hr />
            <p>A superb Nataraja murti to add to the auspiciousness of your space. On the back of the avidya-roopi</p>
          </div>
          </div>
        </div>
        <div>
          <div className="slide1">
            <img src="./images/steal18.jpg" alt="" className="slideimage1"/>
            <div className="description">
            <h4><span></span></h4> 
            <hr />
            <p></p>
          </div>
          </div>
        </div>
    
          


        </Slider>


      <section className='six'>
        <div className='content1'>
        <div className="keep">
            <span><img src="./images/logo.png" alt=""/>
             </span>
             <h2>MUSEUMS</h2>
         </div>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque dolor explicabo tenetur non, in delectus veniam earum eum fuga vero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dignissimos, ali</p>
         <ul>
            <li><img src="./images/twi.png" alt=""/></li>
            <li><img src="./images/face.png" alt=""/></li>
            <li><img src="./images/you.png" alt=""/></li>
            <li><img src="./images/tel.png" alt=""/></li>
            <li><img src="./images/game.png" alt=""/></li>
         </ul>
     
     
        </div>

        <div className='content2'>
             <h1>Information</h1>

        <ul>
            <li>Home</li>
            <li>Generator</li>
            <li>Career</li>
            <li>Contact</li>
        </ul>

        </div>

        <div className='content3'>
        <h1>Get Latest Update</h1>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum sapiente non eligendi ab ad.</span>
        <br/>
        <input type="text"/> <br/>
        <button>Submit</button>
        </div>
      </section>


      </div>


        
       

        


      </div>
    );
  }
}

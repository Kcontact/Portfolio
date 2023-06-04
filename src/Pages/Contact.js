import { Link } from "react-router-dom"
import React, { useRef } from 'react' 
//import { useForm } from "react-hook-form"
import './Contact.css';



function Home() {

 


  return (
      <div>


<div class="form">
            <h2>Cotact Portal</h2>
            <input type="name" name="name" placeholder="Enter Name"/>
            <input type="name" name="name" placeholder="Enter Phone number"/>
            <input type="email" name="email" placeholder="Enter Email"/>
            <div class="form-group">
            <p for="message">Message</p>
            <textarea class="form-control" id="message" rows="4"></textarea>
          </div>

            <button class="btnn"  onclick="sendMail()"><a href="#">Submit</a></button>

     
            <p class="liw">Log in with</p>

            <div class="icons">
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
            </div>

        </div>


<div className="contact" id="contact">
       <div className="contact-info">
        <h1>I'm here to help you in any way that I can</h1>
        <h3>I'm currently available for freelance work</h3>
        <p>If you have a project that you want to get started with, think you need my help with something,<br/> or just want to say hello, then feel free to get in touch</p>
        <button><i className="lni lni-whatsapp"></i>Catact Me</button>
       </div>



     <div className="Socialimg">

<img src="https://images.pexels.com/photos/5256819/pexels-photo-5256819.jpeg?auto=compress&cs=tinysrgb&w=1600"  height="600" width="600"></img>

     </div>












       </div>


      </div>

);
  }
  
  export default Home;
import React from 'react'
import { Link } from "react-router-dom"
import './Home.css'
import mountain from  "./image/mountain.mp4";
import bgvideo1 from  "./image/bgvideo1.mp4";




function Home() {




return (
<>


<div className="mainvideo">
<video className="video1" autoPlay loop muted>
<source src={bgvideo1} type="video/mp4"/>
</video>
</div>

<div className="container">
<div className="maintext">
     <h2 className="name">Hellow</h2>
                <h1 className="aboutname">I'm Karthik</h1>
                <p className="title1">A WEB DESIGNER</p>
                </div>
                <div className="mainphoto">
<img  className="photo" src={require("./IMG_20181106.jpg")} height="500" width="500"  alt=""></img>
</div>
            </div>



  <div class="info">
    <div>
    <p>Hello, I'm Kartihk, a passionate and creative web designer.<br/> I specialize in designing visually appealing and user-friendly websites that help businesses to stand out online.</p>
</div>
<div class="info-content">
    <img  className="Aniphoto" src="https://png.pngtree.com/png-clipart/20200429/ourmid/pngtree-anime-character-boring-png-image_2195700.jpg" alt=""/>
    </div>
</div>



<div className="NatureContainer">

<div>
<h1 className="NatureText">SAVE OUR NATURE</h1>
</div>

<div>

<img className="photo1" src="https://wallpapercave.com/wp/wp2724670.jpg" height="200" width="600" alt=""></img>
</div>
</div>



        <div className="about-info1">
            <h1 className="text2">My skills and expertise encompass a range of design services<br/> and solutions that I can offer to help you achieve your design goals</h1>
            <div className="about-info1">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XFRtORg6IC3VYPYt0XUwRkYk1zbDCJlHxA&usqp=CAU" height="200" width="600" alt=""  class="about-img-1"></img>
                <h2  className="abouttext1">Transform your vision into reality with custom design solutions tailored to your unique needs and preferences</h2>
                <p className="aoutpara">My design philosophy is centered around simplicity and focuses on typography, content, and effectively conveying the message that my clients want to communicate</p>
            </div>
            </div>
                  



    <div class="about-info">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUbz4KqqpYhbTMy3hKnsrtGm-ag0sWcsflQ&usqp=CAU" height="200" width="600" alt=""  class="about-img-2"></img>
                <h2 class="abouttext">You should focus on developing what you actually need</h2>
                <p>I'm a developer, so I Know how to create your
                    website to run across devices using the latest
                    technologies available.</p>
            </div>


 <div className="landingpage">

<video autoPlay loop muted>
<source src={mountain} type="video/mp4"/>
</video>


</div>



    <div className="contact">
       <div className="contact-info">
        <h1>I'm here to help you in any way that I can</h1>
        <h3>I'm currently available for freelance work</h3>
        <p class="contacttext">If you have a project that you want to get started with, think you need my help with something,<br/> or just want to say hello, then feel free to get in touch</p>
        <button><i className="lni lni-whatsapp"></i>Catact Me</button>
       </div>






       </div>



       <div class="Home-grid-container">
  <div><h1>Link</h1><p>Home</p><p>Doc</p><p>EXample</p></div>
    <div><h1>Guidence</h1><p>Themes</p><p>Blog</p><p>Function</p></div>
    <div><h1>Project</h1><p>Breeds</p><p>Variety</p><p>Service</p></div>  
    <div><h1>Community</h1><img  width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2etThATbfHEvFTsIqewYF9zHsFYJt_58Rq6ljXDtPVso9s5_&s"></img>
        <img width="42px" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"></img>
        <img  width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMJ6tQ5pDQfcokDnXi0ttDx5lIx_05wNONEIYYFeSkasKDG8&s"></img>
        <img  width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfF1wssLcngowS2pswbQQWqaPHHp-i2zi0idtNVv3ZNplFCE&s"></img>
        <p>Helps</p><p><br></br></p></div>
  </div>


      <div className="Home-fotter">
    
    <h1>&copy; 2023 WebKart. All Rights Reserved.</h1>


    </div>



                  </>
      

);
  }
  
  export default Home;

  



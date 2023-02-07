import React from "react";

const Home=()=>{
    return(
<>
<div >
    <div className="homeimg">
<img src="https://images.unsplash.com/photo-1558981033-0f0309284409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
<img src="https://images.unsplash.com/photo-1627062598433-016841c1f1e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
</div>
<div>
<div id="carouselExample" className="carousel slide Home"> 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.royalenfield.com/content/dam/royal-enfield/super-meteor-650/motorcycles/home/motorcycle/desktop/super-meteor-650.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.royalenfield.com/content/dam/royal-enfield/super-meteor-650/motorcycles/home/apparel/apparel-home.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.royalenfield.com/content/dam/royal-enfield/hunter-350/home/gma/gma-home.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</>
    )
};
export default Home;
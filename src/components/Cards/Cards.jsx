import React from 'react'
import image from "../../assets/images/cartas-01.jpg"
import image2 from "../../assets/images/cartas-02.jpg"
import image3 from "../../assets/images/cartas-03.jpg"


function Cards() {
  return (
    <div className="d-flex justify-content-around m-4">
      <img src={image3} alt="imagen3"style={{  height: "550px" }} />
      <img src={image2} alt="imagen2" style={{  height: "550px" }} />
      <img src={image} alt="imagen" style={{  height: "550px" }}/>
    </div>
  );
}

export default Cards


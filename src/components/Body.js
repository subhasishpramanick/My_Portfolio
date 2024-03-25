import React from "react";
import photo from "./1.png"
import logo1 from "./img1.png"
import logo2 from "./img2.png"
import logo3 from "./img3.png"
import logo4 from "./img4.png"
import "./body.css"

const Body =()=>
    <>
        <div className="container  text-light my-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="container bg-light px-4  my-3 border border-light shadow-lg p-3 mb-5 rounded-4 ">

                        1
                        <div className="row mx-auto">
                        <img src={photo} class="rounded-4 mx-auto d-block " alt="..." width="300" height="500"></img>
                        </div>
                        <div className="row  d-flex justify-content-center my-5">
                          <div className="col-3 d-flex justify-content-end"><img src={logo1} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/></div>
                          <div className="col-2 d-flex justify-content-center"><img src={logo2} class="img-fluid py-2 px-2" alt="..." height="25" width="60"/></div>
                          <div className="col-2 d-flex justify-content-start"><img src={logo3} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/></div>
                          <div className="col-2 d-flex justify-content-start"><img src={logo4} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/></div>
                        </div>
                        <div className="row bg-info d-flex justify-content-center">
                          subhasishpramamick@gmail.com
                        </div>
                        <div className="row bg-info d-flex justify-content-center">
                             <button class="btn btn-outline-light rounded-5" type="button">Button</button>
                        </div>
                    </div>
                 
                </div>
                <div className="col-md-6  my-5  py-5">
                    <h3 className=" lead">
                    I'm Subhasish Pramanick, a motivated BCA student, With 1 year of hands-on experience in web development. I am passionate about Software Engineering and innovation with a strong foundation in various programming languages and frameworks, focusing on clean code and efficient solutions. Enthusiastic about problem-solving and staying up-to-date with the latest industry trends. I am excited to collaborate on challenging projects and contribute to the ever-evolving world of technology.
                    </h3>
                </div>
            </div>
        </div>
    </>

export default Body
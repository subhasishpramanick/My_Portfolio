import React from "react";
import photo from "./img2.jpg"

const Body =()=>
    <>
        <div className="container-fluid my-5 bg-info mx-auto">
            <div className="row">
                <div className="col-md-7 bg-warning d-flex justify-content-center">
                    <div className="row">

                    <div className="col-10">
                    <h2>Subhasish Pramanick</h2>
                    </div>
                
                     <div className="col-12 d-flex justify-content-center">
                     <img src={photo} class="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="400" height="500" loading="lazy"/>
                     </div> 

                     <div className="col-12 d-flex justify-content-center my-5">
                            <h3 className="d-block">Subhasishpramamick@gmail.com</h3><br />
                           
                        </div> 

                      <div className="row">
                        <div className="col-3">
                            <div className="col-12 d-flex justify-content-center">
                     <img src={photo} class="d-block mx-lg-auto img-fluid rounded-circle" height="500" alt="Bootstrap Themes"/>
                     </div>
                        </div>
                        <div className="col-3">
                            <div className="col-12 d-flex justify-content-center">
                     <img src={photo} class="d-block mx-lg-auto img-fluid rounded-circle" alt="Bootstrap Themes"/>
                     </div>
                        </div>
                        <div className="col-3">
                            <div className="col-12 d-flex justify-content-center">
                     <img src={photo} class="d-block mx-lg-auto img-fluid rounded-circle" alt="Bootstrap Themes"/>
                     </div>
                        </div>
                        <div className="col-3">
                            <div className="col-12 d-flex justify-content-center">
                     <img src={photo} class="d-block mx-lg-auto img-fluid rounded-circle" alt="Bootstrap Themes"/>
                     </div>
                        </div>
                        </div>  

                </div>
                    </div>
                <div className="col-md-5 bg-dark">Hello</div>
            </div>
        </div>
    </>

export default Body
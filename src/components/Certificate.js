import React from "react"
import "./body.css"

import C1 from "./Media/c1.png"
import C2 from "./Media/c2.png"
import C3 from "./Media/c3.png"
import C4 from "./Media/c4.png"
const Cer =props=>
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-5 mx-sm-4">
                    <div className="row border border-secondary rounded-4">

                            <div className="container d-flex justify-content-center">

                                <img src={C1} class="img-fluid py-2 mt-md-2" alt="..." height="10" width="300" />
                            </div>
                        <p className="text-light  d-flex justify-content-center">Crash Course on Python</p>
                    </div>
                   
                </div>
                <div className="col-sm-5 mx-sm-2">
                          <div className="row border border-secondary rounded-4">

                            <div className="container d-flex justify-content-center">

                                <img src={C2} class="img-fluid py-2 mt-md-2" alt="..." height="10" width="300" />
                            </div>
                        <p className="text-light  d-flex justify-content-center">Python Basic</p>
                    </div>
                   
                </div>
            </div>  
            <div className="row my-3">
                <div className="col-sm-5 mx-sm-4">
                    <div className="row border border-secondary rounded-4">

                            <div className="container d-flex justify-content-center">

                                <img src={C3} class="img-fluid py-2 mt-md-2" alt="..." height="10" width="300" />
                            </div>
                        <p className="text-light  d-flex justify-content-center">Intern Software developer</p>
                    </div>
                   
                </div>
                <div className="col-sm-5 mx-sm-2">
                          <div className="row border border-secondary rounded-4">

                            <div className="container d-flex justify-content-center">

                                <img src={C4} class="img-fluid py-2 mt-md-2" alt="..." height="10" width="300" />
                            </div>
                        <p className="text-light  d-flex justify-content-center">C programming trainer</p>
                    </div>
                   
                </div>
            </div>  
       

        </div>
        
    </>
export default Cer
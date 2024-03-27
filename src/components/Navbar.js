import React from "react";
import "./nav.css"

const navbar = promps =>
  <div className=" bg-dark navbar-dark navbar-expand-lg py-4 container-fluid">
    <div className="row d-flex justify-content-around ">
      <div className="col-7 text-light d-flex justify-content-center justify-content-md-center align-item-center px-sm-5 ">
        <a href="/" className="text-decoration-none text-light  fw-bold display-5" >Subhasish Pramanick</a>
      </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        
        <div className="col-5 text-light d-flex justify-content-center ">
      <div class="collapse navbar-collapse " id="navbarSupportedContent">

  
         <ul className="navbar-nav d-inline">
            <li className="nav-item d-inline mx-2 mx-sm-3">
              <a href="/" className="text-decoration-none text-info font">Home</a>
            </li>
            <li className="nav-item d-inline mx-2 mx-sm-3">
              <a href="/" className="text-decoration-none text-info font">Expertise</a>
            </li>
            <li className="nav-item d-inline mx-2 mx-sm-3">
              <a href="/" className="text-decoration-none text-info font">Projects</a>
            </li>
            <li className="nav-item d-inline mx-1 mx-sm-1">
              <a href="/" className="text-decoration-none text-info font">Contact</a>
            </li>
         </ul>
   
        </div>
      </div>
  

    </div>

  </div>


export default navbar;
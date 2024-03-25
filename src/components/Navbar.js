import React from "react";

const navbar = promps =>
  <div className=" bg-dark navbar-dark navbar-expand-md py-3 container-fluid">
    <div className="row d-flex justify-content-around ">
      <div className="col-7 text-light d-flex justify-content-center justify-content-md-start align-item-center px-sm-5 ">
        <a href="/" className="text-decoration-none text-light" >Subhasish Pramanick</a>
      </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        
        <div className="col-5 text-light d-flex justify-content-center ">
      <div class="collapse navbar-collapse " id="navbarSupportedContent">

  
         <ul className="navbar-nav d-inline">
            <li className="nav-item d-inline mx-2 mx-sm-3">
              <a href="/" className="text-decoration-none text-info">Home</a>
            </li>
            <li className="nav-item d-inline mx-2 mx-sm-3">
              <a href="/" className="text-decoration-none text-info">Expertise</a>
            </li>
            <li className="nav-item d-inline mx-2 mx-sm-3">
              <a href="/" className="text-decoration-none text-info">Projects</a>
            </li>
            <li className="nav-item d-inline mx-2 mx-sm-3">
              <a href="/" className="text-decoration-none text-info">Contact</a>
            </li>
         </ul>
   
        </div>
      </div>
  

    </div>

  </div>


export default navbar;
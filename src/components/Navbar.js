import React from "react";
import "./nav.css"
import "./body.css"

const navbar = promps =>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
    <div class="container-fluid">
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand text-green lead" href="/">Subhasish Pramanick</a>

      <div class="navbar-collapse justify-content-md-end collapse" id="navbarsExample08" >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Centered nav only</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/">Disabled</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/">Disabled</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Disabled</a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>

export default navbar;
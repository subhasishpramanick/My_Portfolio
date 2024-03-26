import React from "react"

import C from "./Media/C.png"
import Java from "./Media/Java.png"
import Bs from "./Media/Bootstarp.png"
import Dj from "./Media/Django.png"
import Ht from "./Media/Html.png"
import Js from "./Media/Js.png"
import Rt from "./Media/React.png"
import My from "./Media/Mysql.png"
import Py from "./Media/Python.png"
import Gt from "./Media/GitHub.png"
import php from "./Media/php.png"
import css from "./Media/Css.png"
import Git from "./Media/Git.png"
import SQL from "./Media/sql.png"
import Windows from "./Media/Windows.png"
import Vs from "./Media/Vscode.png"
import "./body.css"

const App= promps=>

    <>
    <div className="container bg-white pt-3 pb-2 rounded-5 shadow3 mb-5">

        <div className="container bg-black rounded-4 ">
            <div className="row rounded-4 ">
                <div className="col-lg-5 col-md-6 col-12 bg-black rounded-4">
                    <div className="container-fluid rounded-4">
                        <div className="row rounded-5 py-2">
                        <div className="col-3 ">
                            <a href="www.google.com" target="blank"><img src={C} class="img-fluid py-2 px-2" alt="..." height="25" width="80"/></a>
                            <h5 className="text-white d-flex justify-content-center my-1  justify-content-lg-start px-lg-4 ">C</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Js} class="img-fluid py-2 px-2 mt-md-2" alt="..." height="10" width="60"/>
                            <h5 className="text-white d-flex justify-content-center my-md-2 my-1  justify-content-lg-start">JavaScript</h5>
                            </div>
                          <div className="col-3  ">
                            <img src={Ht} class="img-fluid py-2 px-2 mx-md-2 mt-md-2" alt="..." height="15" width="60"/>
                            <h5 className="text-white d-flex justify-content-center justify-content-lg-start px-lg-3 py-lg-2 ">Html</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Rt} class="img-fluid py-2 px-2 " alt="..." height="25" width="80"/>
                            <h5 className="text-white d-flex justify-content-center my-1  justify-content-lg-start px-lg-3 ">React</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-0 bg-black rounded-5"></div>
            </div>
            <div className="row my-4 my-lg-2">
                <div className="col-lg-5 col-md-6 col-12 bg-black rounded-5">
                <div className="container-fluid">
                        <div className="row">
                        <div className="col-3">
                            <a href="www.google.com" target="blank"><img src={Java} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/></a>
                            <h5 className="text-white d-flex justify-content-center  justify-content-lg-start px-lg-2 ">Java</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Bs} class="img-fluid py-2 px-2 mt-4" alt="..." height="35" width="80"/>
                            <h5 className="text-white d-flex justify-content-center mt-3  justify-content-lg-start  ">Bootstrap</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={css} class="img-fluid py-2 px-2 mt-4" alt="..." height="25" width="80"/>
                            <h5 className="text-white d-flex justify-content-center mt-1 justify-content-lg-start px-lg-4">CSS</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={My} class="img-fluid py-2 px-2 mt-4" alt="..." height="20" width="80"/>
                            <h5 className="text-white d-flex justify-content-center  justify-content-lg-start px-lg-2">MySql</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-0 bg-black"></div>
            </div>
            <div className="row my-4">
                <div className="col-lg-5 col-md-6 col-12 bg-black">
                <div className="container-fluid">
                        <div className="row">
                        <div className="col-3 ">
                            <a href="www.google.com" target="blank"><img src={Py} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/></a>
                            <h5 className="text-white py-lg-1">Python</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Gt} class="img-fluid py-2 px-2 mt-md-1 mt-2" alt="..." height="25" width="60"/>
                            <h5 className="text-white mt-1">GitHub</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Dj} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/>
                            <h5 className="text-white py-lg-1">Django</h5>
                            </div>
                          <div className="col-3 ">
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-0 bg-black"></div>
            </div>
            <div className="row my-4">
                <div className="col-lg-5 col-md-6 col-12 bg-black">
                <div className="container-fluid">
                        <div className="row">
                        <div className="col-3">
                            <a href="www.google.com" target="blank"><img src={php} class="img-fluid py-2 px-2" alt="..." height="10" width="75"/></a>
                            <h5 className="text-white d-flex justify-content-center mx-md-auto  justify-content-lg-start px-lg-3 ">php</h5>
                            </div>
                          <div className="col-3">
                            <img src={Git} class="img-fluid py-2 px-2" alt="..." height="25" width="60"/>
                            <h5 className="text-white px-lg-3">Git</h5>
                            </div>
                          <div className="col-3">
                            <img src={SQL} class="img-fluid py-2 px-2" alt="..." height="25" width="80"/>
                            <h5 className="text-white py-2">SQLite</h5>
                            </div>
                          <div className="col-3">
                           
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-0 bg-black"></div>
            </div>  
         
        </div>
        <div className="row d-flex justify-content-center rounded-5">
             
              <div className="col-md-1 col-2">
                <img src={Windows} class="img-fluid  px-2 " alt="..." height="20" width="80"/>
              </div>
              <div className="col-md-1 col-2">
                <img src={Vs} class="img-fluid  px-2 " alt="..." height="20" width="80"/>
              </div>
              <div className="col-md-1 col-2">
                <img src={My} class="img-fluid  px-2 " alt="..." height="20" width="80"/>
              </div>
              <div className="col-md-1 col-2">
                <img src={My} class="img-fluid  px-2 " alt="..." height="20" width="80"/>
              </div>
              <div className="col-md-1 col-2">
                <img src={My} class="img-fluid  px-2 " alt="..." height="20" width="80"/>
              </div>
              <div className="col-md-1 col-2">
                <img src={My} class="img-fluid  px-2 " alt="..." height="20" width="80"/>
              </div>
           
            </div>
    </div>
    </>
export default App
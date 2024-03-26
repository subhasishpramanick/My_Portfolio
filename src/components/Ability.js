import React from "react"
import logo1 from "./img1.png"
import logo2 from "./img2.png"
import logo3 from "./img3.png"
import logo4 from "./img4.png"
import C from "./Media/C.png"
import Java from "./Media/Java.png"
import Bs from "./Media/Bootstarp.png"
import Dj from "./Media/Django.png"
import Ht from "./Media/Html.png"
import Js from "./Media/JS.png"
import Rt from "./Media/React.png"
import My from "./Media/Mysql.png"
import Py from "./Media/Python.png"
import Gt from "./Media/Github.png"

const App= promps=>

    <>
    <div className="container bg-white pt-3 pb-5 rounded-5">

        <div className="container bg-black rounded-4">
            <div className="row rounded-4">
                <div className="col-md-4 col-12 bg-black rounded-4">
                    <div className="container-fluid rounded-4">
                        <div className="row rounded-5">
                        <div className="col-3 ">
                            <a href="www.google.com" target="blank"><img src={C} class="img-fluid py-2 px-2" alt="..." height="25" width="80"/></a>
                            <h5 className="text-white d-flex justify-content-center my-1">C</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Js} class="img-fluid py-2 px-2" alt="..." height="30" width="100"/>
                            <h5 className="text-white d-flex justify-content-center my-3">JavaScript</h5>
                            </div>
                          <div className="col-3  ">
                            <img src={Ht} class="img-fluid py-2 px-2 mx-md-2 mt-md-2" alt="..." height="15" width="60"/>
                            <h5 className="text-white d-flex justify-content-center  ">Html</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Rt} class="img-fluid py-2 px-2" alt="..." height="30" width="100"/>
                            <h5 className="text-white d-flex justify-content-center my-1">React</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-0 bg-black rounded-5"></div>
            </div>
            <div className="row">
                <div className="col-md-4 col-12 bg-black rounded-5">
                <div className="container-fluid">
                        <div className="row">
                        <div className="col-3 ">
                            <a href="www.google.com" target="blank"><img src={Java} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/></a>
                            <h5 className="text-white d-flex justify-content-center">Java</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Bs} class="img-fluid py-2 px-2 mt-4" alt="..." height="35" width="80"/>
                            <h5 className="text-white d-flex justify-content-center mt-3 ">Bootstrap</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Gt} class="img-fluid py-2 px-2 mt-4" alt="..." height="10" width="60"/>
                            <h5 className="text-white d-flex justify-content-center mt-3">Git</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={My} class="img-fluid py-2 px-2 mt-4" alt="..." height="20" width="80"/>
                            <h5 className="text-white d-flex justify-content-center mt-4">MySql</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-0 bg-black">Hello</div>
            </div>
            <div className="row">
                <div className="col-md-4 col-12 bg-black">
                <div className="container-fluid">
                        <div className="row">
                        <div className="col-3 ">
                            <a href="www.google.com" target="blank"><img src={Py} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/></a>
                            <h5 className="text-white">Python</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Gt} class="img-fluid py-2 px-2 mt-2" alt="..." height="25" width="60"/>
                            <h5 className="text-white mt-1">GitHub</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={Dj} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/>
                            <h5 className="text-white">Django</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={logo4} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/>
                            <h5 className="text-white">Google</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-0 bg-black"></div>
            </div>
            <div className="row">
                <div className="col-md-4 col-12 bg-black">
                <div className="container-fluid">
                        <div className="row">
                        <div className="col-3">
                            <a href="www.google.com" target="blank"><img src={logo1} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/></a>
                            <h5 className="text-white">Google</h5>
                            </div>
                          <div className="col-3">
                            <img src={logo2} class="img-fluid py-2 px-2" alt="..." height="25" width="60"/>
                            <h5 className="text-white">Google</h5>
                            </div>
                          <div className="col-3">
                            <img src={logo3} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/>
                            <h5 className="text-white">Google</h5>
                            </div>
                          <div className="col-3">
                            <img src={logo4} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/>
                            <h5 className="text-white">Google</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-0 bg-black">Hello</div>
            </div>
            <div className="row">
                <div className="col-md-4 col-12 bg-black rounded-5">
                <div className="container-fluid">
                        <div className="row">
                        <div className="col-3">
                            <a href="www.google.com" target="blank"><img src={logo1} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/></a>
                            <h5 className="text-white">Google</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={logo2} class="img-fluid py-2 px-2" alt="..." height="25" width="60"/>
                            <h5 className="text-white">Google</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={logo3} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/>
                            <h5 className="text-white">Google</h5>
                            </div>
                          <div className="col-3 ">
                            <img src={logo4} class="img-fluid py-2 px-2" alt="..." height="10" width="60"/>
                            <h5 className="text-white">Google</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-0 bg-black rounded-5">Hello</div>
            </div>
        </div>
    </div>
    </>
export default App
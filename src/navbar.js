import logo from './images/logo.png'
import "./App.css"
import React from "react";


function Navbar() {
    return (

        <div className='container' >

            <nav className="navbar navbar-expand-lg  navbar-light bg-transparent navbardivnav">

                <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-toggler"></span>
                </button>
                <div className='navbardivnav12'>
                          <a href="/">  <img className='logoicon' alt="pic" height={"100%"} width={"100px"} src={logo} /> </a>                           

                </div>

                <div className="collapse navbar-collapse navbardivnav122" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <a className="nav-link links" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link links" href="/Pharmacy">Pharmacist</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link links" href="/Manufacturers">Manufacturers</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link links" href="/Warehouses">Warehouses</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link links" href="/Drivers">Drivers </a>
                        </li>
                    </ul>

                </div>
                <div className='navbardivnav12'>   
                   <a href="/Login"> <button type="button" className="btn btn-outline-warning" >LOGIN</button></a>
                     

                </div>

            </nav>



        </div>










        //         <div  className=" navbardiv">

        //     <nav className="navbar navbar-expand-lg navbar-light bg-transparent navbardivnav ">
        //     <div className="container-fluid">
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //           </button>


        //         <div className="collapse navbar-collapse navbar-light" id="navbarSupportedContent navbardivnav1">

        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbardivnav12">

        //                     <li className="nav-item links">
        //                     <a href="#home">Home</a>
        //                     </li>

        //                     <li className="nav-item links">
        //                     <a href="#about">About</a>
        //                     </li>

        //                     <li className="nav-item links">
        //                     <a href="#roadmap">Roadmap</a>
        //                     </li>

        //                 </ul>

        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbardivnav12 ">

        //                     <li className="nav-item links">
        //                     <a href="#"><img className='socialicon' src={discord} /></a>                    </li>

        //                     <li className="nav-item links">
        //                     <a href="#"><img className='socialicon' src={twitter} /></a>                    </li>

        //                     <li className="nav-item links">
        //                      <a href="#"><img className='socialicon' src={fb} /></a>
        //                     </li>
        //                     <li className="nav-item links">
        //                     <a href="#"><img className='socialicon' src={instagram} /></a>                    </li>

        //                 </ul>
        //             </div></div>
        //     </nav>

        // </div>
















        // <div className="row navbar mynavbar pt-3">






        //             <div className="col-md-6 links">
        //                     <a href="#home">Home</a>
        //                     <a href="#about">About</a>
        //                     <a href="#roadmap">Roadmap</a>
        //             </div>
        //             <div className="col-md-6 text-right">
        //                 <span className="socials">
        //                     <a href="#"><img className='socialicon' src={discord} /></a>
        //                     <a href="#"><img className='socialicon' src={twitter} /></a>
        //                     <a href="#"><img className='socialicon' src={fb} /></a>
        //                     <a href="#"><img className='socialicon' src={instagram} /></a>
        //                 </span>
        //             </div>
        //         </div>
    );
}

export default Navbar;
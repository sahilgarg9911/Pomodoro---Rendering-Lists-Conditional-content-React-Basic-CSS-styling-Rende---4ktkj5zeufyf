import React, { Component, useState, useEffect } from "react";
import '../styles/Navbar.css';


const Navbar = () => {

    return ( 

        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" href="#">Hi 👋 Micin</a> 
  </div>
</nav>

<div className="barandheading">
    <div className="bar"><div className="progress"></div></div>

<div className="revenueforcastsheading">
    <h1>Revenue Forcasts ?</h1>
</div>
    </div>
        </>
        
    )

}


export default Navbar
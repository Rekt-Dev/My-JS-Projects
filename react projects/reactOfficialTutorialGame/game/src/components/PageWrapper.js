import React, { Component } from 'react';

class PageWrapper extends Component {

    render() {

        return (

            <div>

            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id = "mainNav" >
            <div className="container">
            <a className="navbar-brand" href = "#page-top"> <img src = "%PUBLIC_URL%/assets/img/navbar-logo.svg"
            alt = "..."/> </a> <button className="navbar-toggler" type = "button"
            data-bs-toggle = "collapse"
            data-bs-target = "#navbarResponsive"
            aria-controls = "navbarResponsive"
            aria-expanded = "false"
            aria-label = "Toggle navigation"> Menu <i className="fas fa-bars ms-1" > </i> </button> 
            <div className="collapse navbar-collapse" id = "navbarResponsive" >
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0" >
            <li className="nav-item" > 
            <a className="nav-link"href = "#services" > Services </a></li >
            <li className="nav-item" > <a className="nav-link" href = "#portfolio" > Portfolio </a>
            </li>
            <li className="nav-item" > 
            <a className="nav-link" href = "#about" > About </a>
            </li >
            <li className="nav-item" > <a className="nav-link"href = "#team" > Team </a></li >
            <li className="nav-item" > <a className="nav-link" href = "#contact" > Contact </a></li >
            </ul> 
            </div> 
            </div>
            </nav> 
            </div>

        )


    }}
    export default PageWrapper

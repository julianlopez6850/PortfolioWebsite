import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../styles/RotateLogo.css';

import ambigramLogo from '../assets/NameAmbigramCircle.png';
import initialsLogo from '../assets/JL2.svg';

function Navbar() {
    return (
        // <div id="app__header">
        //     <img className = "rotate_img" src={ambigramLogo} />
        //     <h1 id ="name">Julian Lopez</h1>
        //     <div id ="btn__group">
        //         <button onClick={function() {
        //         window.open("https://www.linkedin.com/in/julian-lopez-1906311b8/")
        //         }}>LinkedIn</button>
        //         <button onClick={() => {
        //         window.open("https://github.com/julianlopez6850")
        //         }}>GitHub</button>
        //         <button onClick={() => {
        //         window.open("https://devpost.com/julianlopez6850?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav")
        //         }}>Devpost</button>
        //     </div>
        // </div>

        <div id="app__header">
            <img className = "rotate_img" src={initialsLogo} />
            <h1 id ="name">Julian Lopez</h1>
        </div>

    )
  }

export default Navbar
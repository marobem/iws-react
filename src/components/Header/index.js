import React from "react";
import "./styles.css";

const Header = () => (

    <header id="main-header">
        <div className="header__container">
            <div className="isoheader">
                <input className="inputField"></input>
                <img src={window.location.origin + '/img/logo.png'} />
            </div>
        </div>
    </header>
);

 export default Header;

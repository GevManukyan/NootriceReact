import React from "react";
import ReactDOM from 'react-dom/client';
import FAQ from "./phts/FAQ.png"
import opl from "./phts/Оплата и доставка.png"
import vozv from "./phts/Возврат.png"
import isl from "./phts/Исследования.png"
import cob from "./phts/Личный кабинет.png"
import num from "./phts/8 8 (800) 600-09-90.png"
import logo from "./phts/logo (3).png"
import vect from "./phts/Vector (2).png"
import elips from "./phts/Ellipse 3.png"
import one from "./phts/1.png"
import Hamburger from 'hamburger-react'
import {useState,useEffect} from "react"




function Header(){
    let [display, setDisplay] = useState(true) ;

   
   
     let burgerClick = ()=>{

        setDisplay(!display)

    }


    return(
        <div className="header">
            <div className="hamburger-react"  onClick = {burgerClick}>
                <Hamburger />
            </div>
            <div className="logoDiv">
                <img src={logo} alt="" className="logo" />
            </div>
                <div className="menuDiv">
            <ul>
                <li>
                    <img src={FAQ} alt="" />
                </li>
                <li>
                    <img src={opl} alt="" />
                </li>
                <li>
                    <img src={vozv} alt="" />
                </li>
                <li>
                    <img src={isl} alt="" />
                </li>
                <li>
                    <img src={cob} alt="" />
                </li>
                <li>
                    <img src={num} alt="" />
                </li>
            </ul>
        </div>
        <div className="basket">
            <img src={vect} alt="" />
            <img src={elips} alt="" className="elp" />
            <img src={one} alt="" className="one" />
        </div>
        
        <div className={`${display?"displayOff":"hamburgerDiv"}` } >
                <div>
                    <ul>
                    <li><a href="#"></a>FAQ</li>
                    <li><a href="#"></a>Оплата и доставка</li>
                    <li><a href="#"></a>Возврат</li>
                    <li><a href="#"></a>Исследования</li>
                    <li><a href="#"></a>Личный</li>
                    <li><a href="#"></a>88(800)600-09-90</li>
                </ul>
                </div>
            </div>
    </div>
    
    )
}


export default Header;
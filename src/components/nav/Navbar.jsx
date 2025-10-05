import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header>
    <div className="nav">
       <ion-icon name="logo-apple" className="icon1"></ion-icon>
       <ul>
        <li>Store</li>
        <li>Mac</li>
        <li>iPAd</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>Vision</li>
        <li>AirPods</li>
        <li>Tv & Home</li>
        <li>Entertainment</li>
        <li>Accesories</li>
        <li>Support</li>
        <ion-icon name="search-outline" className="icon2"></ion-icon>
        <ion-icon name="bag-outline" className="icon3"></ion-icon>


       </ul>
    </div>
    </header>
  )
}

export default Navbar
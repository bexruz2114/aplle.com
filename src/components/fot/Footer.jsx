// Footer.jsx
import React from "react";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Shop and Learn</h4>
          <span>Store</span>
          <span>Mac</span>
          <span>iPad</span>
          <span>iPhone</span>
          <span>Watch</span>
          <span>Vision</span>
          <span>AirPods</span>
          <span>TV & Home</span>
          <span>AirTag</span>
          <span>Accessories</span>
          <span>Gift Cards</span>
        </div>
        <div className="footer-col">
          <h4>Apple Wallet</h4>
          <span>Wallet</span>
          <span>Apple Card</span>
          <span>Apple Pay</span>
          <span>Apple Cash</span>
        </div>
        <div className="footer-col">
          <h4>Account</h4>
          <span>Manage Your Apple Account</span>
          <span>Apple Store Account</span>
          <span>iCloud.com</span>
          <h4>Entertainment</h4>
          <span>Apple One</span>
          <span>Apple TV+</span>
          <span>Apple Music</span>
          <span>Apple Arcade</span>
          <span>Apple Fitness+</span>
          <span>Apple News+</span>
          <span>Apple Podcasts</span>
          <span>Apple Books</span>
          <span>App Store</span>
        </div>
        <div className="footer-col">
          <h4>Apple Store</h4>
          <span>Find a Store</span>
          <span>Genius Bar</span>
          <span>Today at Apple</span>
          <span>Group Reservations</span>
          <span>Apple Camp</span>
          <span>Apple Store App</span>
          <span>Certified Refurbished</span>
          <span>Apple Trade In</span>
          <span>Financing</span>
          <span>Carrier Deals at Apple</span>
          <span>Order Status</span>
          <span>Shopping Help</span>
        </div>
        <div className="footer-col">
          <h4>For Business</h4>
          <span>Apple and Business</span>
          <span>Shop for Business</span>
          <h4>For Education</h4>
          <span>Apple and Education</span>
          <span>Shop for K-12</span>
          <span>Shop for College</span>
          <h4>For Healthcare</h4>
          <span>Apple and Healthcare</span>
          <h4>For Government</h4>
          <span>Apple and Government</span>
          <span>Shop for Veterans and Military</span>
          <span>Shop for State and Local Employees</span>
          <span>Shop for Federal Employees</span>
        </div>
        <div className="footer-col">
          <h4>Apple Values</h4>
          <span>Accessibility</span>
          <span>Education</span>
          <span>Environment</span>
          <span>Inclusion and Diversity</span>
          <span>Privacy</span>
          <span>Racial Equity and Justice</span>
          <span>Supply Chain Innovation</span>
        </div>
        <div className="footer-col">
          <h4>About Apple</h4>
          <span>Newsroom</span>
          <span>Apple Leadership</span>
          <span>Career Opportunities</span>
          <span>Investors</span>
          <span>Ethics & Compliance</span>
          <span>Events</span>
          <span>Contact Apple</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>More ways to shop: <span>Find an Apple Store</span> or <span>other retailer</span> near you. Or call <span>1-800-MY-APPLE</span>.</p>
        <p className="copy">© {year} Apple Inc. All rights reserved.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms of Use</span>
          <span>|</span>
          <span>Sales and Refunds</span>
          <span>|</span>
          <span>Legal</span>
          <span>|</span>
          <span>Site Map</span>
        </div>
        <div className="footer-locale">United States</div>
      </div>
    </footer>
  );
}

import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>Bon Appetit is your go-to online destination for gourmet meals delivered right to your doorstep. Our user-friendly platform offers a diverse menu featuring everything from classic comfort foods to innovative global dishes, all crafted with the freshest ingredients. With just a few clicks, you can customize and order delicious meals that bring the experience of fine dining straight to your home. Discover the convenience and joy of exceptional food with Bon Appetit—where every meal is a culinary adventure.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Bon Appetit</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@bonappetit.website.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
      Copyright {new Date().getFullYear()} © Bon Appetit | All rights reserved.
      </p>
    </div>
  )
}

export default Footer
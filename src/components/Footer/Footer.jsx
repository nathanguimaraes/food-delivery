import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" srcset="" />
                    <p>Lorem ipsum dolor sit amet. Qui fugit similique et dolores commodi aut molestias maxime eum amet Quis ut praesentium deserunt sit nemo porro et voluptas eius! Qui animi facilis aut vero vero ab quia asperiores est omnis adipisci qui sunt molestias aut galisum neque. Aut sunt magnam qui nostrum impedit vel assumenda alias qui voluptatem earum et veritatis quod qui nostrum ipsum.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" srcset="" />
                        <img src={assets.twitter_icon} alt="" srcset="" />
                        <img src={assets.linkedin_icon} alt="" srcset="" />
                    </div>
            </div>
            <div className="footer-content-center">
                <h2>EMPRESA</h2>
                <ul>
                    <li>Home</li>
                    <li>Sobre nós</li>
                    <li>Entregas</li>
                    <li>Politicas e Privaciade</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>Entre em Contato</h2>
                <ul>
                    <li>+55 45 40028922</li>
                    <li>contato@gmail.com</li>
                </ul>
            </div>    
        </div>
        <hr />
        <p className="footer-copyright"> Copyright 2024 © Parfum.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer

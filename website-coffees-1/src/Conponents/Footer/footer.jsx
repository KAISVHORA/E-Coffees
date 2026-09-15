import './footer.css' 
import { Link } from 'react-router-dom'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { GoMoveToTop } from "react-icons/go";


const footer = () => {
    return (
        <div className='container-full'>
            <footer className='Footer-bg'>
                    <div className="nav-logo-coffee">
                    <p>Coffees & Tea</p>
                </div>
                <h2>Get in Touch</h2>
                <p className='text-footer-p'>section for your coffee or tea brand, consider the following elements.</p>
                <address className='Footer-Address'>Address:-footer project website,
                    <a href='mailto:webmaster@example.com'> Map </a>
                    Coffees.com<br/>
                    Box 564, Gujarat Indian<br/>
                </address>
                    <nav className="nav-footer">
                    <ul className="nav-menus-footer">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Menus">Menus</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
            </footer>
            <div className='footer-copy'>
                 <p className='text-c-footer'>Copyrights &copy; 2025 Website-coffees and Tea</p>
                 <div className='icons-footer-c'>
                    <div className='icon-i'>
                        <TiSocialFacebook className='icon-a'/>
                    </div>
                      <div className='icon-i'>
                        <FaInstagram/>
                    </div>
                    <div className='icon-i'>
                         <FaXTwitter/>
                    </div>
                    <div className='icon-i'>
                         <IoLogoWhatsapp/>
                    </div>
                 </div>
            </div>

               {/* Scroll-top */}
                        <div className='Scroll-top'>
                            <GoMoveToTop />
                        </div>
                        {/* End-Scroll-top */}
        </div>
    )
}

export default footer
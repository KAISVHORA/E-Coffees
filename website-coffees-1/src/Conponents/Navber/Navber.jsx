import "./Navber.css"
import { Link } from "react-router-dom"
import { GiShoppingCart } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";

const Navber = () => {
    return (
        // Start-Navber
         <div className="container-full">
            <div className="Navber">
                <div className="nav-logo-coffee">
                    <p>Coffees & Tea</p>
                </div>
                <nav className="nav">
                    <ul className="nav-menus">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Menus">Menus</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="nav-login">
                    <div className="nav-carts">
                        <GiShoppingCart />
                               <div className="Menus-file-heart">
                        <h4>404</h4>
                    </div>
                        <div className="nav-cart-count">
                            0
                        </div>

                    </div>
                    <button className="button-primary">
                           <Link to="/Login">Login</Link>
                        </button>
                          <div className="menus-right">
                                 <IoMenuSharp />
                           </div>
                </div>
            </div>
        </div>
        // End-Navber
    )
}
export default Navber
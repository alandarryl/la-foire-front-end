
import "./navbar.css";

function Navbar(){


    return(
        <nav className="navbar" >
            <h1> <span>: )</span> La foire</h1>
            <div  className="nav-items active" >
                <ul className="nav-links" >
                    <li><a href="#" >Home</a></li>
                    <li><a href="#" >About</a></li>
                    <li><a href="#" >Products</a></li>
                    <li><a href="#" >Contact</a></li>
                </ul>
                <div className="log-connect" >
                    <button className="login" >Login</button>
                    <a className="signup" >Sign up</a>
                    <a className="user-image" >img<img /></a>
                </div>
            </div>
            <a className="menu-switch" >open</a>
        </nav>
    )
}


export default Navbar;


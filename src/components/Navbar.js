import logo from '../images/airbnb-logo.png';
function Navbar(){
    return(
        <nav>
            <img src={logo} className="nav-logo"></img>
        </nav>
    )
}

export default Navbar
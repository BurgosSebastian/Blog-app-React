import {Link} from "react-router-dom";

const Navbar = () => {


    return ( 
        <nav className="navbar">
            <h1>Burgos Blog</h1>
            <div className="links">
                <Link to="/build/">Inicio</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:"#0003c2",
                    borderRadius:"8px"
                }} >Nuevo Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
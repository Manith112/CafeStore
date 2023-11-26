import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <body>
        <div class="intro">
            <div class="first-column">
            <h1>Our Collection</h1>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <NavLink className={({ isActive }) =>
            isActive ? "active-text" : "non-active-text"
          } to={"/popular"}  >All Products</NavLink>
            <NavLink className={({ isActive }) =>
            isActive ? "active-text" : "non-active-text"
          } to={"/available"}>Available Now</NavLink>
        </div>
    </div>
    </body> 
    )
}
export default NavBar;
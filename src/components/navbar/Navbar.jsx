import React from "react";
import { Link,useLocation,useParams } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  const NavbarList=["Store","iPhone","Support"];
 const location =useLocation();
 console.log(location);
 
  return (
    <div className={styles.navbar}>
      <ul>
      
        <li>
          <Link to=""><img src="asset/logo.svg" alt="logo" /></Link>
        </li>
     {NavbarList.map((el,i)=>(
       <li key={i}>
         <Link className={styles.Link} to={`/${el.toLowerCase()}/`}>{el}</Link>
       </li>
     ))}
     <li>
     <span className={`material-icons ${styles.Link}`}>search</span>
       
       </li>
       <li>  <span className={`material-icons ${styles.Link}`}>
                        shopping_bag
                        </span></li>
      </ul>

    </div>
  );
};

export default Navbar;

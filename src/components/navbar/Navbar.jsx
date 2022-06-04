import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  const NavbarList=["Store","Mac","iPad","iPhone","Watch","AirPods","Only on Apple","Accessories","Support"];
 
  return (
    <div className={styles.navbar}>
      <ul>
      
        <li>
          <Link to=""><img src="asset/logo.svg" alt="logo" /></Link>
        </li>
     {NavbarList.map((el)=>(
       <li>
         <Link className={styles.Link} to={`/${el.toLowerCase()}`}>{el}</Link>
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

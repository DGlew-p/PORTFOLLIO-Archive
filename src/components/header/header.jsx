import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header (props){
  let activeStyle = {
    textDecoration: "underline"
  };

  let activeClassName = "underline"
return(
    <header>
        <nav>
      <ul>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
          >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Portfolio
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
      </header>

)
}

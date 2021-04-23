import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

interface Props {
  items: Array<{name: string, to: string}>
}


export function Navbar(props: Props) {
  return (
    <nav className="Navbar">
      {
        props.items.map((item) =>
          <NavLink className="Navbar-Link" activeClassName="_active" to={item.to}>{item.name}</NavLink>
        )
      }
    </nav>
  )
}
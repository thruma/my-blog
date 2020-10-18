import React from 'react';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
      <ul>
          <li>
              <Link to="/about">About</Link>
          </li>
          <li>
              <Link to="/articles-list">Articles</Link>
          </li>
      </ul>
  </nav>
)

export default NavBar;
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <nav>
        <div className='container'>
          <ul className='navbar'>
            <li>
              <Link to='/'>All Clothes</Link>
            </li>
            <li>
              <Link to='/favorited-clothes'>Favorited Clothes</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container">{children}</main>

      <footer></footer>
    </>
  );
};

export default Layout;

import React from 'react';

function Header() {
  return (
    <>
      
      <header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
    <a href="#hero" className="logo d-flex align-items-center">
      
      <h1 className="sitename">KA2 - IMPORT</h1> <span>.</span>
    </a>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero" className="active">Home</a></li>
        <li><a href="#get-started">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>
  </div>
</header>


    </>
  );
}

export default Header;

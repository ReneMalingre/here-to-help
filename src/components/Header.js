import React from 'react';
import '../index.css';
import NavElement from './navigation/NavElement';

function Header({ current, setCurrent }) {

  const handleClick = id => {
    setCurrent(id);
  };

  return (
    <div className="header">
      <NavElement
        id="about"
        title="About Me"
        link="/"
        current={current === 'about'}
        onClick={handleClick}
      />
      <NavElement
        id="portfolio"
        title="Portfolio"
        link="/"
        current={current === 'portfolio'}
        onClick={handleClick}
      />

      <NavElement
        id="contact"
        title="Contact"
        link="/"
        current={current === 'contact'}
        onClick={handleClick}
      />
      <NavElement
        id="resume"
        title="Resumé"
        link="/"
        current={current === 'resume'}
        onClick={handleClick}
      />
    </div>
  );
}

export default Header;

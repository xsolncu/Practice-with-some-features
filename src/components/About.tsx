import React, { useState } from 'react';
import './About.scss';
import cn from 'classnames';
import Menu from './Menu';

const menu = [
  {
    text: 'First menu',
    options: [
      {
        text: 'dfasdas'
      }
    ]
  }
];

const About = () => {
  return (
    <main>
      <div className="main-content">
        {menu.map((m) => (
          <Menu {...m} />
        ))}
      </div>
    </main>
  );
};

export default About;

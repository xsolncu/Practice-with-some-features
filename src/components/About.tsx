import React, { FC, useRef, useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import './About.scss';

interface IMenuProps {
  text: string;

  options: {
    text: string;
    onClick?: () => void;
  }[];
}

const Menu: FC<IMenuProps> = (props) => {
  const { text, options } = props;

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setIsOpen(false), 'mousedown');

  return (
    <div className="menu-wrapper" ref={ref}>
      <div className="menu-text" onClick={() => setIsOpen(!isOpen)}>
        {text}
      </div>
      {isOpen && (
        <div className="menu-panel">
          {options.map(({ text, onClick }) => (
            <div className="menu-panel-item" onClick={onClick} key={text}>
              {text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const menu = [
  {
    text: `Fist Menu`,
    options: [
      {
        text: 'first'
      },
      {
        text: 'second'
      },
      {
        text: 'third'
      }
    ]
  },
  {
    text: `Fist asdasdas`,
    options: [
      {
        text: 'asdasdasdasd1111111111111 1111111111111111111111111'
      },
      {
        text: 'second'
      },
      {
        text: 'third'
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

import React, { FC, useRef, useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import './Menu.scss';

interface IMenu {
  text: string;
  options: {
    text: string;
  }[];
}

const Menu: FC<IMenu> = (props) => {
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
        <div className="menu-panel1">
          {options.map(({ text }) => (
            <div className="menu-panel1-item" key={text}>
              {text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Menu;

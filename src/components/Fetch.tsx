import React, { useEffect, useRef, useState } from 'react';
import './Fetch.scss';

interface ISizes {
  width: number;
  height: number;
}

const Fetch = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSize, setIsSize] = useState<ISizes>({} as ISizes);
  // При первом рендере ref не прикреплен к div, а во втором да. Нужна проверка if
  useEffect(() => {
    if (ref.current) {
      setIsSize(ref.current.getBoundingClientRect());
    }
  }, [ref.current]);

  return (
    <div ref={ref} className="solo">
      <div className="yolo">
        {isSize.width},{isSize?.height}
      </div>
    </div>
  );
};

export default Fetch;

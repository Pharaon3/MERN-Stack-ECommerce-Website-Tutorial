import React, { useState, useEffect, useRef } from 'react';
export default function SideMenu() {
  const [isSideMenu, setSideMenu] = useState(false);
  const open = (isSideMenu) => {
    return setSideMenu(!isSideMenu);
  };
  const domeNode = useRef();
  const updateState = (event) => {
    if (domeNode.current.contains(event.target)) {
      return;
    }
    setSideMenu(false);
  };
  useEffect(() => {
    document.addEventListener('mousedown', updateState);
    return () => {
      document.removeEventListener('mousedown', updateState);
    };
  }, []);
  return (
    <>
      <header className='topBar'>
        <div className='menuBar'>
          <span
            ref={domeNode}
            className='navIcon'
            onClick={() => {
              open(isSideMenu);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              {isSideMenu ? (
                <path d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' />
              ) : (
                <path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' />
              )}
            </svg>
          </span>
        </div>
        <div className='sideMenu' style={{ left: isSideMenu ? '0' : '-265px' }}>
          <a href='#'>Menu 01</a>
          <a href='#'>Menu 02</a>
          <a href='#'>Menu 03</a>
          <a href='#'>Menu 04</a>
          <a href='#'>Menu 05</a>
          <a href='#'>Menu 06</a>
          <a href='#'>Menu 07</a>
          <a href='#'>Menu 08</a>
          <a href='#'>Menu 09</a>
        </div>
      </header>
    </>
  );
}

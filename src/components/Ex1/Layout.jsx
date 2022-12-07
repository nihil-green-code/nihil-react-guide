import React from 'react';

export default function Layout({ children, bgColor, color }) {
  /** @type {React.CSSProperties} */
  const style = {
    backgroundColor: bgColor,
    color,
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 900,
  };

  return (
    <>
      <div style={style}>{children}</div>
    </>
  );
}

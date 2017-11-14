import React from 'react';
import styles from '../styles/canvas.css';

export const Canvas = ({children}) => {
  return (
    <div data-test-id="canvas" className={styles.canvas}>
      <main>{children}</main>
    </div>
  );
};

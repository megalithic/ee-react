import React from 'react';
import styles from '../styles/ve-canvas.css';

export const Canvas = ({children, id}) => {
  return (
    <div id={id} className={styles.canvas}>
      <main>{children}</main>
    </div>
  );
};

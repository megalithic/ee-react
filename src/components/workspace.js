import React from 'react';
import {Canvas} from './canvas.js';
import {PrimarySidebar} from './primary-sidebar.js';

import styles from '../styles/ve-editor.css';

export const Workspace = ({children}) => {
  return (
    <div id={styles.workspace}>
      <PrimarySidebar id={styles['primary-sidebar']} />
      <Canvas id={styles.canvas}>{children}</Canvas>
    </div>
  );
};

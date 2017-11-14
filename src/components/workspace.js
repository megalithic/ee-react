import React from 'react';
import {Canvas} from './canvas.js';
import {PrimarySidebar} from './primary-sidebar.js';

import styles from '../styles/workspace.css';

export const Workspace = ({children}) => {
  return (
    <div id="workspace" className={styles.workspace}>
      <PrimarySidebar />
      <Canvas>{children}</Canvas>
    </div>
  );
};

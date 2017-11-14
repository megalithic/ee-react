import React from 'react';
import styles from '../styles/primary-sidebar.css';
import {Button} from './button.js';

export const PrimarySidebar = ({children}) => {
  return (
    <div data-test-id="primary-sidebar" className={styles.sidebar}>
      <main>
        <div className={styles.buttons}>
          <Button id="select" icon="select" label="Select" skin="sidebar" />
          <Button id="type" icon="type" label="Type" skin="sidebar" />
          <Button
            id="background"
            icon="background"
            label="Background"
            skin="sidebar"
          />
          <Button id="pen" icon="pen" label="Pen" skin="sidebar" />
          <Button
            id="elements"
            icon="elements"
            label="Elements"
            skin="sidebar"
          />
          <Button
            id="templates"
            icon="templates"
            label="Templates"
            skin="sidebar"
          />
          <Button id="help-button" icon="help" label="Help" skin="sidebar" />
        </div>
      </main>
    </div>
  );
};

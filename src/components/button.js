import cc from 'classcat';
import React from 'react';
import icons from '../images/icons.svg';

export const Button = ({label, children, icon, id, className, skin}) => {
  const styles = require(`../styles/ee-button@${skin}.css`);
  const classNames = cc([styles.button, styles[`${className}`]]);

  return (
    <div id={id} className={classNames}>
      <main>
        <div id={styles.background} />
        <svg id={styles.icon} preserveAspectRatio="none" viewBox="0 0 100 100">
          <use
            id="icon-use"
            href={`${icons}#${icon}`}
            x="0"
            y="0"
            width="100%"
            height="100%"
          />
        </svg>

        <label id={styles.label}>{label}</label>
      </main>
    </div>
  );
};

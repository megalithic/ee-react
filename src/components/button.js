import cc from 'classcat';
import React from 'react';
import PropTypes from 'prop-types';
import icons from '../images/icons.svg';

export const Button = ({
  children,
  className,
  icon,
  id,
  label,
  moduleClassName,
  onClick,
  pressed,
  skin,
}) => {
  const styles = require(`../styles/ee-button@${skin}.css`);
  const classNames = cc([
    'btn',
    styles.button,
    styles[`${moduleClassName}`],
    className,
  ]);

  const handleOnClick = () => {
    onClick({
      container: '',
      el: 'button',
      id,
      state: {
        action: 'pressed',
        value: !pressed,
      },
    });
  };

  return (
    <div
      id={id}
      className={classNames}
      icon={icon || undefined}
      onClick={handleOnClick}
      pressed={pressed}
    >
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

        <label className={styles.label}>{label}</label>
      </main>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  moduleClassName: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  skin: PropTypes.string.isRequired,
};

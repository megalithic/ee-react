import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import styles from '../styles/App.css';
import '../styles/html.css';
import {Menubar} from '../components/menubar.js';
import {Workspace} from '../components/workspace.js';

class App extends Component {
  static propTypes = {
    artworkId: PropTypes.string,
  };

  render() {
    const {artworkId} = this.props;

    return (
      <div
        data-random="true"
        resourceid=""
        id="editor"
        artworkid={artworkId}
        enabled="true"
        tabindex="1"
        className={styles.wrapper}
      >
        <Menubar>
          <header className={styles.header}>
            <img src={logo} className={styles.logo} alt="logo" />
            <h1 className={styles.title}>Welcome to React</h1>
          </header>
        </Menubar>
        <Workspace>
          <p className={styles.intro}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Workspace>
      </div>
    );
  }
}

export default App;

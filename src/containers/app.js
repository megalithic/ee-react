import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import {Menubar} from '../components/menubar.js';
import {Workspace} from '../components/workspace.js';

import '../styles/html.css';
import styles from '../styles/ve-editor.css';

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
        id={styles.editor}
        artworkid={artworkId}
        enabled="true"
        tabIndex="1"
      >
        <main>
          <Menubar />
          <Workspace>
            <p className={styles.intro}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Workspace>
        </main>
      </div>
    );
  }
}

export default App;

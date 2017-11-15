import BaseContainer from './base-container';
import {Menubar} from '../components/menubar.js';
import PropTypes from 'prop-types';
import React from 'react';
import {Workspace} from '../components/workspace.js';

import '../styles/base.css';
import styles from '../styles/app.css';

class App extends BaseContainer {
  static propTypes = {
    artworkId: PropTypes.string,
  };

  render() {
    const {artworkId} = this.props;

    return (
      <div
        data-random="true"
        id="editor"
        resourceid=""
        className={styles.editor}
        artworkid={artworkId}
        enabled="true"
        tabIndex="1"
      >
        <main>
          <Menubar />
          <Workspace>
            <p> Editor things. This space to be replaced soon'ish. </p>
          </Workspace>
        </main>
      </div>
    );
  }
}

export default App;

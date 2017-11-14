import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Menubar} from '../components/menubar.js';
import {Workspace} from '../components/workspace.js';

import '../styles/base.css';
import styles from '../styles/app.css';

class App extends Component {
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
            <p> Editor things. </p>
          </Workspace>
        </main>
      </div>
    );
  }
}

export default App;

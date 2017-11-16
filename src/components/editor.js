import BaseComponent from './base-component';
import {Menubar} from '../components/menubar.js';
import PropTypes from 'prop-types';
import React from 'react';
import {Workspace} from '../components/workspace.js';

import '../styles/base.css';
import styles from '../styles/app.css';

class Editor extends BaseComponent {
  static propTypes = {
    artworkId: PropTypes.string,
  };

  componentWillReceiveProps(nextProps) {
    console.log({nextProps});
    console.log({currentProps: this.props});
  }

  handleOnUpdateUi = data => {
    if (typeof data !== 'undefined') this.props.updateUi(data);
  };

  render() {
    return (
      <div
        data-random="true"
        id="editor"
        resourceid=""
        className={styles.editor}
        artworkid={''}
        enabled="true"
        tabIndex="1"
      >
        <main>
          <Menubar />
          <Workspace>
            <p>Editor things. This space to be replaced soon'ish.</p>
          </Workspace>
        </main>
      </div>
    );
  }
}

export default Editor;

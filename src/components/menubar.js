import React from 'react';
import {Button} from './button';
import styles from '../styles/menubar.css';
import logo from '../images/logo-vecteezy.svg';

export const Menubar = ({children}) => {
  return (
    <header className={styles.menubar} id="menubar">
      <main>
        <div data-test-id="overlay" className={styles.overlay} hidden />

        <a data-test-id="logo" className={styles.logo} href="/">
          <img alt="Free Vector Art at Vecteezy" src={logo} title="Vecteezy" />
        </a>

        <nav className={styles.primary}>
          <Button
            id="file-button"
            label="File"
            skin="flat"
            href="#file-menu"
            icon="arrow-down"
          />
          <Button
            id="edit-button"
            label="Edit"
            skin="flat"
            href="#edit-menu"
            icon="arrow-down"
          />
          <Button
            id="admin-button"
            label="Admin"
            skin="flat"
            href="#admin-menu"
            icon="arrow-down"
          />
          <Button id="undo-button" label="Undo" skin="flat" commandid="undo" />
          <Button id="redo-button" label="Redo" skin="flat" commandid="redo" />
          <Button
            id="duplicate-button"
            label="Duplicate"
            skin="flat"
            commandid="duplicate"
          />
        </nav>

        <nav className={styles.secondary}>
          <Button
            className="download__button"
            id="download-button"
            label="Download"
            skin="raised"
          />
          <Button
            className="exit__button"
            id="exit-button"
            label="Exit Editor"
            skin="flat"
            icon="arrow-right"
            commandid="preExit"
          />
        </nav>

        <div id={styles.menus}>
          <ee-menu id="file-menu">
            <ee-menuitem
              label="Import SVG"
              commandid="importSVG"
              id="import-svg-menu-item"
            />
            <ee-menuitem
              label="Import Photo"
              commandid="importPhoto"
              id="import-photo-menu-item"
            />
            <ee-menuitem
              label="Save for Later"
              shortcut="Control+S"
              commandid="saveForLater"
            />
            <ee-menuitem
              label="Exit"
              shortcut="Control+E"
              commandid="preExit"
            />
            <hr />
            <ee-menuitem label="Clear" commandid="clear" shortcut="Control+O" />
            <hr />
            <ee-menuitem
              id="download-svg-menu-item"
              label="Download SVG"
              commandid="downloadSVG"
            />
            <ee-menuitem label="Download PNG" commandid="downloadPNG" />
          </ee-menu>

          <ee-menu id="edit-menu">
            <ee-menuitem label="Group" commandid="group" shortcut="Control+G" />
            <ee-menuitem
              label="Ungroup"
              commandid="ungroup"
              shortcut="Control+Shift+G"
            />
            <hr />
            <ee-menuitem label="Select All" commandid="selectAll" />
            <ee-menuitem
              label="Select Same Fill Color"
              commandid="selectSameFillColor"
            />
            <ee-menuitem
              label="Select Same Stroke Color"
              commandid="selectSameStorkeColor"
            />
            <ee-menuitem
              label="Select Same Stroke Width"
              commandid="selectSameStorkeWidth"
            />
            <ee-menuitem
              label="Select Same Opacity"
              commandid="selectSameOpacity"
            />
            <hr />
            <ee-menuitem
              label="Convert Selected Text to Outlines"
              commandid="convertTextToOutlines"
            />
          </ee-menu>

          <ee-menu id="admin-menu">
            <ee-menuitem
              label="Save as Resource SVG"
              commandid="saveAsResourceSvg"
            />
            <ee-menuitem
              label="Save Test Resource Thumbnail"
              commandid="saveAsResourceThumbnail"
            />
            <hr />
            <ee-menuitem label="Export to Site" commandid="exportToSite" />
            <ee-menuitem
              label="Add Illustration(s)"
              commandid="addIllustrations"
            />
            <ee-menuitem label="Add Shape(s)" commandid="addShapes" />
            <ee-menuitem label="Add Template" commandid="addTemplate" />
          </ee-menu>
        </div>

        <ee-downloadpopup id={styles['download-popup']} />
      </main>
    </header>
  );
};

/* eslint-disable no-param-reassign */
const DrawerInitiator = {
  async init({ button, drawer, content }) {
    this._accessibilityTools = (await import('./accessibility-tools')).default;
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      this._updateButtonState(button, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      this._updateButtonState(button, drawer);
    });

    this._configureTabIndex();
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _updateButtonState(button, drawer) {
    if (drawer.classList.contains('open')) {
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>';
      button.classList.add('open');
      this._accessibilityTools.addAriaLabel(button, 'close menu bar');
      this._addNavButtonsTabIndex();
    } else {
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
      button.classList.remove('open');
      this._accessibilityTools.addAriaLabel(button, 'open menu bar');
      this._removeNavButtonsTabIndex();
    }
  },

  _configureTabIndex() {
    if (screen.width < 768) {
      this._removeNavButtonsTabIndex();
    }
  },

  _addNavButtonsTabIndex() {
    const nav = document.querySelector('nav');
    const navButtons = nav.querySelectorAll('a');
    navButtons.forEach((button) => {
      this._accessibilityTools.addTabIndex(button);
    });
  },

  _removeNavButtonsTabIndex() {
    const nav = document.querySelector('nav');
    const navButtons = nav.querySelectorAll('a');
    navButtons.forEach((button) => {
      this._accessibilityTools.removeTabIndex(button);
    });
  },
};

export default DrawerInitiator;

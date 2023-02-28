/* eslint-disable no-param-reassign */
const AccessibilityTools = {
  addTabIndexToHeaders() {
    const headers = document.querySelectorAll('h2');
    headers.forEach((header) => {
      this.addTabIndex(header);
    });
  },

  addTabIndex(element) {
    element.tabIndex = 0;
  },

  removeTabIndex(element) {
    element.tabIndex = -1;
  },

  addAriaLabel(element, label) {
    element.ariaLabel = label;
  },
};

export default AccessibilityTools;

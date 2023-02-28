const LoaderTools = {
  init({ loader }) {
    this._loader = loader;
  },

  showLoader() {
    if (!this.loader) return;
    this._loader.classList.add('show');
  },

  hideLoader() {
    if (!this.loader) return;
    this._loader.classList.remove('show');
  },
};

export default LoaderTools;

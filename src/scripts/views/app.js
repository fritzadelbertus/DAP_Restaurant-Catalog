import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import AccessibilityTools from '../utils/accessibility-tools';
import DrawerInitiator from '../utils/drawer-initiator';
import FallbackTools from '../utils/fallback-tools';
import LoaderTools from '../utils/loader-tools';

class App {
  constructor({
    button, drawer, content, loader,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._loader = loader;
    this._previousPage = null;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    LoaderTools.init({ loader: this._loader });
    FallbackTools.init({ content: this._content });
  }

  async renderPage() {
    window.scrollTo(0, 0);
    if (this._previousPage !== null) this._previousPage.unmountPage();
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    AccessibilityTools.addTabIndexToHeaders();
    this._previousPage = page;
  }
}

export default App;

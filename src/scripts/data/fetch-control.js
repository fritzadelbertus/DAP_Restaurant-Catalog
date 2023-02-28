import FallbackTools from '../utils/fallback-tools';
import LoaderTools from '../utils/loader-tools';

const FetchControl = {
  async get(url) {
    LoaderTools.showLoader();
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      LoaderTools.hideLoader();
      return this._validateResponse(response) === null ? null : responseJson;
    } catch (error) {
      console.log(error);
      FallbackTools.renderNoConnection();
    }
    LoaderTools.hideLoader();
    return null;
  },

  async post(url, data) {
    LoaderTools.showLoader();
    const fetchData = {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-cache',
    };
    try {
      const response = await fetch(url, fetchData);
      const responseJson = await response.json();
      LoaderTools.hideLoader();
      return this._validateResponse(response) === null ? null : responseJson;
    } catch (error) {
      console.log(error);
      FallbackTools.renderNoConnection();
    }
    LoaderTools.hideLoader();
    return null;
  },

  _validateResponse(response) {
    if (response.ok) return response;
    if (response.status === 404) {
      FallbackTools.renderNotFound();
    }
    return null;
  },
};

export default FetchControl;

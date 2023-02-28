const FallbackTools = {
  init({ content }) {
    this._content = content;
  },

  renderNoConnection() {
    this._content.innerHTML = `
    <div class="fallback">
      <h2>OOPS! No Internet Connection</h2>
      <p>Unable to get resources</p>
      <a href="/">Back to Homepage</a>
    </div>
    `;
  },

  renderNotFound() {
    this._content.innerHTML = `
    <div class="fallback">
      <h2>OOPS! It seems we do not have that content</h2>
      <p>Please go back to homepage!</p>
      <a href="/">Back to Homepage</a>
    </div>
    `;
  },

  renderNoFavoriteFood() {
    this._content.innerHTML = `
    <div class="fallback no-favorite-restaurant">
      <h2>OOPS! It seems you have no favorite restaurant yet...</h2>
      <a href="/">Back to Homepage</a>
    </div>
    `;
  },
};

export default FallbackTools;

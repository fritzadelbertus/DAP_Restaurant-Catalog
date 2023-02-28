class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  async render() {
    const {
      id, name, description, pictureId, city, rating,
    } = this._restaurant;
    const baseUrl = (await import('../../globals/config')).default.BASE_IMAGE_URL;
    this.innerHTML = `
    <div class="poster">
      <p class="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> ${rating}</p>
      <img 
        src="${baseUrl}medium/${pictureId}" 
        class="lazyload"
        alt="${name}">
    </div>
    <div class="info">
      <h3><a href="/#/detail/${id}" 
        aria-label="
          ${name},
          lokasi: ${city},
          rating: ${rating}
        "
        >${name}</a></h3>
      <p class="location"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> ${city}</p>
      <p class="description" tabindex="0">${description}</p>
    </div>
    `;
  }
}

customElements.define('restaurant-card', RestaurantCard);

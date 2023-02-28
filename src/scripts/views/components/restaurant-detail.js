class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  async render() {
    const {
      name,
      description,
      city,
      address,
      pictureId,
      categories,
      menus,
      rating,
    } = this._restaurant;

    const categoriesName = categories.reduce((prev, curr) => `${prev}${curr.name}, `, '');

    await import('./restaurant-menu');
    const restaurantMenu = document.createElement('restaurant-menu');
    restaurantMenu.menus = menus;
    const baseUrl = (await import('../../globals/config')).default.BASE_IMAGE_URL;
    this.innerHTML = `
    <h2 class="restaurant__name">${name}</h2>
    <div class="info" tabindex="0"
      aria-label="
        ${name},
        rating: ${rating},
        location: ${city}, ${address}
      "
      >
      <p><span class="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> ${rating}</span> - <span class="categories">${categoriesName.slice(0, categoriesName.length - 2)}</span></p>
      <p class="location"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> ${address}, ${city}<p>
    </div>
    <div class="poster">
      <picture>
        <source media="(min-width:1200px)" srcset="${baseUrl}large/${pictureId}">
        <source media="(min-width:765px)" srcset="${baseUrl}medium/${pictureId}">
        <source media="(min-width:465px)" srcset="${baseUrl}small/${pictureId}">
        <img 
          src="${baseUrl}medium/${pictureId}" 
          alt="${name}">
      </picture> 
    </div>
    <p class="description" tabindex="0">${description}</p>
    `;

    this.appendChild(restaurantMenu);
  }
}

customElements.define('restaurant-detail', RestaurantDetail);

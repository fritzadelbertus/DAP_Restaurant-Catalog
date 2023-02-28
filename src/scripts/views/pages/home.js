const Home = {
  async render() {
    return `
      <div class="content home">
        <div class="hero">
          <picture>
            <source media="(min-width:765px)" type="image/webp" srcset="./images/hero_large.webp">
            <source media="(min-width:765px)" type="image/jpeg" srcset="./images/hero_large.jpg">
            <source type="image/webp" srcset="./images/hero_small.webp">
            <source type="image/png" srcset="./images/hero_small.png">
            <img src="./images/hero_small.png" alt="hero image">
          </picture>
        </div>
        <h2>Featured Restaurants</h2>
        <div id="featured-restaurants" class="featured-restaurants">
          <div class="slide-controls">
            <button id="restaurants__prev-btn" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>
            <button id="restaurants__next-btn" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
          </div>
          <div class="restaurants__slides"></div>
        </div>
        <h2>Explore Restaurants</h2>
        <div id="restaurants-catalogue" class="restaurants-catalogue"></div>
      </div>
    `;
  },

  async afterRender() {
    const RestaurantsDataSource = (await import('../../data/restaurants-datasource')).default;
    const restaurants = await RestaurantsDataSource.listOfRestaurants();
    if (restaurants === null) return;
    const restaurantsSlides = document.querySelector('.restaurants__slides');
    const randomIndex = Math.floor(Math.random() * (restaurants.length - 4));
    const featuredRestaurants = restaurants.slice(randomIndex, randomIndex + 4);

    const restaurantsCatalogueContainer = document.querySelector('#restaurants-catalogue');

    await import('../components/restaurant-card');
    featuredRestaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.restaurant = restaurant;
      restaurantsSlides.appendChild(restaurantCard);
    });

    restaurants.sort((a, b) => b.rating - a.rating);
    const restaurantItems = restaurants.slice(0, 20);
    await import('../components/restaurant-mini-card');
    restaurantItems.forEach((restaurant) => {
      const restaurantMiniCard = document.createElement('restaurant-mini-card');
      restaurantMiniCard.restaurant = restaurant;
      restaurantsCatalogueContainer.appendChild(restaurantMiniCard);
    });

    this._carousel = (await import('../../utils/carousel-initiator')).default;
    this._carousel.init({
      slide: restaurantsSlides,
      container: document.querySelector('#featured-restaurants'),
      selectSlides: () => document.querySelectorAll('restaurant-card'),
      prevButton: document.querySelector('#restaurants__prev-btn'),
      nextButton: document.querySelector('#restaurants__next-btn'),
    });
  },

  unmountPage() {
    this._carousel.stop();
  },
};

export default Home;

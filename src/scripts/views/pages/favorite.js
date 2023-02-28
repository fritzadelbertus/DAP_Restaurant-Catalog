const Favorite = {
  async render() {
    return `
      <div class="content home">
        <h2>Favorite Restaurants</h2>
        <div id="restaurants-catalogue" class="restaurants-catalogue"></div>
      </div>
    `;
  },

  async afterRender() {
    const FavoriteRestaurantIdb = (await import('../../data/favorite-restaurant-idb')).default;
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsCatalogueContainer = document.querySelector('#restaurants-catalogue');
    if (restaurants.length) {
      restaurants.sort((a, b) => b.rating - a.rating);
      await import('../components/restaurant-mini-card');
      restaurants.forEach((restaurant) => {
        const restaurantMiniCard = document.createElement('restaurant-mini-card');
        restaurantMiniCard.restaurant = restaurant;
        restaurantsCatalogueContainer.appendChild(restaurantMiniCard);
      });
    } else {
      const FallbackTools = (await import('../../utils/fallback-tools')).default;
      FallbackTools.renderNoFavoriteFood();
    }
  },

  unmountPage() {
  },
};

export default Favorite;

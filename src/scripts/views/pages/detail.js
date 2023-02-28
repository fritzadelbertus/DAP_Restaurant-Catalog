const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const UrlParser = (await import('../../routes/url-parser')).default;
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const RestaurantsDataSource = (await import('../../data/restaurants-datasource')).default;
    const restaurant = await RestaurantsDataSource.restaurantDetail(url.id);

    if (!restaurant) return;
    const restaurantContainer = document.querySelector('#restaurant');

    await import('../components/restaurant-detail');
    const restaurantDetail = document.createElement('restaurant-detail');
    restaurantDetail.restaurant = restaurant;

    await import('../components/restaurant-review');
    const restaurantReview = document.createElement('restaurant-review');
    restaurantReview.reviews = restaurant.customerReviews;
    restaurantDetail.appendChild(restaurantReview);
    restaurantContainer.appendChild(restaurantDetail);

    const restoData = {
      id: restaurant.id,
      name: restaurant.name,
      pictureId: restaurant.pictureId,
      city: restaurant.city,
      rating: restaurant.rating,
    };

    const FavoriteRestaurantIdb = (await import('../../data/favorite-restaurant-idb')).default;
    const LikeButtonInitiator = (await import('../../utils/like-button-initiator')).default;
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: restoData,
    });

    const ReviewBoxInitiator = (await import('../../utils/review-box-initiator')).default;
    ReviewBoxInitiator.init({
      reviewBoxContainer: restaurantDetail,
      restaurantId: restaurant.id,
    });
  },

  unmountPage() {
  },
};

export default Detail;

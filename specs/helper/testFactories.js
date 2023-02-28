import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import ReviewBoxInitiator from '../../src/scripts/utils/review-box-initiator';

const createRestaurantLikeButton = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

const createRestaurantReviewBox = async (restaurantId) => {
  await ReviewBoxInitiator.init({
    reviewBoxContainer: document.querySelector('#reviewBoxContainer'),
    restaurantId,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createRestaurantLikeButton, createRestaurantReviewBox };

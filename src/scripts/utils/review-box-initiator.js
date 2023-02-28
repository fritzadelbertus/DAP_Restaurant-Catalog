const ReviewBoxInitiator = {
  async init({ reviewBoxContainer, restaurantId }) {
    this._reviewBoxContainer = reviewBoxContainer;
    this._restaurantId = restaurantId;
    this._event_key = 'REVIEW-EVENT';
    this._REVIEW_EVENT = new Event(this._event_key);
    const RestaurantsDataSource = (await import('../data/restaurants-datasource')).default;
    const restaurant = await RestaurantsDataSource.restaurantDetail(this._restaurantId);
    if (restaurant === null) return;
    this._reviews = await restaurant.customerReviews;
    this._addFormListener();
    this._addReviewListener();
  },

  _addFormListener() {
    const submitForm = this._reviewBoxContainer.querySelector('form');
    submitForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._postReview();
    });
  },

  async _addReviewListener() {
    await import('../views/components/restaurant-review');
    this._reviewBoxContainer.addEventListener(this._event_key, () => {
      const restaurantReview = document.createElement('restaurant-review');
      restaurantReview.reviews = this._reviews;
      this._reviewBoxContainer.removeChild(this._reviewBoxContainer.lastChild);
      this._reviewBoxContainer.appendChild(restaurantReview);
      this._addFormListener();
    });
  },

  async _postReview() {
    const nameInput = document.querySelector('#input_reviewer__name').value;
    const reviewInput = document.querySelector('#input_reviewer__review').value;
    if (!nameInput.trim() || !reviewInput.trim()) {
      console.error('Invalid Inputs');
      return;
    }
    const postData = {
      id: this._restaurantId,
      name: nameInput,
      review: reviewInput,
    };

    const PostReview = (await import('../data/post-review')).default;
    const response = await PostReview.post(postData);
    if (response === null) return;
    this._reviews = await response.customerReviews;
    this._reviewBoxContainer.dispatchEvent(this._REVIEW_EVENT);
  },
};

export default ReviewBoxInitiator;

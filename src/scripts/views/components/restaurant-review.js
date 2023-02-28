class RestaurantReview extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    const reviewTemplate = (review) => `
        <div>
          <p class="name">${review.name}</p>
          <p class="date">${review.date}</p>
          <p class="review">${review.review}</p>
        </div>
      `;
    this.innerHTML = `
    <h3>Customer Reviews</h3>
    <form>
      <label id="reviewer__name">
        Name:
        <input id="input_reviewer__name" name="reviewer_name" type="text" maxlength="20" required>
      </label>
      <label id="reviewer__review">
        Review:
        <textarea id="input_reviewer__review" name="reviewer_review" required></textarea>
      </label>
      <button id="submitReviewButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/></svg> Add Review</button>
    </form>
    <div class="reviews">
      ${this._reviews.reduce((prev, curr) => `${prev}${reviewTemplate(curr)}`, '')}
    </div>
    `;
  }
}

customElements.define('restaurant-review', RestaurantReview);

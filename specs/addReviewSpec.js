import * as TestFactories from './helper/testFactories';
import '../src/scripts/views/components/restaurant-review';

describe('Adding Restaurant Review', () => {
  const restaurantId = 'rqdv5juczeskfw1e867';
  const customerReviews = [
    {
      name: 'Ahmad',
      review: 'Tidak rekomendasi untuk pelajar!',
      date: '13 November 2019',
    },
  ];
  const addReviewBoxContainer = () => {
    document.body.innerHTML = '</div><div id="reviewBoxContainer"></div>';
    const restaurantReviewContainer = document.querySelector('#reviewBoxContainer');
    const restaurantReview = document.createElement('restaurant-review');
    restaurantReview.reviews = customerReviews;
    restaurantReviewContainer.appendChild(restaurantReview);
  };

  beforeEach(() => {
    addReviewBoxContainer();
  });

  it('should not submit review with invalid informations', async () => {
    spyOn(console, 'error');
    await TestFactories.createRestaurantReviewBox(restaurantId);
    document.querySelector('#input_reviewer__name').value = '   ';
    document.querySelector('#input_reviewer__review').value = '    ';
    document.querySelector('form').dispatchEvent(new Event('submit'));
    expect(console.error).toHaveBeenCalled();
  });
});

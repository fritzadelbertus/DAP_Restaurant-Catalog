const assert = require('assert');

Feature('Adding Restaurant Review');

Before(({ I }) => {
  I.amOnPage('/#/home');
  I.wait(2);
});

Scenario('showing current restaurant review', async ({ I }) => {
  I.seeElement('.restaurant-mini-card__title a');

  const firstResto = locate('.restaurant-mini-card__title a').first();
  I.click(firstResto);

  I.wait(2);
  I.seeElement('restaurant-review');
});

Scenario('adding new restaurant review', async ({ I }) => {
  I.seeElement('.restaurant-mini-card__title a');

  const firstResto = locate('.restaurant-mini-card__title a').first();
  I.click(firstResto);

  I.wait(2);
  I.seeElement('restaurant-review');
  const reviewLength = (await I.grabHTMLFromAll('.reviews div')).length;

  I.fillField('reviewer_name', 'Fritz');
  I.fillField('reviewer_review', 'Makanannya Enak');
  I.click('#submitReviewButton');
  I.wait(2);

  const addedReviewLength = (await I.grabHTMLFromAll('.reviews div')).length;
  assert.strictEqual(reviewLength + 1, addedReviewLength);
});

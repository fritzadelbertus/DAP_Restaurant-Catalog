const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(2);
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('It seems you have no favorite restaurant yet...', '.no-favorite-restaurant h2');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('It seems you have no favorite restaurant yet...', '.no-favorite-restaurant h2');
  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.restaurant-mini-card__title a');

  const firstResto = locate('.restaurant-mini-card__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(2);
  I.seeElement('restaurant-mini-card');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-mini-card__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

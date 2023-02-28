class RestaurantMenu extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    const iterateMenus = (prev, curr) => `${prev}<p>${curr.name}</p>`;
    const { foods, drinks } = this._menus;
    this.innerHTML = `
    <div class="menu">
      <h3>Menu</h3>
      <div class="menu__content">
        <div style="margin-bottom: 10px">
          <h4 tabindex="0"
            aria-label="
            Makanan: 
            ${foods.reduce((prev, curr) => `${prev}${curr.name}, `, '')}"
          >Foods</h4>
          ${foods.reduce(iterateMenus, '')}
        </div>
        <div>
          <h4 tabindex="0"
            aria-label="
            Minuman: 
            ${drinks.reduce((prev, curr) => `${prev}${curr.name}, `, '')}"
          >Drinks</h4>
          ${drinks.reduce(iterateMenus, '')}
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('restaurant-menu', RestaurantMenu);

class LikeButton extends HTMLElement {
  connectedCallback() {
    this.id = 'likeButton';
    this.classList.add('touchable');
  }
}

customElements.define('like-button', LikeButton);

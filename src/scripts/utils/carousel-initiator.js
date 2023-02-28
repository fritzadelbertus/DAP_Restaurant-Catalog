const Carousel = {
  init({
    slide,
    container,
    selectSlides,
    prevButton,
    nextButton,
  }) {
    this._index = 1;
    this._interval = 10000;
    this._slide = slide;
    this._slides = selectSlides();
    this._slideWidth = this._slides[this._index].clientWidth;
    this._slideId = null;

    this._addClones();
    // Reselect Slides
    this._slides = selectSlides();

    this._slide.style.transform = `translateX(${-this._slideWidth * this._index}px)`;

    // Listeners
    prevButton.addEventListener('click', () => { this._moveToPrevSlide(); });
    nextButton.addEventListener('click', () => { this._moveToNextSlide(); });
    slide.addEventListener('transitionend', () => { this._endTransitionHandler(); });
    container.addEventListener('mouseenter', () => { this.stop(); });
    container.addEventListener('mouseleave', () => { this._startSlide(); });

    this._startSlide();
  },

  _addClones() {
    this._firstClone = this._slides[0].cloneNode(true);
    this._lastClone = this._slides[this._slides.length - 1].cloneNode(true);
    this._firstClone.id = 'first-clone';
    this._lastClone.id = 'last-clone';

    this._slide.append(this._firstClone);
    this._slide.prepend(this._lastClone);
  },

  _startSlide() {
    this._slideId = setInterval(() => {
      this._moveToNextSlide();
    }, this._interval);
  },

  _endTransitionHandler() {
    if (this._slides[this._index].id === this._firstClone.id) {
      this._moveToBeginning();
      return;
    }
    if (this._slides[this._index].id === this._lastClone.id) {
      this._moveToEnd();
    }
  },

  _moveToNextSlide() {
    if (this._index >= this._slides.length - 1) return;
    this._index += 1;
    this._slide.style.transition = '1s';
    this._move();
  },

  _moveToPrevSlide() {
    if (this._index <= 0) return;
    this._index -= 1;
    this._slide.style.transition = '1s';
    this._move();
  },

  _moveToBeginning() {
    this._index = 1;
    this._slide.style.transition = 'none';
    this._move();
  },

  _moveToEnd() {
    this._index = this._slides.length - 2;
    this._slide.style.transition = 'none';
    this._move();
  },

  _move() {
    this._slide.style.transform = `translateX(${-this._slideWidth * this._index}px)`;
  },

  stop() {
    clearInterval(this._slideId);
  },
};

export default Carousel;

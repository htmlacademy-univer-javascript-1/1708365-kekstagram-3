const effects = document.querySelector('.effects__list');
const picturePrev = document.querySelector('.img-upload__preview');

effects.addEventListener('change', (evt) => {
  for (const className of picturePrev.classList) {
    if (className.startsWith('effects__preview--')) {
      picturePrev.classList.remove(className);
    }
  }
  picturePrev.classList.add(`effects__preview--${evt.target.value}`);
});

//начальная позиция слайдера. Это значение будет переопределятся, когда будем скроллить слайдер
let position = 0;
//переменная показывает сколько элементов показывать
const slidesToShow = 3;
//переменная показывает сколько элементов скроллить
const slidesToScroll = 3;
const container = document.querySelector('.viewer-reviews-slider__container');
const track = container.querySelector('.viewer-reviews-slider__track');
const btnPrev = document.querySelector('.viewer-reviews-slider__arrow-button_prev');
const btnNext = document.querySelector('.viewer-reviews-slider__arrow-button_next');
// узнаем суммарное количество элементов
const items = container.querySelectorAll('.viewer-reviews-slider__item');
const itemsCount = items.length;
// узнаем ширину каждого элемента
const itemWidth = container.clientWidth / slidesToShow;
// значение на сколько мы хотим проскроллить
const movePosition = slidesToScroll * itemWidth;

//проставляем полученную ширину каждого элемента всем элементам
items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

//функция для кнопки Next
btnNext.addEventListener('click', () => {
  /* берем текущую позицию - и если это значение отрицательное, мы получаем абсолютное значение.
  К этой позиции добавляем количество отображаемых элементов умноженных на ширину слайда.
  Потом полученное значение необходимо поделить на ширину элентов.
  И потом от суммы всех элементов нужно будет отнять полученное значение.
  Это делается потому что когда мы загружаем наш слайдер позиция равна 0.
  Когда мы "просллайдили" какое-то количество - мы получаем какое-то значение, но дело в том,
  что нам нужно компенсировать наш начальный 0. Начальный 0 мы компенсируем количеством слайдов,
  которые отображаются, умноженных на их ширину. Далее, когда мы делим это значение, мы понимаем то,
  сколько слайдов  мы уже просроллили. Потом от суммы всех слайдов мы отнимаем это значение и получаем то
  количество слайдов, которое у нас осталось.*/
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  /*если количество оставшихся элементов больше или равно количеству элементов на сколько нам нужно проскроллить,
  то тогда мы смещаем на нашу обычную дистанцию. В противном случае мы берем количество элементов,
  которое у нас осталось и умножаем на ширину элемента.*/
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});


//функция для кнопки Prev
btnPrev.addEventListener('click', () => {
  // здесь достаточно взять абсолютное значение и поделить его на ширину элемента
  const itemsLeft = Math.abs(position) / itemWidth;
  // то же условие, что и для Next
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

/* Универсальная функция. track должен смещаться. Смещаться он будет посредством css-свойства transform: translateX.
X-потому что будет двигаться по оси X. Указать необходимо в px, поэтому применим шаблонные строки.*/
const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

// Функция проверки активности кнопок
const checkBtns = () => {
  // опишем условия для кнопки prev. Она не активна, когда позиция = 0.
  btnPrev.disabled = position === 0;

  /* опишем условия для кнопки next. Нам нужно понять, что мы проскроллили до конца - до последнего слайда
  и только тогда нам нужно ее заблокировать.*/
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

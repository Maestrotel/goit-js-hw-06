//* Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color 
//* начение цвета в span.color.

//* <div class="widget">
//*   <p>Background color: <span class="color">-</span></p>
//*   <button type="button" class="change-color">Change color</button>
//* </div>

//* Для генерации случайного цвета используй функцию getRandomHexColor.

//* function getRandomHexColor() {
//*   return `#${Math.floor(Math.random() * 16777215)
//*     .toString(16)
//*     .padStart(6, 0)}`;
//* }


const bodyColor = document.querySelector('body');

const btnColor = document.querySelector('.change-color');

const valColor = document.querySelector('.color');

btnColor.addEventListener('click', e => { 
  bodyColor.style.backgroundColor = getRandomHexColor();
  valColor.textContent = bodyColor.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

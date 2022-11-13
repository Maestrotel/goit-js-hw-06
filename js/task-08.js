//* Напиши скрипт управления формой логина.

//* <form class="login-form">
//*   <label>
//*     Email
//*     <input type="email" name="email" />
//*   </label>
//*   <label>
//*     Password
//*     <input type="password" name="password" />
//*   </label>
//*   <button type="submit">Login</button>
//* </form>

//* Обработка отправки формы form.login-form должна быть по событию submit.
//* При отправке формы страница не должна перезагружаться.
//* Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
//* Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
//* Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const resultObject = {};

  const data = new FormData(e.target);
for (let i = 0; i < e.target.elements.length; i++) {
    const element = e.target.elements[i];
    if (element.name && data.has(element.name)) {
      if (element.value === '') {
        alert('All fields must be filled up');
        return;
      }
      resultObject[element.name] = data.get(element.name);
    }
  }
  console.log(resultObject);
  e.target.reset();
});




const categoriesSum = document.querySelector('#categories')

function summaryItems() {
  const list = categoriesSum.querySelectorAll('.item')
  console.log('Number of categories:',list.length);

  list.forEach(el => {
    console.log('Category:',el.firstElementChild.textContent);
    console.log('Elements:',
      el.querySelectorAll('li').length,
    );
  });
}

summaryItems();

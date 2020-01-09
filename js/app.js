document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const submitForm = document.querySelector('#new-item-form');
  submitForm.addEventListener('submit', handleSubmitForm);

  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('click', handleDeleteButton);
});


const handleSubmitForm = function (event) {
  event.preventDefault();
  console.log(event);
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const readingList = document.querySelector('#reading-list');

  const liTitle = document.createElement('li');
  liTitle.textContent = `Title: ${title}`;
  liTitle.classList.add("readingItemDetails");

  const liAuthor = document.createElement('li');
  liAuthor.textContent = `Author: ${author}`;
  liAuthor.classList.add("readingItemDetails");

  const liCategory = document.createElement('li');
  liCategory.textContent = `Category: ${category}`;
  liCategory.classList.add("readingItemDetails");

  const liReadingItems = document.createElement('li');
  liReadingItems.classList.add("readingItem");

  liReadingItems.appendChild(liTitle);
  liReadingItems.appendChild(liAuthor);
  liReadingItems.appendChild(liCategory);

  readingList.appendChild(liReadingItems);

  const submitForm = document.querySelector('#new-item-form');
  submitForm.reset();
}

const handleDeleteButton = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}

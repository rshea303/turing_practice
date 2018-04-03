let createButton = document.querySelector('#my-button');
let list = document.querySelector('#my-list');
let titleField = document.querySelector('#title');
let urlField = document.querySelector('#url');

createButton.addEventListener('click', function() {
  let newDiv = document.createElement("DIV");
  newDiv.className = 'card';
  let newText = titleField.value;
  let newUrl = urlField.value;

  newDiv.innerHTML = `<a href="${newUrl}" target="_blank">${newText}</a>
                      <div><button id="readBtn">READ</button><button id="deleteBtn">DELETE</button></div>`;
  list.append(newDiv);
  clearInputs();
  createReadListener();
  createDeleteListener();
});

const createReadListener = () => {
  let readBtn = document.querySelector('#readBtn');
  readBtn.addEventListener('click', function() {
    if (this.className.split(' ').indexOf('read') !== -1) {
      this.classList.remove('read');
    } else if (this.className.split(' ').indexOf('read') === -1) {
      this.classList.add('read');
    }
  });
}

const createDeleteListener = () => {
  let deleteBtn = document.querySelector('#deleteBtn');
  deleteBtn.addEventListener('click', function() {
    this.parentElement.parentElement.remove();
  });
};

const clearInputs = () => {
  titleField.value = '';
  urlField.value = '';
};
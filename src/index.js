const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      console.log(input.value);
  
      fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => {
        console.log(data);
    // LOG: (3) [{…}, {…}, {…}]
    const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');

      title.innerText = data.title;
      summary.innerText = data.summary;
      event.target
// => <form>..</form>
// Make a list
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);
      });
    });
  }
document.addEventListener('DOMContentLoaded', init);
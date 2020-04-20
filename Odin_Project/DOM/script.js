const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const parag1 = document.createElement('p');
parag1.textContent = 'Hey I\'m red!';

const header3 = document.createElement('h3');
header3.textContent = "I\'m a blue h3!";


const header1 = document.createElement('h1');
header1.textContent = "I\'m a div";

const parag2 = document.createElement('p');
parag2.textContent = 'ME TOO!';

const newDiv = document.createElement('div');
newDiv.style.border = "black";
newDiv.style.borderStyle = 'solid';
newDiv.style.borderWidth = "thick";
newDiv.style.backgroundColor = "pink";
newDiv.appendChild(header1);
newDiv.appendChild(parag2);

container.appendChild(parag1);
container.appendChild(header3);
container.appendChild(newDiv);

btn.addEventListener('click', function(e) {
    console.log(e);
    e.target.style.background = 'blue';
});
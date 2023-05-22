const button = document.querySelector('.button');

button.addEventListener('click', function(e) {
    console.log(e.target.textContent);
});
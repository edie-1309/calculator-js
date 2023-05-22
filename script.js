let display = document.querySelector('.display');
let button = document.querySelectorAll('button');

button.forEach(function(button) {
    button.addEventListener('click', function(e) {
        switch(e.target.textContent) {
            case 'AC':
                display.innerText = '';
                break;
            default: 
                display.innerText += e.target.textContent;
        }
    });
});
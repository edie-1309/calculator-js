let display = document.querySelector('.display');
let button = document.querySelectorAll('button');

button.forEach(function(button) {
    button.addEventListener('click', function(e) {
        switch(e.target.textContent) {
            case 'AC':
                display.innerText = '';
                break;
            case 'Del':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Error!';
                }
                break;
            default: 
                display.innerText += e.target.textContent;
        }
    });
});

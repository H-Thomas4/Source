document.addEventListener("DOMContentLoaded", function() {

    let container = document.createElement('div');
    container.className = 'header-container';

    let h1 = document.createElement('h1');
    let text = document.createTextNode('this is an h1.');
    h1.appendChild(text);
    document.body.appendChild(h1);
    h1.className = 'h1';
    
    let h2 = document.createElement('h2');
    let text2 = document.createTextNode('this is an h2.');
    h2.appendChild(text2);
    document.body.appendChild(h2);
    h2.className = 'h2';
    
    let h3 = document.createElement('h3');
    let text3 = document.createTextNode('this is an h3.');
    h3.appendChild(text3);
    document.body.appendChild(h3);
    h3.className = 'h3';
    
    let h4 = document.createElement('h4');
    let text4 = document.createTextNode('this is an h4.');
    h4.appendChild(text4);
    document.body.appendChild(h4);
    h4.className = 'h4';
    
    let h5 = document.createElement('h5');
    let text5 = document.createTextNode('this is an h5.');
    h5.appendChild(text5);
    document.body.appendChild(h5);
    h5.className = 'h5';
    
    let h6 = document.createElement('h6');
    let text6 = document.createTextNode('this is an h6.');
    h6.appendChild(text6);
    document.body.appendChild(h6);
    h6.className = 'h6';

    let colors = ['pink', 'brown', 'orange', 'gray', 'marroon', 'blue', 'black', 'green'];
 
    function changeColor() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    }

    h1.addEventListener('click', function(){
        let randomColor = changeColor();
        h1.style.color = randomColor;
    });

    h2.addEventListener('click', function(){
        let randomColor = changeColor();
        h2.style.color = randomColor;
    });

    h3.addEventListener('click', function(){
        let randomColor = changeColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener('click', function(){
        let randomColor = changeColor();
        h4.style.color = randomColor;
    });

    h5.addEventListener('click', function(){
        let randomColor = changeColor();
        h5.style.color = randomColor;
    });

    h6.addEventListener('click', function(){
        let randomColor = changeColor();
        h6.style.color = randomColor;
    });

    
})

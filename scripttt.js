function changeColor() {
    const box = document.getElementById('box');
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink'];
    const currentColor = box.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    box.style.backgroundColor = newColor;
}

function changeTextColor() {
    const paragraph = document.querySelector('.styled-text');
    paragraph.style.color = paragraph.style.color === 'black' ? 'red' : 'black';
}

function increaseFontSize() {
    const paragraph = document.querySelector('.paragraph');
    paragraph.style.fontSize = '24px';
}

function resetFontSize() {
    const paragraph = document.querySelector('.paragraph');
    paragraph.style.fontSize = '16px';
}

function changeBackgroundColor(element) {
    element.style.backgroundColor = element.style.backgroundColor === 'lightgrey' ? 'yellow' : 'lightgrey';
}

function changeTextDecoration() {
    const header = document.querySelector('.header');
    header.style.textDecoration = header.style.textDecoration === 'none' ? 'underline' : 'none';
}
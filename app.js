const btn = document.querySelector('#click_me');
const h3 = document.querySelector('h3');
btn.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;
    document.querySelector('h3').innerText = `COLOR_CODE: ${newColor}`;
})



'use strict';

let slider = document.querySelector('#slider');

const img = [
    'img1.jpg',
    'img2.jpg',
    'img3.png',
    'img4.jpg',
];

let count = img.length;
let sortImage;

function createImg() {
    // Сортировка массива
    const sortImg = () => sortImage = img.sort(() => Math.random() - 0.5);

    sortImg();

    img.map(item => {
        // Создаем картинки
        let images = document.createElement('div');
        images.style.background = `url(images/${item})`;

        // Добавляем картинки в блок слайдер
        slider.appendChild(images);

        // Создаем случайные градусы
        let randomDeg = Math.round(Math.random() * 25);
        images.style.transform = `rotate(${randomDeg}deg)`;

        // Добавляем класс 
        images.addEventListener('click', event => {
            event.target.classList.add('del-image');
            count--;
            if (count === 0) {
                createImg();
                count = img.length;
            }
        });
    });
};

createImg();
let cricketers = [
    {
        img: 'images/sachin.jpg',
        firstName: 'Sachin',
        lastName: 'Tendulkar',
        age: 49,
        country: 'India'
    },
    {
        img: 'images/ponting.png',
        firstName: 'Ricky',
        lastName: 'Ponting',
        age: 47,
        country: 'Australia'
    },
    {
        img: 'images/cook.png',
        firstName: 'Alastair',
        lastName: 'Cook',
        age: 37,
        country: 'England'
    },
    {
        img: 'images/sangakkara.jpg',
        firstName: 'Kumar',
        lastName: 'Sangakkara',
        age: 44,
        country: 'Sri Lanka'
    },
    {
        img: 'images/kallis.jpg',
        firstName: 'Jacques',
        lastName: 'Kallis',
        age: 46,
        country: 'South Africa'
    },
    {
        img: 'images/afridi.jpg',
        firstName: 'Shahid',
        lastName: 'Afridi',
        age: 42,
        country: 'Pakistan'
    },
    {
        img: 'images/gayle.jpg',
        firstName: 'Chris',
        lastName: 'Gayle',
        age: 43,
        country: 'West Indies'
    }
];

let btn = document.querySelector('#btn');
let box = document.querySelector('.container');
let img = document.querySelector('#image');
let name = document.querySelector('#name');
let age = document.querySelector('#age');
let country = document.querySelector('#country');

btn.addEventListener('click', () => {
    box.style.display = 'block';
    let randomNumber = Math.floor(Math.random() * cricketers.length);
    img.src = cricketers[randomNumber].img;
    name.innerText = `Name: ${cricketers[randomNumber].firstName} ${cricketers[randomNumber].lastName}`;
    age.innerText = `Age: ${cricketers[randomNumber].age}`;
    country.innerText = `Country: ${cricketers[randomNumber].country}`;
})
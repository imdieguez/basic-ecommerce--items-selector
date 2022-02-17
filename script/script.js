//Get elements from the DOM
let pinkTennis = document.querySelector('#pink');
let darkTennis = document.querySelector('#dark');
let greenTennis = document.querySelector('#green');
let brownTennis = document.querySelector('#brown'); 
let tennisImg = document.querySelector('#tennis-img');
let price = document.querySelector('#price');

//Set the root prices
var precoPink = "R$ 244,90"
var precoDark = "R$ 299,90"
var precoGreen = "R$ 99,90"
var precoBrown = "R$ 499,90"


//Tennis display
darkTennis.addEventListener('click', function() {
    tennisImg.src='https://i.ibb.co/yX03pPp/dark.png';
    tennisImg.style.width = '100%'
    price.textContent = precoDark;
    darkTennis.style.border = '3px solid black';
    darkTennis.style.boxShadow = '3px 1px 8px grey';
    pinkTennis.style.border = 'none';
    greenTennis.style.border = 'none';
    brownTennis.style.border = 'none';
})

pinkTennis.addEventListener('click', function() {
    tennisImg.src='https://i.ibb.co/nmV3GXB/pink.png';
    tennisImg.style.width = '100%'
    price.textContent = precoPink;
    pinkTennis.style.border = '3px solid black';
    pinkTennis.style.boxShadow = '3px 1px 8px grey';
    greenTennis.style.border = 'none';
    brownTennis.style.border = 'none';
    darkTennis.style.border = 'none';
})

greenTennis.addEventListener('click', function() {
    tennisImg.src='https://i.ibb.co/TLCR8k5/green.png';
    tennisImg.style.width = '100%'
    price.textContent = precoGreen;
    greenTennis.style.border = '3px solid black';
    greenTennis.style.boxShadow = '3px 1px 8px grey';
    brownTennis.style.border = 'none';
    darkTennis.style.border = 'none';
    pinkTennis.style.border = 'none';
})

brownTennis.addEventListener('click', function() {
    tennisImg.src='https://i.ibb.co/wzMj8S6/brown.png';
    tennisImg.style.width = '100%'
    price.textContent = precoBrown;
    brownTennis.style.border = '3px solid black';
    brownTennis.style.boxShadow = '3px 1px 8px grey';
    pinkTennis.style.border = 'none';
    darkTennis.style.border = 'none';
    greenTennis.style.border = 'none';
})


/* IMAGES
pink: https://i.ibb.co/nmV3GXB/pink.png
green: https://i.ibb.co/TLCR8k5/green.png
brown: https://i.ibb.co/wzMj8S6/brown.png
dark: https://i.ibb.co/yX03pPp/dark.png
converse: https://i.ibb.co/8NmCPVq/converse-logo.png
 */
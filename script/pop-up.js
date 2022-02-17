//Get Elements from the DOM
let promoBtn = document.querySelector('#promo-btn');
let buyBtn = document.querySelector('#buy-btn');
let modalContainer = document.querySelector('.modal-container');
let newPrice = document.querySelector('#price')
let pink = document.querySelector('#pink')
let dark = document.querySelector('#dark')
let green = document.querySelector('#green')
let brown = document.querySelector('#brown')

//Make the message 'escolha uma das cores acima' happen and move on with the code.
let i = true;

//Create Button at Modal div
let modal = document.querySelector('.modal');
let winBtn = document.createElement('button');
winBtn.id = 'win-btn';

//Pink New Prices
let pink20 = 'Novo preço: R$ ' + (Math.floor((244.90 - (244.90 * 20)/100)).toFixed(2)).replace('.', ',');
let pink30 = 'Novo preço: R$ ' + (Math.floor((244.90 - (244.90 * 30)/100)).toFixed(2)).replace('.', ',');
let pink50 = 'Novo preço: R$ ' + (Math.floor((244.90 - (244.90 * 50)/100)).toFixed(2)).replace('.', ',');
//Dark New Prices
let dark20 = 'Novo preço: R$ ' + (Math.floor((299.90 - (299.90 * 20)/100)).toFixed(2)).replace('.', ',');
let dark30 = 'Novo preço: R$ ' + (Math.floor((299.90 - (299.90 * 30)/100)).toFixed(2)).replace('.', ',');
let dark50 = 'Novo preço: R$ ' + (Math.floor((299.90 - (299.90 * 50)/100)).toFixed(2)).replace('.', ',');
//Green New Prices
let green20 = 'Novo preço: R$ ' + (Math.floor((99.90 - (99.90 * 20)/100)).toFixed(2)).replace('.', ',');
let green30 = 'Novo preço: R$ ' + (Math.floor((99.90 - (99.90 * 30)/100)).toFixed(2)).replace('.', ',');
let green50 = 'Novo preço: R$ ' + (Math.floor((99.90 - (99.90 * 50)/100)).toFixed(2)).replace('.', ',');
//Brown New Prices
let brown20 = 'Novo preço: R$ ' + (Math.floor((499.90 - (499.90 * 20)/100)).toFixed(2)).replace('.', ',');
let brown30 = 'Novo preço: R$ ' + (Math.floor((499.90 - (499.90 * 30)/100)).toFixed(2)).replace('.', ',');
let brown50 = 'Novo preço: R$ ' + (Math.floor((499.90 - (499.90 * 50)/100)).toFixed(2)).replace('.', ',');

//Reload Page

//Error click, without select a color.
buyBtn.addEventListener('click', function() {
    if(i == true) {
        newPrice.textContent = 'Escolha uma das cores acima.';
        i = false;
    }else{
        i = false;
    }
})

//Pink Color Picker Function
pink.addEventListener('click', function() {
    buyBtn.addEventListener('click', function() {
        modalContainer.classList.add('show');
        console.log(green50)
    })

    promoBtn.addEventListener('click', function() {
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        if(randomNumber <= 2) {
            console.log(randomNumber);
            message.textContent = `You received 20% OFF. 🥳`;
            message.style.color= 'darkgreen';
            promoBtn.style.display = 'none';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto';

            winBtn.addEventListener('click', function() {
                newPrice.textContent = pink20;
                modalContainer.classList.remove('show');
            })
    
        }else if(randomNumber <= 4) {
            console.log(randomNumber);
            message.textContent = `You received 30% OFF. 🥳`;
            message.style.color= 'orange';
            promoBtn.style.display = 'none';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto'
    
            winBtn.addEventListener('click', function() {
                newPrice.textContent = pink30;
                modalContainer.classList.remove('show')
            })
        }else{
            console.log(randomNumber);
            message.textContent = `You received 50% OFF. 🥳`;
            promoBtn.style.display = 'none';
            message.style.color='red';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto'
    
            winBtn.addEventListener('click', function() {
                newPrice.textContent = pink50;
                modalContainer.classList.remove('show')
            })
        }
    })
})

//Dark Color Picker Function
dark.addEventListener('click', function() {
    buyBtn.addEventListener('click', function() {
        modalContainer.classList.add('show');
    })

    promoBtn.addEventListener('click', function() {
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        if(randomNumber <= 2) {
            console.log(randomNumber);
            message.textContent = `You received 20% OFF. 🥳`;
            message.style.color= 'darkgreen';
            promoBtn.style.display = 'none';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto';

            winBtn.addEventListener('click', function() {
                newPrice.textContent = dark20;
                modalContainer.classList.remove('show')
            })
    
        }else if(randomNumber <= 4) {
            console.log(randomNumber);
            message.textContent = `You received 30% OFF. 🥳`;
            message.style.color= 'orange';
            promoBtn.style.display = 'none';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto'
    
            winBtn.addEventListener('click', function() {
                newPrice.textContent = dark30;
                modalContainer.classList.remove('show')
            })
        }else{
            console.log(randomNumber);
            message.textContent = `You received 50% OFF. 🥳`;
            promoBtn.style.display = 'none';
            message.style.color='red';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto'
    
            winBtn.addEventListener('click', function() {
                newPrice.textContent = dark50;
                modalContainer.classList.remove('show')
            })
        }
    })

})

//Green Color Picker Function
green.addEventListener('click', function() {
    buyBtn.addEventListener('click', function() {
        modalContainer.classList.add('show');
    })

    promoBtn.addEventListener('click', function() {
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        if(randomNumber <= 2) {
            console.log(randomNumber);
            message.textContent = `You received 20% OFF. 🥳`;
            message.style.color= 'darkgreen';
            promoBtn.style.display = 'none';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto';

            winBtn.addEventListener('click', function() {
                newPrice.textContent = green20;
                modalContainer.classList.remove('show')
            })
    
        }else if(randomNumber <= 4) {
            console.log(randomNumber);
            message.textContent = `You received 30% OFF. 🥳`;
            message.style.color= 'orange';
            promoBtn.style.display = 'none';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto'
    
            winBtn.addEventListener('click', function() {
                newPrice.textContent = green30;
                modalContainer.classList.remove('show')
            })
        }else{
            console.log(randomNumber);
            message.textContent = `You received 50% OFF. 🥳`;
            promoBtn.style.display = 'none';
            message.style.color='red';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto'
    
            winBtn.addEventListener('click', function() {
                newPrice.textContent = green50;
                modalContainer.classList.remove('show')
            })
        }
    })

})

//Brown Color Picker Function
brown.addEventListener('click', function() {
    buyBtn.addEventListener('click', function() {
        modalContainer.classList.add('show');
    })

    promoBtn.addEventListener('click', function() {
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        if(randomNumber <= 2) {
            console.log(randomNumber);
            message.textContent = `You received 20% OFF. 🥳`;
            message.style.color= 'darkgreen';
            promoBtn.style.display = 'none';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto';

            winBtn.addEventListener('click', function() {
                newPrice.textContent = brown20;
                modalContainer.classList.remove('show')
            })
    
        }else if(randomNumber <= 4) {
            console.log(randomNumber);
            message.textContent = `You received 30% OFF. 🥳`;
            message.style.color= 'orange';
            promoBtn.style.display = 'none';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto'
    
            winBtn.addEventListener('click', function() {
                newPrice.textContent = brown30;
                modalContainer.classList.remove('show')
            })
        }else{
            console.log(randomNumber);
            message.textContent = `You received 50% OFF. 🥳`;
            promoBtn.style.display = 'none';
            message.style.color='red';
            modal.append(winBtn);
            winBtn.innerHTML = 'Aplicar desconto'
    
            winBtn.addEventListener('click', function() {
                newPrice.textContent = brown50;
                modalContainer.classList.remove('show')
            })
        }
    })

})
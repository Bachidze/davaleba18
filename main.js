let toggle = document.querySelector('.inside')
let price = document.querySelectorAll('h1')
let fasi = 10
toggle.addEventListener('click',()=>{
    if(fasi < 12){
        console.log('shemodis')
        fasi *= 10
    }else{
        console.log('else')
        fasi/=10
    }

    console.log(fasi)
    price.innerHTML = fasi

    price.forEach(price => {
        price.innerHTML = fasi;
    });

    toggle.classList.toggle('rotate')
})




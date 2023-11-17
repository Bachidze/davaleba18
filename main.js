let toggle = document.querySelector('.inside')
let price = document.querySelectorAll('h1')
let meoreprice = document.querySelectorAll('h5')
let mesameprice = document.querySelectorAll('h6')
let fasi = 19.9
toggle.addEventListener('click',()=>{
    if(fasi < 40){
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

let meorefasi = 24.9
toggle.addEventListener('click',()=>{
    if(meorefasi < 40){
        console.log('shemodis')
        meorefasi *= 10
    }else{
        console.log('else')
        meorefasi/=10
    }

    console.log(meorefasi)
    meoreprice.innerHTML = meorefasi

    meoreprice.forEach(meoreprice => {
        meoreprice.innerHTML = meorefasi;
    });
   
})
let mesamefasi = 39.9
toggle.addEventListener('click',()=>{
    if(mesamefasi < 40){
        console.log('shemodis')
        mesamefasi *= 10
    }else{
        console.log('else')
        mesamefasi/=10
    }

    console.log(mesamefasi)
    mesameprice.innerHTML = mesamefasi

    mesameprice.forEach(mesameprice => {
        mesameprice.innerHTML = mesamefasi;
    });
   
})




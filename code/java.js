
document.onscroll = ()  =>{
    if(windo.scrollY > 0){
        document.querySelector('.header').classList.add('active');

    }

    else{
        document.querySelector('.header').classList.remove('active');

    }
};
document.onload = () => {
    if (windo.scrollY > 0){
        document.querySelector('.header').classList.add('active');

    }

    else{
        document.querySelector('.header').classList.remove('active');
    }
};

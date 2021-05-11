"use strict"

function progres(){
    let prg=document.querySelector('.progress');
    let w=window.pageYOffset/(document.body.scrollHeight-window.innerHeight)*100;
    prg.style.width=w+"%";
};

function spy(){
    let m1=document.querySelector('.menu1');
    let m2=document.querySelector('.menu2');
    let m3=document.querySelector('.menu3');
    let m4=document.querySelector('.menu4');
    let l=pageYOffset;
    if(l<500){  
        m1.classList.add('activ'); 
        m2.classList.remove('activ'); 
    }; 
    if(l<1000 && l>500) { 
        m1.classList.remove('activ');
        m3.classList.remove('activ');
        m2.classList.add('activ');  
    };
    if(l>1000 && l<1600){
        m1.classList.remove('activ');
        m2.classList.remove('activ');
        m4.classList.remove('activ');
        m3.classList.add('activ');
    };
    if(l>1600 ){
        m1.classList.remove('activ');
        m3.classList.remove('activ');
        m4.classList.add('activ');
    };
};

function scrol(){
    let i=setInterval(function(){
        window.scrollBy(0,-20);
        if(window.pageYOffset==0 ){
            clearInterval(i);
        }
    },20);
}

function btn(){
    let btn=document.querySelector('.btn');
    let l=pageYOffset;
    if(l>800){
        btn.style.display="inline-block"; 
    }
    else{
        btn.style.display="none";
    }
};

function application(){
    let o=document.querySelector('.alert');
    let a=document.querySelector("#firstname_field");
    let b=document.querySelector("#lastname_field");
    let c=document.querySelector("#phone_field");
    if(a.value == '' || b.value == '' || c.value == ''){
        alert("Заполните все поля!!!");
    }
    else{
    o.innerHTML=`Уважаемый, <strong>${a.value} ${b.value[0]}.</strong> Наши специалисты уже получили Вашу заявку и свяжутся с Вами в ближайшее время по телефону <strong><nobr>${c.value}</nobr></strong><br>`
    o.style.display="inline-block";
    }
}

function preload(){
    let p=document.querySelector('.ps');
    let l=document.querySelector('.load');
    let a=2;
    let s=50;
    let i=setInterval(function(){
        p.style.transform=`scale(${a})  rotate(${s}deg)`;
        s+=50;
        a++;
        a=(a-1)%2+1;
    },250);
    setTimeout(function(){
        clearInterval(i);
        l.remove();
        window.scrollTo(0,0);
    },2000)
}

function main(){
    let btn1=document.querySelector('.btn');
    let btn2=document.querySelector('.btn1');
    let next=document.querySelector('.slider_arrow_right');
    let prev=document.querySelector('.slider_arrow_left');
    let ad = document.querySelectorAll('.ad');
    let position=0;
    
    preload();
    document.addEventListener('scroll',progres);
    document.addEventListener('scroll',spy);
    document.addEventListener('scroll',btn);
    btn1.addEventListener("click",scrol);
    btn2.addEventListener('click',application);
    next.addEventListener('click',function (){
        let slider=document.querySelector('.kit_slides_wrapper');
        position++;
        position=position%5;
        slider.style.transform =`translate(${-position*800}px,0)`;
    
    });
    prev.addEventListener('click',function (){
        let slider=document.querySelector('.kit_slides_wrapper');
        if(position==0){
            position=4;
            slider.style.transform =`translate(${-position*800}px,0)`;
        }
        else{
        position--;
        position=position%5;
        }
    });
    ad.forEach(function(btn) {
    btn.addEventListener('click', function() {
        cart.innerHTML=parseInt(cart.innerHTML)+1;
    });
    }); 
    
};
main();


//menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger'),
    body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
        body.classList.toggle('body_fixed');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
            body.classList.remove('body_fixed');
        });
    });

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '0(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

});

//анимация главной
if (document.documentElement.clientWidth > 767) {
    function animation() {
        gsap.registerPlugin(ScrollTrigger);
     
         gsap.from('.promo__list__item', {
           opacity: 0,
           yPercent: 100,
           stagger: 0.4,
           scrollTrigger: {
             trigger: '.promo__list',
             start: '30% bottom', 
            
             toggleActions: 'play none none reverse',
           }
         });
    
            
         gsap.from('.promo__content', {
            opacity: 0,
            xPercent: -100,
            
          });
          gsap.from('.about__wins li', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.4,
            scrollTrigger: {
              trigger: '.about__wins',
              start: '30% bottom', 
             
              toggleActions: 'play none none reverse',
            }
          });
          gsap.from('.countries__item', {
            opacity: 0,
            xPercent: -100,
            stagger: 0.4,
            scrollTrigger: {
              trigger: '.countries__wrapper',
              start: '30% bottom', 
             
              toggleActions: 'play none none reverse',
            }
          });
        //   gsap.from('.contacts__wrapper div', {
        //     opacity: 0,
        //     xPercent: -100,
        //     stagger: 0.1,
        //     scrollTrigger: {
        //       trigger: '.contacts__wrapper',
        //       start: '30% bottom', 
             
        //       toggleActions: 'play none none reverse',
        //     }
        //   });
          gsap.from('.wins__item', {
            opacity: 0,
            scale: .5,
            stagger: 0.4,
            scrollTrigger: {
              trigger: '.wins__wrapper',
              start: '30% bottom', 
             
              toggleActions: 'play none none reverse',
            }
          });
     
         const tlImg = gsap.timeline({
           scrollTrigger: {
             trigger: '.contacts__wrapper',
             start: '30% bottom',
           
           }
         });
         tlImg.from('.contacts__wrapper>div:first-child', {
           xPercent: -150,
                  
         });
         tlImg.from('.contacts__wrapper>div:last-child', {
            xPercent: 150,
            
         }, '<');
        
      }
      animation();
}


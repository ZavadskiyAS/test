const headerMenu = document.getElementById('header-menu'),
      headerToggle = document.getElementById('header-toggle'),
      headerClose = document.getElementById('header-close'),
      headerItem1 = document.querySelector('.header__item1'),
      headerItem2 = document.querySelector('.header__item2'),
      headerItem3 = document.querySelector('.header__item3'),
      burgerBox1 = document.querySelector('.burgerBox1'),
      burgerBox2 = document.querySelector('.burgerBox2'),
      burgerBox3 = document.querySelector('.burgerBox3'),      
      dots = document.querySelector('.dots'),
      dot1 = document.querySelector('.dot1'),
      dot2 = document.querySelector('.dot2'),
      dot3 = document.querySelector('.dot3'),
      dot4 = document.querySelector('.dot4'),
      dot5 = document.querySelector('.dot5'),
      numberDots1 = document.querySelector('.numberDots1'),
      numberDots2 = document.querySelector('.numberDots2'),
      numberDots3 = document.querySelector('.numberDots3'),
      numberDots4 = document.querySelector('.numberDots4'),
      numberDots5 = document.querySelector('.numberDots5'),
      imgDone1 = document.querySelector('.dot-img1'),
      imgDone2 = document.querySelector('.dot-img2'),
      imgDone3 = document.querySelector('.dot-img3'),
      imgDone4 = document.querySelector('.dot-img4'),
      imgDone5 = document.querySelector('.dot-img5'),
      dotline1 = document.querySelector('.line1'),
      dotline2 = document.querySelector('.line2'),
      dotline3 = document.querySelector('.line3'),
      dotline4 = document.querySelector('.line4'),
      button1 = document.querySelector('.button1'),
      button2 = document.querySelector('.button2'),
      button3 = document.querySelector('.button3'),
      button4 = document.querySelector('.button4'),
      button5 = document.querySelector('.button5'),
      button6 = document.querySelector('.button6'),
      button7 = document.querySelector('.button7'),
      button8 = document.querySelector('.button8'),
      button9 = document.querySelector('.button9'),
      button10 = document.querySelector('.button10'),
      button11 = document.querySelector('.button11'),
      button12 = document.querySelector('.button12'),
      countQuest = document.querySelector('.countQuest'),
      count = document.querySelector('.count'),
      quest1 = document.querySelector('.q1'),
      quest2 = document.querySelector('.q2'),
      quest3 = document.querySelector('.q3'),
      quest4 = document.querySelector('.q4'),
      quest5 = document.querySelector('.q5'),
      quest6 = document.querySelector('.final');


// ============================= burger open / close ==================

if(headerToggle){
    headerToggle.addEventListener('click', () => {
        headerMenu.classList.add('show-menu');
    })
}
if(headerClose){
    headerClose.addEventListener('click', () => {
        headerMenu.classList.remove('show-menu');
    })
}

//================================ burger list ============================

headerItem1.addEventListener('click', () => {
    burgerBox1.classList.toggle('burgerBoxOpen');
    burgerBox2.classList.remove('burgerBoxOpen');
    burgerBox3.classList.remove('burgerBoxOpen');
})
headerItem2.addEventListener('click', () => {
    burgerBox2.classList.toggle('burgerBoxOpen');
    burgerBox1.classList.remove('burgerBoxOpen');
    burgerBox3.classList.remove('burgerBoxOpen');
})
headerItem3.addEventListener('click', () => {
    burgerBox3.classList.toggle('burgerBoxOpen');
    burgerBox2.classList.remove('burgerBoxOpen');
    burgerBox1.classList.remove('burgerBoxOpen');
})

//================================quest1=================================

button1.addEventListener('click',() => {
    quest1.classList.add('questOff');
    quest2.classList.add('questOn');
    dot1.classList.add('dot-active');
    imgDone1.classList.add('dot-img-active');
    dotline1.classList.add('lineBackground');
    countQuest.innerHTML = '2';
    numberDots1.innerHTML = "";
});


button2.addEventListener('click',() => {
    quest1.classList.add('questOff');
    quest2.classList.add('questOn');
    dot1.classList.add('dot-active');
    imgDone1.classList.add('dot-img-active');
    dotline1.classList.add('lineBackground');
    countQuest.innerHTML = '2';
    numberDots1.innerHTML = "";
});

//================================quest2=================================

button3.addEventListener('click',() => {
    quest2.classList.add('questOff');
    quest3.classList.add('questOn');
    dot2.classList.add('dot-active');
    imgDone2.classList.add('dot-img-active');
    dotline2.classList.add('lineBackground');
    countQuest.innerHTML = '3';
    numberDots2.innerHTML = "";
});

button4.addEventListener('click',() => {
    quest2.classList.add('questOff');
    quest3.classList.add('questOn');
    dot2.classList.add('dot-active');
    imgDone2.classList.add('dot-img-active');
    dotline2.classList.add('lineBackground');
    countQuest.innerHTML = '3';
    numberDots2.innerHTML = "";
});

button5.addEventListener('click',() => {
    quest2.classList.add('questOff');
    quest3.classList.add('questOn');
    dot2.classList.add('dot-active');
    imgDone2.classList.add('dot-img-active');
    dotline2.classList.add('lineBackground');
    countQuest.innerHTML = '3';
    numberDots2.innerHTML = "";
});

//================================quest3=================================

button6.addEventListener('click',() => {
    quest3.classList.add('questOff');
    quest4.classList.add('questOn');
    dot3.classList.add('dot-active');
    imgDone3.classList.add('dot-img-active');
    dotline3.classList.add('lineBackground');
    countQuest.innerHTML = '4';
    numberDots3.innerHTML = "";
});

button7.addEventListener('click',() => {
    quest3.classList.add('questOff');
    quest4.classList.add('questOn');
    dot3.classList.add('dot-active');
    imgDone3.classList.add('dot-img-active');
    dotline3.classList.add('lineBackground');
    countQuest.innerHTML = '4';
    numberDots3.innerHTML = "";
});

//================================quest4=================================

button8.addEventListener('click',() => {
    quest4.classList.add('questOff');
    quest5.classList.add('questOn');
    dot4.classList.add('dot-active');
    imgDone4.classList.add('dot-img-active');
    dotline4.classList.add('lineBackground');
    countQuest.innerHTML = '5';
    numberDots4.innerHTML = "";
});

button9.addEventListener('click',() => {
    quest4.classList.add('questOff');
    quest5.classList.add('questOn');
    dot4.classList.add('dot-active');
    imgDone4.classList.add('dot-img-active');
    dotline4.classList.add('lineBackground');
    countQuest.innerHTML = '5';
    numberDots4.innerHTML = "";
});

//================================quest5=================================

button10.addEventListener('click',() => {
    quest5.classList.add('questOff');
    quest6.classList.add('questOn');
    dot5.classList.add('dot-active');
    imgDone5.classList.add('dot-img-active');
    count.innerHTML = 'Ist fertig!';
    numberDots5.innerHTML = "";
});

button11.addEventListener('click',() => {
    quest5.classList.add('questOff');
    quest6.classList.add('questOn');
    dot5.classList.add('dot-active');
    imgDone5.classList.add('dot-img-active');
    count.innerHTML = 'Ist fertig!';
    numberDots5.innerHTML = "";
});

//================================quest6=================================

button12.addEventListener('click',() => {
    // quest6.classList.add('questOff');
    // count.innerHTML = ' ';
    // dots.classList.add('dotsOff');
});

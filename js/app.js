var buttons = document.querySelectorAll('[id^="welcome_slide_"]');
var sliderImg = document.querySelectorAll('#welcome_img li');
var imgNumber = 0;

sliderImg[0].classList.add('visible');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', change)
}

function change(e) {
//    console.log(e.target.id);
    var prevNumber = imgNumber;
    e.target.id === "welcome_slide_right" ? imgNumber++ : imgNumber--;
    if (imgNumber < 0) {
        imgNumber = sliderImg.length - 1;
    } else if (imgNumber > sliderImg.length - 1) {
        imgNumber = 0;
    }
    sliderImg[prevNumber].classList.remove('visible');
    sliderImg[imgNumber].classList.add('visible');
}

console.log(buttons);
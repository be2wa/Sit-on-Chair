// slider //

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

// calculator //

var type = document.querySelector('#type');
var typeText = type.querySelector('.list_label');
var color = document.querySelector('#color');
var colorText = color.querySelector('.list_label');
var pattern = document.querySelector('#pattern');
var patternText = pattern.querySelector('.list_label');

var dropLists = Array.from(document.querySelectorAll('.drop_down_list'));
var dropListsLi = Array.from(document.querySelectorAll('.drop_down_list li'));

var transportBox = document.querySelector('#transport');


var typeChoice = document.querySelector('.panel_left .title');
var typeVal = document.querySelector('.panel_right .title');

var colorChoice = document.querySelector('.panel_left .color');
var colorVal = document.querySelector('.panel_right .color');

var patternChoice = document.querySelector('.panel_left .pattern');
var patternVal = document.querySelector('.panel_right .pattern');

var transportChoice = document.querySelector('.panel_left .transport');
var transportVal = document.querySelector('.panel_right .transport');

var sum = document.querySelector('.sum strong');

function checkSum() {
    var temp = (Number(typeVal.innerText) + Number(colorVal.innerText) + Number(patternVal.innerText) + Number(transportVal.innerText)).toFixed(2);
    sum.innerText = temp;
}

dropLists.forEach(function(element){
   element.addEventListener('click', function() {
      this.querySelector('.list_panel').classList.toggle('visible');
   });
});

dropListsLi.forEach(function(e) {
    e.addEventListener('click', function() {
        var whichDropList = this.parentElement.parentElement.getAttribute('id');
        if (whichDropList === "type") {
            typeText.innerText = '- ' + this.innerText + ' -';
            typeChoice.innerText = this.innerText;
            typeVal.innerText = this.dataset.price;
        } else if (whichDropList === "color") {
            colorText.innerText = '- ' + this.innerText + ' -';
            colorChoice.innerText = this.innerText;
            colorVal.innerText = this.dataset.price;
        } else if (whichDropList === "pattern") {
            patternText.innerText = '- ' + this.innerText + ' -';
            patternChoice.innerText = this.innerText;
            patternVal.innerText = this.dataset.price;       
        }
        checkSum();
    });
});

transportBox.addEventListener('click', function() {
    if (this.checked) {
        transportChoice.innerText = 'Transport';
        transportVal.innerText = this.dataset.transportPrice;
    } else {
        transportChoice.innerText = ' ';
        transportVal.innerText = ' ';
    }
    checkSum();
});
const infoHTML = document.getElementById('info-html');
const infoCSS = document.querySelector('#info-css');
const infoSASS = document.querySelector('#info-sass');
const infoJS = document.querySelector('#info-js');
const infoSQL = document.querySelector('#info-sql');
const infoXD = document.querySelector('#info-xd');

const numberHTML = 0;
const numberCSS = 0;
const numberSASS = 0;
const numberJS = 0;
const numberSQL = 0;
const numberXD = 0;

function classListToggle(item) {
    item.classList.toggle('active');
}

function classListRemove(item, item2, item3, item4, item5) {
    item.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
    item4.classList.remove('active');
    item5.classList.remove('active');
}

function bar (panelBar, animation) {
    let bar = document.querySelector(panelBar);
    bar.getElementsByClassName.animation = "";
    
    setTimeout(() => bar.style.animation = animation, 5);
}

function contador(variavel, teste, num, numBar) {
    variavel = document.querySelector(teste);  
    
    let counter = 0;
    setInterval(() => {
        if (counter == num) {
            clearInterval();
        } else {
            counter += 1;
            variavel.innerHTML = counter + "%";
        }
    }, numBar);
};

function toggleHTML() {
    classListToggle(infoHTML);
    classListRemove(infoCSS, infoSASS, infoJS, infoSQL, infoXD);
    contador(numberHTML, '#number-html', 90, 22);
    bar('#progress-bar-html', "anim 2s linear forwards");
}

function toggleCSS() {
    classListToggle(infoCSS);
    classListRemove(infoHTML, infoSASS, infoJS, infoSQL, infoXD);
    contador(numberCSS, '#number-css', 80, 25);
    bar('#progress-bar-css', "animCSS 2s linear forwards");
}

function toggleSASS() {
    classListToggle(infoSASS);
    classListRemove(infoHTML, infoCSS, infoJS, infoSQL, infoXD);
    contador(numberSASS, '#number-sass', 60, 18);
    bar('#progress-bar-sass', "animSASS 1s linear forwards");
}

function toggleJS() {
    classListToggle(infoJS);
    classListRemove(infoHTML, infoCSS, infoSASS, infoSQL, infoXD);
    contador(numberJS, '#number-js', 40, 25);
    bar('#progress-bar-js', "animJS 1s linear forwards");
}

function toggleSQL() {
    classListToggle(infoSQL);
    classListRemove(infoHTML, infoCSS, infoSASS, infoJS, infoXD);
    contador(numberSQL, '#number-sql', 70, 28);
    bar('#progress-bar-sql', "animSQL 2s linear forwards");
}

function toggleXD() {
    classListToggle(infoXD);
    classListRemove(infoHTML, infoCSS, infoSASS, infoJS, infoSQL);
    contador(numberXD, '#number-xd', 80, 12);
    bar('#progress-bar-xd', "animXD 1s linear forwards");
}


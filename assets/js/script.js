/**THIRD FROM SLIDING FROM RIGHT TO LEFT AND OCCUPIES CENTER */
function callThirdForm() {
    document.getElementById('navDot3').checked = true;
    let container_name = document.getElementById('response');
    container_name.classList.add('formTranslatePage4');
    var fadeEffect = setInterval(function() {
        if (!container_name.style.opacity) {
            container_name.style.opacity = 0;
        }
        if (container_name.style.opacity < 1) {
            container_name.style.opacity += 1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
    container_name.style.visibility = 'visible';
}
/**SECOND FORM SLIDING FROM CENTER TO LEFT */
let submitBtn = document.getElementById('formSubmitBtn');
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let container_name = document.getElementById('page2');
    container_name.classList.add('formTranslatePage3');
    var fadeEffect = setInterval(function() {
        if (!container_name.style.opacity) {
            container_name.style.opacity = 1;
        }
        if (container_name.style.opacity > 0) {
            container_name.style.opacity -= 0.5;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
    container_name.style.visibility = 'hidden';
    callThirdForm();
});

/**SECOND FROM SLIDING FROM RIGHT TO LEFT AND OCCUPIES CENTER*/
function callSecondForm() {
    document.getElementById('navDot2').checked = true;
    let container_name = document.getElementById('page2');
    container_name.classList.add('formTranslatePage2');
    var fadeEffect = setInterval(function() {
        if (!container_name.style.opacity) {
            container_name.style.opacity = 0;
        }
        if (container_name.style.opacity < 1) {
            container_name.style.opacity += 1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
    container_name.style.visibility = 'visible';
}

/** FIRST FORM SLIDING FROM CENTER TO LEFT */
function result() {
    let container_name = document.getElementById('page1');
    container_name.classList.add('formTranslatePage1');
    var fadeEffect = setInterval(function() {
        if (!container_name.style.opacity) {
            container_name.style.opacity = 1;
        }
        if (container_name.style.opacity > 0) {
            container_name.style.opacity -= 0.5;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
    container_name.style.visibility = 'hidden';
    callSecondForm();
}
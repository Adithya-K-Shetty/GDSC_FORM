function callSecondForm() {
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
//GETTING USER DATA
const userNameInput = document.querySelector('#userName');
const userEmailInput = document.querySelector('#userEmail');
const userGitHubInput = document.querySelector('#userGitHub');
const userLinkedinInput = document.querySelector('#userLinkedin');
const userDiscordInput = document.querySelector('#userDiscord');
const form = document.querySelector('#userData');

let oldDot = document.querySelector('#navDot1');
let popupVisible = false;
let domainListVisible = false;

//CHECKING USER NAME
const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;

    const username = userNameInput.value.trim();

    if (!isRequired(username)) {
        showError(userNameInput, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(
            userNameInput,
            `Username must be between ${min} and ${max} characters.`
        );
    } else {
        showSuccess(userNameInput);
        valid = true;
    }
    return valid;
};

//CHECKING EMAIL
const checkEmail = () => {
    let valid = false;
    const email = userEmailInput.value.trim();
    if (!isRequired(email)) {
        showError(userEmailInput, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(userEmailInput, 'Email is not valid.');
    } else {
        showSuccess(userEmailInput);
        valid = true;
    }
    return valid;
};

//CHECKING GITHUB
const checkGitHub = () => {
    let valid = false;
    const github = userGitHubInput.value.trim();
    if (!isRequired(github)) {
        showError(userGitHubInput, 'Email cannot be blank.');
    } else if (!isGitHubValid(github)) {
        showError(userGitHubInput, 'Email is not valid.');
    } else {
        showSuccess(userGitHubInput);
        valid = true;
    }
    return valid;
};

//CHECKING LINKEDIN
const checkLinkeDin = () => {
    let valid = false;
    const linkedin = userLinkedinInput.value.trim();
    if (!isRequired(linkedin)) {
        showError(userLinkedinInput, 'Email cannot be blank.');
    } else if (!isLinkedinValid(linkedin)) {
        showError(userLinkedinInput, 'Email is not valid.');
    } else {
        showSuccess(userLinkedinInput);
        valid = true;
    }
    return valid;
};

//CHECKING DISCORD
const checkDiscord = () => {
    let valid = false;
    const discord = userDiscordInput.value.trim();
    if (!isRequired(discord)) {
        showError(userDiscordInput, 'Email cannot be blank.');
    } else {
        showSuccess(userDiscordInput);
        valid = true;
    }
    return valid;
};

//REGEX FOR EMAIL
const isEmailValid = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//CHECKING VALID GITHUB URL
const isGitHubValid = (github) => {
    let linkArray = github.split('.');
    if (linkArray[0] == 'https://github') return true;
    else return false;
};

//CHECKING VALID LINKEDIN URL
const isLinkedinValid = (linkedin) => {
    let linkArray = linkedin.split('.');
    if (linkArray[1] == 'linkedin') return true;
    else return false;
};

//CHECKING WHETHER THE INPUT IS EMPTY AND DISPLAYING ERROR
const isRequired = (value) => (value === '' ? false : true);
const isBetween = (length, min, max) =>
    length < min || length > max ? false : true;

//FUNCTION TO SHOW ERROR (RED BORDER FOR INPUT)
const showError = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');
};

//FUNCTION TO SHOW SUCCESS (GREEN BORDER FOR INPUT)
const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');
};

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
};

form.addEventListener(
    'input',
    debounce(function(e) {
        switch (e.target.id) {
            case 'userName':
                checkUsername();
                break;
            case 'userEmail':
                checkEmail();
                break;
            case 'userGitHub':
                checkGitHub();
                break;
            case 'userLinkedin':
                checkLinkeDin();
                break;
            case 'userDiscord':
                checkDiscord();
                break;
        }
    })
);

/**SECOND FORM SLIDING FROM CENTER TO LEFT */
/** SUBMITTING FORM EVENT */
let submitBtn = document.getElementById('formSubmitBtn');
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isGitHubValid = checkGitHub(),
        isLinkedinValid = checkLinkeDin(),
        isDiscordValid = checkDiscord();

    let isFormValid =
        isUsernameValid &&
        isEmailValid &&
        isGitHubValid &&
        isLinkedinValid &&
        isDiscordValid;

    if (isFormValid) {
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
        //CALLS THIRD PAGE (SUCCESSFULL RESPONSE)
        callThirdForm();
    } else {
        goBack();
    }
});

function sliderDotSwitch(dotNumber) {
    
    let newDot = document.getElementById(`navDot${dotNumber}`);
    if (newDot == oldDot)
        return;

    newDot.style.padding = '10px'; 
    newDot.style.backgroundColor = 'black';
     
    oldDot.style.padding = '0px'; 
    oldDot.style.backgroundColor = 'white';

    oldDot = newDot;

}

function togglePopup() {
    let guidePopup = document.getElementById("resumeGuidePopup");
    let container_name = document.getElementById('page2');
    console.log(guidePopup.style.display);
    if (popupVisible) {
        guidePopup.style.display = "none";
        popupVisible = false;
        callSecondForm();
    } else {
        container_name.style.visibility = "hidden";
        guidePopup.style.display = "block";
        popupVisible = true;
    }

}

/**THIRD FROM SLIDING FROM RIGHT TO LEFT AND OCCUPIES CENTER */
function callThirdForm() {
    sliderDotSwitch("3");
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

/**SECOND FROM SLIDING FROM RIGHT TO LEFT AND OCCUPIES CENTER*/
function callSecondForm() {
    sliderDotSwitch("2");
    let container_name = document.getElementById('page2');
    container_name.classList.remove('formTranslatePage2Reverse');
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
/**EVENT WHICH TAKES PLACES WHEN PRESSING THE ARROW BUTTON */
function result() {
    let container_name = document.getElementById('page1');
    container_name.classList.remove('formTranslatePage1Reverse');
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
    togglePopup();
}

/**EVENT TO GO BACK*/
function callFirstForm() {
    sliderDotSwitch("1");
    let container_name = document.getElementById('page1');
    container_name.classList.remove('formTranslatePage1');
    container_name.classList.add('formTranslatePage1Reverse');
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

function browseFiles() {
    let chooseFileButton = document.getElementById("file_input");
    chooseFileButton.click();
}

function goBack() {
    let container_name = document.getElementById('page2');
    container_name.classList.remove('formTranslatePage2');
    container_name.classList.add('formTranslatePage2Reverse');
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
    callFirstForm();
}

function toggleDomains() {
    let domainList = document.getElementById("doiValues");
    let container_name = document.getElementById('page2');
    if (domainListVisible) {
        domainList.style.display = "none";
        domainListVisible = false;
        callSecondForm();
    } else {
        // container_name.style.visibility = "hidden";
        domainList.style.display = "block";
        domainListVisible = true;
    }
}
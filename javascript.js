function checkInput() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name.trim() == "" || subject.trim() == "" || phone.trim() == "" || email.trim() == "" || message.trim() == "") {
        alert("Var god och skriv in alla uppgifter !");
    }
    else {
        alert("Ditt meddelande var skickat till " + email);
    }
}

async function getData() {
    const response = await fetch('cv.json');
    return await response.json();
}

async function generateWorkExperiance() {
    const jsObject = await getData();
    for (let index = 0; index < jsObject.workExperiance.length; index++) {
        var row = `<tr>
                      <td><span class="year">${jsObject.workExperiance[index].year}</span></td>
                      <td>${jsObject.workExperiance[index].title}</td>
                   </tr>`;
        var table = document.getElementById("experiance");
        table.innerHTML += row;
    }
}

async function generateEducation() {
    const jsObject = await getData();
    for (let index = 0; index < jsObject.education.length; index++) {
        var row = `<tr>
                    <td><span class="year">${jsObject.education[index].year}</span></td>
                        <td>${jsObject.education[index].title}</td>
                   </tr>`;
        var table = document.getElementById("education-table");
        table.innerHTML += row;
    }
}

function changeBackground() {
    var cvBody = document.querySelector('.cv-body');
    cvBody.style.setProperty('--backImage', 'url("../images/cv-background-2.jpg")')
}

function changeBackBackground() {
    var cvBody = document.querySelector('.cv-body');
    cvBody.style.setProperty('--backImage', 'url("../images/cv-background.jpg")')
}

function showEasterEgg() {
    const modal_container = document.getElementById('modal_container');
    modal_container.classList.toggle('show');
}

function hideEasterEgg() {
    const cv_body = document.getElementById('cv_body');
    cv_body.addEventListener('click', () => {
        const modal_container = document.getElementById('modal_container');
        modal_container.classList.remove('show');
    });
}

function easterEggTrigger() {
    const page = document.querySelector('.cv-body')
    let arr = new Array(4);
    let counter = 0;
    let sum = 0
    page.addEventListener('keydown', key => {
        if (key.keyCode == 32 || key.keyCode == 13 || key.keyCode == 27) {
            arr = new Array(4);
            counter = 0;
        } else {
            arr[counter] = key.keyCode;
            if (typeof arr[3] != 'undefined') {
                sum = arr[0] + arr[1] + arr[2] + arr[3]
                if (sum == 398) {
                    showEasterEgg();
                    arr = new Array(4);
                    counter = 0;
                    sum = 0
                    return;
                } else {
                    arr = new Array(4);
                }
            }
            ++counter;
            if (counter == 4) {
                counter = 0
            }
        }
    });
}

generateWorkExperiance();
generateEducation();

hideEasterEgg();
easterEggTrigger();

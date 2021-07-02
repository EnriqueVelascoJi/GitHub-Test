
btnActivator = document.querySelector('.btn button');
contentText = document.querySelector('.mensaje p');
content = document.querySelector('.mensaje');

eventListeners();
function eventListeners() {

    btnActivator.addEventListener('click', () => {

        console.log(content.innerText)
        if (contentText.innerText == "Color Red") {
            contentText.innerText = "Color Green";
            content.style.backgroundColor = "chartreuse";
        } else {
            contentText.innerText = "Color Red";
            content.style.backgroundColor = "red";
        }
    })
}
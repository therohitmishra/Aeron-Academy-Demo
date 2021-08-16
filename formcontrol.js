
//download form modal toggle
let modal = document.getElementById("modal")
let closebtn = document.getElementById("btn-close")
let openbtn = document.getElementsByClassName("btn-open")
let fbtn = document.getElementById("footerdownload")

openbtn[0].onclick = function () {
    modal.style.display = "block"
}

closebtn.onclick = function () {
    modal.style.display ="none"
}

openbtn[1].onclick = function () {
        modal.style.display = "block"
}

fbtn.onclick = function () {
        modal.style.display = "block"
}







// time and date 
var datetime = new Date();
var hour = datetime.getHours();
var minutes = datetime.getMinutes();
var seconds = datetime.getSeconds();
var mseconds = datetime.getMilliseconds();
var time = hour + ":" + minutes + ":" + seconds;
document.getElementById("time1").value = time;
document.getElementById("datetime10").value = time;
// google sheet web app link 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxyszgmxtU7GmCf1Fdfz8q7s3q0Mk5j9wh4FpE2hKxmzeI0mKeto4ojX9RbKn1RYUt9kA/exec'

function aftersubmit ()
{
    var formclear = document.getElementById("downloadbrouchure")
    formclear.reset();
    modal.style.display ="none"
    window.open("https://bit.ly/2VRTBhw");

}

function aftersubmit2 ()
{
    var formclear2 = document.getElementById("downloadbrouchure2")
    formclear2.reset();
    var btnreset = document.getElementById("rinformation")
    btnreset.innerHTML = "submit success"

}

// form submission for download brouchure
//it collects name + phone
const form = document.forms['downloadbrouchure']
form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => aftersubmit())
            .catch(error => console.error('Error!', error.message))
})


const formtwo = document.forms['downloadbrouchure2']
formtwo.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(formtwo) })
            .then(response => aftersubmit2())
            .catch(error => console.error('Error!', error.message))
})

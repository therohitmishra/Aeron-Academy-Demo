let coursefooterdownload = document.getElementById("footerdownload22")
let coursemodal = document.getElementById("coursemodal")
let coursebtnclose = document.getElementById("course-btn1")

coursefooterdownload.onclick = function () {
    coursemodal.style.display = "block"
}

coursebtnclose.onclick = function () {
    coursemodal.style.display = "none"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxyszgmxtU7GmCf1Fdfz8q7s3q0Mk5j9wh4FpE2hKxmzeI0mKeto4ojX9RbKn1RYUt9kA/exec'
// time and date 
var datetime = new Date();
var hour = datetime.getHours();
var minutes = datetime.getMinutes();
var seconds = datetime.getSeconds();
var mseconds = datetime.getMilliseconds();
var time = hour + ":" + minutes + ":" + seconds;
document.getElementById("time3").value = time;

function coursepagesend ()
{
    var formclear1 = document.getElementById("coursedownloadfile")
    formclear1.reset();
    coursemodal.style.display ="none"
    window.open("https://bit.ly/2VRTBhw");
}

const courssepageform = document.forms['coursedownloadfile']

courssepageform.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(courssepageform) })
            .then(response => coursepagesend())
            .catch(error => console.error('Error!', error.message))
})
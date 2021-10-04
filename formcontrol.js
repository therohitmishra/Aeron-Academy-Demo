
//download form modal toggle
let modal = document.getElementById("modal")
let closebtn = document.getElementById("btn-close")
let fbtn = document.getElementById("footerdownload")


closebtn.onclick = function () {
    modal.style.display = "none"
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

function aftersubmit() {
    var formclear = document.getElementById("downloadbrouchure")
    formclear.reset();
    modal.style.display = "none"
    window.open("https://bit.ly/2VRTBhw");

}

function aftersubmit2() {
    var formclear2 = document.getElementById("downloadbrouchure2")
    formclear2.reset();
    var btnreset = document.getElementById("rinformation")
    btnreset.innerHTML = '<i class="bi bi-check-circle text-white font-semibold text-2xl "></i>'

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

//////////////hero section//////////////

document.getElementById("headtimestamp").value = time;
function aftersubmit3() {

    document.getElementById("exitmodal-onoff").style.display = "block";
    document.getElementById("headformname").reset();
}

const heroform = document.forms['headformname']
heroform.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(heroform) })
        .then(response => aftersubmit3())
        .catch(error => console.error('Error!', error.message))
})

function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-331309109/G971CLTBp_kCELXA_Z0B',
        'event_callback': callback
    });
    return false;
}


function headbtnload() {

    gtag_report_conversion();
    document.getElementById("btnexthero").style.display = "none";
    document.getElementById("btnspinner").style.display = "block";
}

///////////////////btn spinner cta//////////////////////
function headbtnload2() {

    gtag_report_conversion("http://indexpageform2info.com");
    document.getElementById("ctatext").style.display = "none";
    document.getElementById("ctatext2").style.display = "none";
    document.getElementById("btnspinner2").style.display = "block";
}

/////////////
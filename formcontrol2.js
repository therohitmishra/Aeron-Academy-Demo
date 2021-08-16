// time and date 
var datetime = new Date();
var hour = datetime.getHours();
var minutes = datetime.getMinutes();
var seconds = datetime.getSeconds();
var mseconds = datetime.getMilliseconds();
var time = hour + ":" + minutes + ":" + seconds;
document.getElementById("datetime2").value = time;

// google sheet web app link 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxyszgmxtU7GmCf1Fdfz8q7s3q0Mk5j9wh4FpE2hKxmzeI0mKeto4ojX9RbKn1RYUt9kA/exec'

function contactusend ()
{
    var formreset = document.getElementById("contactform");
    formreset.reset();
    var modal = document.getElementById("exitmodal");
    modal.style.display = "block";
}
//form submission of contact form
// it collects name + phone + email + interest + refer code
const contactus = document.forms['contactusform']
contactus.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(contactus) })
            .then(response => contactusend())
            .catch(error => console.error('Error!', error.message))
})
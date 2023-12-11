// ---S I D E   M E N U   B A R ---
var sidemen = document.getElementById("sidemenu");

function openmenu(){
    sidemen.style.left= "0";
 }
function closemenu(){
    sidemen.style.left="-135px";
    sidemen.style.left="-135px";
 }

// --- T Y P I N G   A N I M A T I O N ---

var typed = new Typed(".typing",{
strings: [ "Web-developer","UI/UX developer", "Youtuber", "Vloger", " "],
typeSpeed:120,
backspeed:60,
loop: true
});


    const scriptURL = 'https://script.google.com/macros/s/AKfycbzuf5-aVFuvocH78iu7Xe0UmCllBOqHWJYmvMugGKhuNVswN__YNbYu8Cav68Jcus0m/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfull"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.rest()
    })
        .catch(error => console.error('Error!', error.message))
    })

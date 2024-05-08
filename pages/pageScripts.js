// For All
let currentWidth = document.documentElement.clientWidth
if(currentWidth < 930){
    document.documentElement.textContent = 'Mobile version not available'
}



//For Contact page
function whatsapp() {
    let nam = document.getElementById('name').value
    let loc = document.getElementById('location').value
    let msg = document.getElementById('msg').value

    const whatsappUrl = `https://wa.me/593727250/?text=Hello%20Marvin!%20I%20am%20${nam}%20from%20${loc}%20and%20${msg}`;
    let link = document.createElement('a');
    link.target = 'blank';
    link.href = whatsappUrl;
    link.click()
    console.log(nam)
}

function email() {
    let nam = document.getElementById('name').value
    let loc = document.getElementById('location').value
    let reason = document.getElementById('reason').value
    let msg = document.getElementById('msg').value

    const emailAddress = `mailto:mayakay257@gmail.com?subject=${reason}&body=Hello%20Marvin!%20I%20am%20${nam}%20from%20${loc}%20and%20${msg}`
    let link = document.createElement('a')
    link.target = 'blank'
    link.href = emailAddress;
    link.click()
}



//For Project page
let videos = document.querySelectorAll('video')
let NOP = document.getElementById('NOP')

NOP.innerHTML = `(${videos.length})`

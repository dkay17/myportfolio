let menu = document.getElementById('menu')
function openMenu() {
    menu.classList.add('menuIsOpen')
}
function closeMenu() {
    menu.classList.remove('menuIsOpen')
}

function download() {
    let link = document.createElement('a');
    link.href = 'extra/CV.odt'
    link.download = 'CV_Of_Marvin_Idibia'
    link.click()
}

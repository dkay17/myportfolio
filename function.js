let currentWidth = document.documentElement.clientWidth
if(currentWidth < 930){
    document.documentElement.textContent = 'Mobile version not available'
}
console.log(currentWidth)

function download() {
    let link = document.createElement('a');
    link.href = 'extra/CV.odt'
    link.download = 'CV_Of_Marvin_Idibia'
    link.click()
}

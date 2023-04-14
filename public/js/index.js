function chageBackgroundImageRandomly() {
    console.log('loaded page');
    let myDiv = document.querySelector('body');
    var image = 'https://source.unsplash.com/1600x900/?landscape'
    myDiv.style.backgroundImage = "url('" + image + "')";
}
window.addEventListener('load', chageBackgroundImageRandomly)
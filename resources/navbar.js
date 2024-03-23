let lightModeElements = Array.from(document.getElementsByClassName('lightmode'))
let darkModeElements = Array.from(document.getElementsByClassName('darkmode'))
let navbarLinks = Array.from(document.getElementsByClassName('nav-link'))
let headerSplit = document.getElementById('header-split')

const toggleHidden = element=>{
    let currStatus = element.hidden
    element.hidden = !currStatus
}

const changeColor = (element,color) => {
    element.style.color = color
}

const changeMode = ()=>{
    let lightHidden=lightModeElements[0].hidden
    let lightColor = '#fffffe';
    let darkColor = '#0b100f';
    lightModeElements.forEach(element => toggleHidden(element));
    darkModeElements.forEach(element => toggleHidden(element));
    if(lightHidden===true){
        document.body.style.backgroundColor = darkColor;
        document.body.style.color = lightColor;
        navbarLinks.forEach(element => changeColor(element,lightColor))
        headerSplit.style.borderColor = lightColor;
    }
    else{
        document.body.style.backgroundColor = lightColor;
        document.body.style.color = darkColor;
        navbarLinks.forEach(element => changeColor(element,darkColor))
        headerSplit.style.borderColor = darkColor;
    }
}

document.getElementById('to-lightmode').onclick = changeMode
document.getElementById('to-darkmode').onclick = changeMode
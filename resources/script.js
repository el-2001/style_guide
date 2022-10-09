
const colorItem = document.querySelectorAll('.color');
const pColorName = document.querySelector('.color p');

const h2FontStyleElement = document.querySelector('.fonts h2');

const fontsArray = ['"Open Sans, sans-serif"','"Oswald", sans-serif',"'VT323', monospace"];
let currentIndex = 0;
let randomColor = Math.floor(Math.random() * 360);
const fontsArrayName = ['Opens Sans', 'Oswald', 'VT323'];
const pFontStyleElement = document.querySelector('.fonts p');
for(let i = 0; i < colorItem.length; i++) {

    colorItem[i].style.flexGrow = '1';
    colorItem[i].style.backgroundColor = `hsl(${randomColor} 50% 50%)`;
    randomColor += 15 ;
    colorItem[i].children[0].innerHTML = `hsl(${randomColor} 50% 50%)`;
}

const changeColor = () =>{
    randomColor = Math.floor(Math.random() * 360);
    for(let i = 0; i < colorItem.length; i++){
        
        colorItem[i].style.backgroundColor = `hsl(${randomColor} 50% 50%)`;
        colorItem[i].children[0].innerHTML = `hsl(${randomColor} 50% 50%)`;
    randomColor += 15 ;
    }
}

setInterval(() =>{
    h2FontStyleElement.style.fontFamily = fontsArray[currentIndex];
    pFontStyleElement.innerHTML = fontsArrayName[currentIndex];
    currentIndex++;
    if(currentIndex == fontsArray.length){
        currentIndex = 0;
    }
},1000)
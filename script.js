const btnPlus = document.querySelector('.sizeUp')
const btnMinus = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const p = document.querySelector('p')


let fontSize = 36 


const functionUp = () => {
    if(fontSize >= 106) return
    fontSize += 10
    p.style.fontSize = fontSize + 'px'
}

const functionDown = () => {
    if(fontSize <= 20) return
    fontSize -= 10
    p.style.fontSize = fontSize + 'px'
}

const functionColor = () =>{
    const randomColor = Math.floor(Math.random()*167715).toString(16);
    p.style.color = "#" + randomColor;
}



btnPlus.addEventListener ('click', functionUp)
btnMinus.addEventListener('click', functionDown)
btnColor.addEventListener('click', functionColor)

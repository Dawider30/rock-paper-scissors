//grabing Elements

let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let btn = document.getElementById('startBtn')
let result = document.getElementById('photoMachine')
let chosed = document.getElementById('chosed')
let winner = document.getElementById('winner')

let value = ''
let botValue = ''

//addEventLisiners

rock.addEventListener('click',() => {
    value='rock'
    chosed.innerText='You chosed rock'
})

paper.addEventListener('click',() => {
    value='paper'
    chosed.innerText='You chosed paper'
})

scissors.addEventListener('click',() => {
    value='scissors'
    chosed.innerText='You chosed scissors'
})

btn.addEventListener('click',() => {
    let random = Math.floor(Math.random()*3) 
    if(random==1) {
        result.innerHTML='<img src="img/rock.jpg" alt="Rock" id="rock">'
        botValue = 'rock'
    } else if(random==2) {
        result.innerHTML='<img src="img/paper.jpg" alt="paper">'
        botValue = 'paper'
    }else {
        result.innerHTML='<img src="img/scissors.jpg" alt="scissors">'
        botValue = 'scissors'
    }

    if(value==botValue) {
        winner.innerText='Draw'
    } else if(value=='rock' && botValue=='paper'){
        winner.innerText='Bot wins'
    }else if(value=='paper' && botValue=='scissors') {
        winner.innerText='Bot wins'
    }else if(value=='scissors' && botValue=='rock') {
        winner.innerText='Bot wins'
    }else if(value=='rock' && botValue=='scissors'){
        winner.innerText='Player wins'
    }else if(value=='paper' && botValue=='rock') {
        winner.innerText='Player wins'
    }else if(value=='scissors' && botValue=='paper') {
        winner.innerText='Player wins'
    }
    
})



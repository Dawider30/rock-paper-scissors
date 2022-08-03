//grabbing Elements

let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let btn = document.getElementById('startBtn')
let result = document.getElementById('photoMachine')
let chosed = document.getElementById('chosed')
let winner = document.getElementById('winner')

let value = ''
let botValue = ''

let isValue = false

//addEventLisiners

rock.addEventListener('click',() => {
    value='rock'
    isValue = true
    chosed.innerText='You chosed rock'
})

paper.addEventListener('click',() => {
    value='paper'
    isValue = true
    chosed.innerText='You chosed paper'
})

scissors.addEventListener('click',() => {
    value='scissors'
    isValue = true
    chosed.innerText='You chosed scissors'
})

btn.addEventListener('click',() => {
    if(isValue) {
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

        switch(value) {

            default:
                winner.innerText='Draw'
                break

            case 'rock':

                switch (botValue) {
                    case 'rock':
                        winner.innerText='Draw'
                        break
                    case 'paper':
                        winner.innerText='Bot wins'
                        break
                    case 'scissors':
                        winner.innerText='Player wins'
                        break
                }
                break

            case 'paper':
                switch (botValue) {
                    case 'rock':
                        winner.innerText='Player wins'
                        break
                    case 'paper':
                        winner.innerText='Draw'
                        break
                    case 'scissors':
                        winner.innerText='Bot wins'
                        break
                }
                break

            case 'scissors':

                switch (botValue) {
                    case 'rock':
                        winner.innerText='Bot wins'
                        break
                    case 'paper':
                        winner.innerText='Player wins'
                        break
                    case 'scissors':
                        winner.innerText='Draw'
                        break
                }
                break
        }
    }else {
        winner.innerText='Choose your item'
    }
    
})



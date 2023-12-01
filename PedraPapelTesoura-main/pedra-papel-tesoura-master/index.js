// Importando elementos do HTML
const pedraElement=document.querySelector ("button[name=pedra]")
const pedraElement=document.querySelector ("button[name=papel]")
const tesouraElement = document.querySelector ("button[name=tesoura]")
const jogadorElement = document.querySelector ("button[name=jogador]")
const botElement = document.querySelector ("button[name=bot]")
const scoreElemnt = document.querySelector ("#socore1")
const scoreElemnt = document.querySelector ("#socore3")
const resultElement = document.querySelector ("p[name=result]")
// Itens do jogo
// Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
const itens = ["Pedra","Papel","Tesoura"]

let contadorJogador = 0
let contadorPc = 0
// Função para alterar o score
function alterarscore(){
scoreElement.innerHTML = '${contadorJogador}'
scoreElement.innerHTML = '${contadorPc}'
// Adicionando eventos de click
papelelement.addEventListener ("click",  () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/icon-paper.svg'
    switch(bot){
    case 0 :
        botElement.src = 'images/icon-rock.svg'
        resultElement.innerHTML = "Resultado : você venceu!!! :D"
        contadorJogador++
        break
    case 1 : 
        botelement.src = ' images/icon-paper.svg'
        resultElement.ineerHTML = "resultado : Empate... : ("
        breack
    case 2:
        botelement.src = 'images//icon-scissors.svg'
        resultElement.innerHTML = "resultado: Você perdeu... D:"
        contadorPc++
        break 
}
alterarScore ()
})

tesouraElemnet.addEventListener("click", () => {
var bot= math.floor(math.random() * 3)
jogadorElement.src = 'images/icon-scissors.svg'
switch(bot) {
    case 0 :
        botElement.src = 'images/icon-paper.svg'
        resultElement.innerHTML = "Resultado : você venceu!!! :D"
        break
    case 1 : 
        botelement.src = ' images/icon-rock.svg'
        resultElement.ineerHTML = "resultado : Você perdeu... :D"
        contadorJogador++
        break
    case 2:
        botelement.src = 'images//icon-scissors.svg'
        resultElement.innerHTML = "resultado: Empate... ("
        contadorPc++
        break 
    }
    alteradorScore()
    })

pedraElement.addEventListener("click", () => {
var bot = math.floor(math.random() * 3)
jogadorElement.src = 'images/icon-rock.svg'
switch(bot) {
    case 0 :
        botElement.src = 'images/icon-rock.svg'
        resultElement.innerHTML = "Resultado : Empate... : ("
        break        
    case 1 : 
        botelement.src = ' images/icon-paper.svg'
        resultElement.ineerHTML = "resultado : Você perdeu... :D"
        contadorPc++
        break
    case 2:
        botelement.src = 'images//icon-scissors.svg'
        resultElement.innerHTML = "resultado: Você venceu!!! :D"
        contadorPc++
        break
        }
        alterarscore()
    })
document.querySelector('.head').addEventListener('click', ifHeads)
document.querySelector('.tail').addEventListener('click', ifTails)


let heads = 0
let tails = 0
let array = ['coin2', 'coin3']


function ifHeads() {
  setTimeout(_=>{
  let probability = Math.floor(Math.random() * 2)

  document.querySelector('#coin').classList.add(array[probability])

  if (probability == 1) {
    document.querySelector('.result').innerText = 'You win!'
    console.log('hello')
  } else {
    document.querySelector('.result').innerText = 'Oops you lose :('
  }
  }  , 650)
  document.querySelector('#coin').classList.remove('coin2')
  document.querySelector('#coin').classList.remove('coin3')
}
function ifTails() {
  setTimeout(_=>{
  let probability = Math.floor(Math.random() * 2)
 
  document.querySelector('#coin').classList.add(array[probability])
 
  if (probability == 0) {
    document.querySelector('.result').innerText = 'You Win :)'
  } else {
    document.querySelector('.result').innerText = 'Oops you lose :('
  }
  }  , 650)
  document.querySelector('#coin').classList.remove('coin2')
  document.querySelector('#coin').classList.remove('coin3')
}


// function clear() {
//   document.querySelector('#coin').classList.remove('coin2')
//   document.querySelector('#coin').classList.remove('coin3')
// }
let total = 0
 // Event listeners and selectors
document.querySelector('#zero').addEventListener('click', makeZero)
document.querySelector('#plusThree').addEventListener('click', jumanji)
document.querySelector('#plusNine').addEventListener('click', add9)
document.querySelector('#minusTwo').addEventListener('click', sub2)
document.querySelector('#addThirteen').addEventListener('click', add13)
document.querySelector('#subThirtyOne').addEventListener('click', sub31)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function add13(){
  total = total + 13
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub31(){
  total = total - 31
  document.querySelector('#placeToPutResult').innerHTML = total
}

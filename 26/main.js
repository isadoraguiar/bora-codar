const counter = document.getElementById('counter')

function increaseCounter() {
  let value = parseInt(counter.textContent)
  value++
  counter.textContent = value.toString().padStart(2, '0')
}

function decreaseCounter() {
  let value = parseInt(counter.textContent)
  if (value > 1) {
    value--
    counter.textContent = value.toString().padStart(2, '0')
  }
}

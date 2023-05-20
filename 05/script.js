let insert = document.querySelector('.insert__value')
let result = document.querySelector('.result__value')
let buttons = document.querySelectorAll('.data')
let cancel = document.querySelector('.cancel')
let clear = document.querySelector('.clear')
let negative = document.querySelector('.negative')
let equal = document.querySelector('.equal')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    let value = e.target.dataset.num
    let qtdNumbers = insert.value

    if (qtdNumbers.length < 25) {
      insert.value += value
    }
  })
})

cancel.addEventListener('click', () => {
  let lastNumber = insert.value.slice(0, insert.value.length - 1)
  insert.value = lastNumber
})

clear.addEventListener('click', () => {
  insert.value = ''
  result.value = ''
})

equal.addEventListener('click', () => {
  if (insert.value === '') {
    result.value = ''
  } else {
    let answer = eval(insert.value)
    result.value = answer
  }
})

negative.addEventListener('click', () => {
  if (Math.sign(insert.value) === 1) {
    let insertNegative = `-${insert.value}`
    insert.value = insertNegative
  } else {
    let insertPositive = insert.value.replace('-', '')
    insert.value = insertPositive
  }
})

const sendButton = document.querySelector('input + button')
const closeButton = document.querySelector('.close')
const input = document.querySelector('input')
const main = document.querySelector('main')
const chat = document.querySelector('.chat')

function addMessage(message) {
  const today = new Date()
  const hours = today.getHours()
  const minutes = today.getMinutes()

  if (message) {
    chat.innerHTML += `
    <div class="message you">
      <span>Você - ${hours}:${minutes}</span>
      <p>${message}</p>
    </div>
  `
    main.scrollTop = main.scrollHeight
    input.value = ''
    input.focus()
  }
}

sendButton.addEventListener('click', () => addMessage(input.value))
window.addEventListener('keydown', ({ key }) => {
  if (key == 'Enter') {
    addMessage(input.value)
  }
})

closeButton.addEventListener('click', () => {
  chat.innerHTML = ''
})

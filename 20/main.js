const imagesUrl = [
  {
    url: 'https://source.unsplash.com/random/?cat',
    alt: 'Image of a cat',
    title: 'Cat Image'
  },
  {
    url: 'https://source.unsplash.com/random/?dog',
    alt: 'Image of a dog',
    title: 'Dog Image'
  },
  {
    url: 'https://source.unsplash.com/random/?monkey',
    alt: 'Image of a monkey',
    title: 'Monkey Image'
  },
  {
    url: 'https://source.unsplash.com/random/?tiger',
    alt: 'Image of a tiger',
    title: 'Tiger Image'
  },
  {
    url: 'https://source.unsplash.com/random/?zebra',
    alt: 'Image of a zebra',
    title: 'Zebra Image'
  },
  {
    url: 'https://source.unsplash.com/random/?elephant',
    alt: 'Image of an elephant',
    title: 'Elephant Image'
  },
  {
    url: 'https://source.unsplash.com/random/?panda',
    alt: 'Image of a panda',
    title: 'Panda Image'
  },
  {
    url: 'https://source.unsplash.com/random/?bird',
    alt: 'Image of a bird',
    title: 'Bird Image'
  },
  {
    url: 'https://source.unsplash.com/random/?turtle',
    alt: 'Image of a turtle',
    title: 'Turtle Image'
  },
  {
    url: 'https://source.unsplash.com/random/?lion',
    alt: 'Image of a lion',
    title: 'Lion Image'
  },
  {
    url: 'https://source.unsplash.com/random/?giraffe',
    alt: 'Image of a giraffe',
    title: 'Giraffe Image'
  },
  {
    url: 'https://source.unsplash.com/random/?penguin',
    alt: 'Image of a penguin',
    title: 'Penguin Image'
  },
  {
    url: 'https://source.unsplash.com/random/?fox',
    alt: 'Image of a fox',
    title: 'Fox Image'
  },
  {
    url: 'https://source.unsplash.com/random/?koala',
    alt: 'Image of a koala',
    title: 'Koala Image'
  },
  {
    url: 'https://source.unsplash.com/random/?kangaroo',
    alt: 'Image of a kangaroo',
    title: 'Kangaroo Image'
  }
]

const imageContainer = document.querySelector('.container')

window.addEventListener('load', () => {
  imagesUrl.map(image => {
    const imageWrapper = document.createElement('div')
    const h2 = document.createElement('h2')

    imageWrapper.classList.add('image-wrapper')
    imageWrapper.innerHTML = `<img src="${image.url}" alt="${image.alt}" class="img" />`

    h2.classList.add('title-img')
    h2.innerHTML = `${image.title}`

    imageContainer.appendChild(imageWrapper)
    imageWrapper.appendChild(h2)
  })
})

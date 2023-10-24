// https://developer.themoviedb.org/reference/movie-popular-list
const apiToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmIxMThlNzlmZTdhNWFiN2Q0ODFkZTk5Y2QzZjliYyIsInN1YiI6IjY0Y2Q5NWMzNTQ5ZGRhMDExYzI3M2UxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AIUQEfitQeYsISsRLT64blBDJm_Cf11SQQrNlVuoTQM'

async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`
    }
  }

  try {
    return fetch('https://api.themoviedb.org/3/movie/popular', options).then(
      response => response.json()
    )
  } catch (error) {
    console.log(error)
  }
}

// Puxar informações extras dos filmes
// https://api.themoviedb.org/3/movie/{movie_id}
async function getMoreInfo(movie_id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`
    }
  }

  try {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=pt-BR`,
      options
    ).then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

// Quando clicar no butão de assistir trailer
// https://api.themoviedb.org/3/movie/{movie_id}/videos
async function watch(e) {
  const movie_id = e.currentTarget.dataset.id

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`
    }
  }

  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      options
    ).then(response => response.json())

    const { results } = data

    const youtubeVideo = results.find(video => video.type === 'Trailer')

    window.open(`https://youtube.com/watch?v=${youtubeVideo.key}`, 'blank')
  } catch (error) {
    console.log(error)
  }
}

function createMovieLayout({ id, title, stars, image, time, year }) {
  return `
  <div class="movie">
    <div class="title">
      <span>${title}</span>

      <div>
        <img src="./assets/icons/star.svg" alt="Ícone de uma estrela" />
        <p>${stars}</p>
      </div>
    </div>

    <div class="poster">
      <img src="https://image.tmdb.org/t/p/w500/${image}" alt="Poster do filme ${title}" />
    </div>

    <div class="info">
      <div class="duration">
        <img src="./assets/icons/clock.svg" alt="Ícone de um relógio" />
        <span>${time}</span>
      </div>

      <div class="year">
        <img src="./assets/icons/calendar-blank.svg" alt="Ícone de um calendário" />
        <span>${year}</span>
      </div>
    </div>

    <button onclick="watch(event)" data-id="${id}">
      <img src="./assets/icons/play.svg" alt="Ícone de play" />
      <span>Assistir trailer</span>
    </button>
  </div>
  `
}

function select3Movies(results) {
  const random = () => Math.floor(Math.random() * results.length)

  let selectedMovies = new Set()
  while (selectedMovies.size < 3) {
    selectedMovies.add(results[random()].id)
  }

  return [...selectedMovies]
}

function minutesToHourMinutesAndSeconds(minutes) {
  const date = new Date(null)
  date.setMinutes(minutes)

  return date.toISOString().slice(11, 19)
}

async function generateMovieRecommendations() {
  // Pegar as sugestões de filmes da API
  const { results } = await getMovies()

  // Pegar randomicamente 3 filmes para sugestão
  const selectedMovies = select3Movies(results).map(async movie_id => {
    // pegar informações extras dos 3 filmes
    const info = await getMoreInfo(movie_id)

    // organizar os dados para ...
    const props = {
      id: info.id,
      title: info.title,
      stars: Number(info.vote_average).toFixed(1),
      image: info.poster_path,
      time: minutesToHourMinutesAndSeconds(info.runtime),
      year: info.release_date.slice(0, 4)
    }

    return createMovieLayout(props)
  })

  const moviesWithLayout = await Promise.all(selectedMovies)

  // substituir o conteúdo dos movies lá no html
  document.querySelector('.movies').innerHTML = moviesWithLayout.join('')
}

generateMovieRecommendations()

export async function getFilms() {
    let movies = await fetch ("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(data => {
          return data
      })
    return movies
  }
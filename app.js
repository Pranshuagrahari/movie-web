let btn = document.querySelector("button")
let movie = document.querySelector("input")
// let url='http://www.omdbapi.com/?t=${movie}&apikey=89af85b2';
btn.addEventListener("click", async function () {
    let result = await getMovie();
})
async function getMovie() {
    let name = movie.value;
    let url = `http://www.omdbapi.com/?t=${name}&apikey=89af85b2`
    let res = await axios.get(url).then((res) => {
        if (res.data.Response == `True`) {
            let result = document.querySelector("#result")
            let star = document.getElementById("rating")
            star.src = "favourites.png"
            result.innerHTML = " "
            result.innerHTML = `<img src=${star.src} id='rating'>`
            let poster = document.createElement('img')
            poster.className = "picture"
            poster.src = res.data.Poster;
            result.appendChild(poster)
            let title = document.createElement('div')
            title.className = "title"
            title.innerText = res.data.Title;
            result.appendChild(title)
            let rating = document.createElement('p')
            rating.className = "rate"
            rating.innerText = res.data.imdbRating;
            result.appendChild(rating)
            let actor = document.createElement("div")
            actor.className = "actor"
            actor.innerText = res.data.Actors;
            result.appendChild(actor)
            let plot = document.createElement("div")
            plot.className = "plot"
            plot.innerHTML = `Plot: <br>${res.data.Plot} <br><br>`
            result.appendChild(plot)
            let genre = document.createElement("div")
            genre.className = "genre"
            genre.innerHTML = `Genre: <br>${res.data.Genre}`
            plot.appendChild(genre)
            console.log(res.data)
        }
        else {
            alert("Movie not found")
        }

    }
    )
}

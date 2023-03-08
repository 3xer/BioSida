let movieContainer = document.querySelector(".movie-container");

let movie = JSON.parse(localStorage.getItem("movie"));

console.log("m", movie);

function showSingleMovie() {
  // get movie poster and image

  let imagesParent = document.createElement("div");
  imagesParent.classList.add("images-parent");

  // create image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  // create image
  let image = document.createElement("img");
  image.src = movie.imageUrl;
  image.alt = "big-movie-poster";

  imgContainer.appendChild(image);

  // create poster div
  let posterContainer = document.createElement("div");
  posterContainer.classList.add("poster-container");

  // create image
  let poster = document.createElement("img");
  poster.src = movie.posterUrl;
  poster.alt = "small-movie-poster";

  posterContainer.appendChild(poster);

  imagesParent.append(imgContainer, posterContainer);

  // create container for the text section

  let textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  // create movie title
  let heading = document.createElement("h1");
  heading.classList.add = "movie-title";
  heading.innerText = movie.title.toUpperCase();

  // movie genres
  let genreEl = document.createElement("h2");
  genreEl.classList.add = "movie-genre";
  genreEl.innerText = movie.genres.toString();

  // movie description
  let description = document.createElement("p");
  description.classList.add = "movie-desc";
  description.innerText = movie.description;

  // movie specs

  let movieSpecs = document.createElement("div");
  movieSpecs.classList.add = "movie-specs";

  // get director info
  let movieDir = document.createElement("span");
  movieDir.innerHTML = `<span class= 'title'>Regl</span>:${movie.director} | `;

  // get actors info
  let movieActors = document.createElement("span");
  movieActors.classList.add("movie-actors");
  movieActors.innerHTML = `<span class='title'>Skådespelare</span>:${movie.actors.toString()} | `;

  // get country info
  let movieLocation = document.createElement("span");
  movieLocation.classList.add("movie-location");
  movieLocation.innerHTML = `<span class='title'>Land:</span>${movie.country} | `;

  // get age limit
  let ageLimit = document.createElement("span");
  ageLimit.classList.add("movie-age");
  ageLimit.innerHTML = `<span class='title'>Åldesgräns:</span>${movie.ageRestriction}`;

  movieSpecs.append(movieDir, movieActors, movieLocation, ageLimit);

  // show screening times

  let ScreeningCont = document.createElement("div");
  ScreeningCont.classList.add("screening-list");

  // get the heading
  let screeningHeading = document.createElement("h2");
  screeningHeading.innerText = "VISNINGSTIDER";

  ScreeningCont.append(screeningHeading);

  // map the times
  for (let times of movie.screeningTimes) {
    let list = document.createElement("div");
    let screeningDate = document.createElement("p");
    let dateString = new Date(times)
      .toString()
      .split(" ")
      .slice(0, 4)
      .join(" ")
      .toUpperCase();
    screeningDate.innerText = dateString;

    let screeningTime = document.createElement("p");
    let dateT = new Date(times).toString().split(" ").slice(4, 5).toString();
    screeningTime.innerText = dateT;
    //screeningTime.innerText = new Date(times).toISOString().split('T')[1].split('.')[0]

    // show ticket button
    let ticketButton = document.createElement("button");
    ticketButton.classList.add = "btn";
    ticketButton.innerText = "BILJETTER";

    list.append(screeningDate, screeningTime, ticketButton);

    ScreeningCont.append(list);
  }

  textContainer.append(
    heading,
    genreEl,
    description,
    movieSpecs,
    ScreeningCont
  );
  movieContainer.append(imagesParent, textContainer);
}

showSingleMovie();

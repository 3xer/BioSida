import  movies  from   '../data/movies.json' assert { type: 'json' };

console.log('movies2', movies) 

let moviesList = document.querySelector('.movies-now')
let futureMovies = document.querySelector('.movies-later ')


class Movies {
    constructor(movieData){
        this.movieData = movieData

    }


     static displayMovies(){
        let currentYear = new Date().getFullYear()
        let previousYear = currentYear - 1
        movies.movies.forEach(movie =>{
      if(new Date(movie.releaseDate ).getFullYear() === previousYear){
                  // get the heading
       let heading = document.querySelector('.heading-1')
         heading.innerText = 'PÅ BION JUST NU' 
         Movies.createMovie(movie)
         
                
            }else{
            let heading = document.querySelector('.heading-2')
            heading.innerText = 'KOMMER SNART'
            Movies.createMovie(movie)
                
            }
            
       
        })
         
    }

    static createMovie(movie){
        // create movie card
       let movieCard = document.createElement('div')
       movieCard.className = 'movies'
        // create image div
        let imgDiv = document.createElement('div')
        imgDiv.classList.add('img-div')
 
        // create image
        let image = document.createElement('img')
        image.src = movie.imageUrl
        image.alt= 'movie-posters'
 
        imgDiv.appendChild(image)
        imgDiv.addEventListener('click', function(){
            console.log(movie)
            window.location.href = 'movie.html'
           localStorage.setItem('movie', JSON.stringify(movie))
          
    
           
        })
 
        // create title
        let title = document.createElement('p')

        title.innerText = movie.title.toUpperCase()
        movieCard.appendChild(imgDiv)
        movieCard.appendChild(title)
        
        new Date(movie.releaseDate ).getFullYear() === new Date().getFullYear()-1 ?  moviesList.appendChild(movieCard):
         futureMovies.appendChild(movieCard)

    }

}



document.addEventListener('DOMContentLoaded', Movies.displayMovies)



//Hantera startsidans filmer

//klass som hanterar renderandet av alla filmer ("MovieList")

//klass som hanterar enskild film (typ "Movie")
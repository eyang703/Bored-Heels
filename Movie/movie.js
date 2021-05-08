$(document).ready(render());
export function render() {
    let root = $('#root'); 
    root.append(`<button class="button newMovie is-large"> New Movie </button> `);
    root.on('click', '.newMovie', getMovie);
}
export async function getMovie() {
    let root = $('#root'); 
    let randNumber = Math.random(); 
    let movieNum =  (randNumber * 10); 
    movieNum = Math.round(movieNum);
    for(let i = 0; i < 6; i++) {
        movieNum = movieNum * 10; 
        randNumber = Math.random() * 10; 
        randNumber = Math.round(randNumber);
        movieNum = movieNum +randNumber; 
    }
    let movieID = 'tt' + movieNum;
  
    root.empty(); 
    root.append(`<button class="button newMovie is-large"> New Movie </button> <p> 
    If undefined, press the New Movie button until a valid suggestion appears!</h2> `);
 
        const options = {
            method: 'GET',
            url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
            params: {i: 'tt4154796', type: 'movie', r: 'json', plot: 'short'},
            headers: {
              'x-rapidapi-key': 'eabdbc6435mshb582273d87fbb75p130981jsnc085bd514882',
              'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
            }
          };
          
    //root.append(`<br> <div class="box"> ${options.data} </div>`);
          
axios.request(options).then(function (response) {
   // window.alert(response.data.Title);
    if(response.data.Title === "undefined" ) {
        window.alert("here");
        getMovie(); 
    }
    root.append(`<br> <br> 
    <section class="has-text-centered"> 
    <div class="columns"> 
        <div class="column">
            
                <img src="${response.data.Poster}" alt="Poster">
            
        </div> 

        <div class="column"> 
            <div class="card"> 
                <div class="card-content"> 
                    <div class="media"> 
                        <div class="media-content"> 
                            <p class="title is-2 has-text-centered"> 
                            ${response.data.Title}
                            </p> 
                            <br> 
                            <p class="subtitle is-6 has-text-centered"> 
                            <b> Genre: </b> ${response.data.Genre}    
                            <br> 
                            <b> Released: </b> ${response.data.Released}
                            <br> 
                            <b> Rated: </b> ${response.data.Rated}
                            <br> 
                            <b> Runtime: </b> ${response.data.Runtime}
                            <br> 
                            <b> Director: </b> ${response.data.Director}
                            <br> 
                            <b> Actors: </b> ${response.data.Actors}
                            </p> 
                        </div> 
                    </div> 
                    <div class="content"> 
                        ${response.data.Plot}
                    </div> 
                    <br> <br> 
                    <div class="content"> 
                        <p class="subtitle is-6"> 
                            <b> Awards: </b> ${response.data.Awards}
                            <br> 
                            <b> Ratings: </b> ${response.data.imdbRating}
                            <br> 
                            <b> Production: </b> ${response.data.Production}
                        </p> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
    </section> 
    `);
    //window.alert(response.data);
	//console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}



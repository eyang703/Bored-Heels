$(document).ready(render());
export function render(){
    let root = $('#root');
    root.empty();
    root.append(createPage());

    root.on('click', '.mainButton', randPage);
    root.on('click', '.homeButton', createPage)

}
function randPage() {
    let root = $('#root'); 

    root.empty(); 
    /*root.append(`
    <section class="section has-text-right id="buttons">
    <div>
        <button class="button is-info  is-large mainButton"> Press Me! </button>
        <button class="button is-info is-large homeButton"> Home </button> 
    </div>
    </section>
    `); */

    let i = Math.random(); 
    //root.append(2048-index.html);
    //spotifyPlaylist(); 
    
}

 function spotifyPlaylist() {
    let root = $('#root'); 
    root.empty(); 
    console.log("update");
    root.append(`
    <section class="section has-text-right id="buttons">
    <div>
        <button class="button is-info  is-large mainButton"> Press Me! </button>
        <button class="button is-info is-large homeButton"> Home </button> 
    </div>
    </section>
    <div class="container">        
    <form action="">
        <input type="hidden" id='hidden_token'>
        <div class="col-sm-6 form-group row mt-4 px-0">
            <label for="Genre" class="form-label col-sm-2">Genre:</label>
            <select name="" id="select_genre" class="form-control form-control-sm col-sm-10">
                <option>Select...</option>                    
            </select>
        </div>
        <div class="col-sm-6 form-group row px-0">
            <label for="Genre" class="form-label col-sm-2">Playlists:</label>
            <select name="" id="select_playlist" class="form-control form-control-sm col-sm-10">
                <option>Select...</option>                    
            </select>
        </div>                  
        <div class="col-sm-6 row form-group px-0">
            <button type="submit" id="btn_submit" class="btn btn-success col-sm-12">Search</button>
        </div>          
    </form>        
    <div class="row">
        <div class="col-sm-6 px-0">
            <div class="list-group song-list">
                
            </div>                                             
        </div>
        <div class="offset-md-1 col-sm-4" id="song-detail">                
        </div>
    </div>   
</div>`); 
console.log("here");
spotifyAppController.init(); 

}

const spotifyAPIController = (function() {
    const clientId = '9bb78d96d1de4a34a7a4ce02c3c66623'; 
    const clientSecret = 'cda38119dbbc4547af0ed3c6aec3fd54'; 
 
    const _getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
    
    const _getGenres = async (token) => {

        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.categories.items;
    }

    const _getPlaylistByGenre = async (token, genreId) => {

        const limit = 10;
        
        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.playlists.items;
    }

    const _getTracks = async (token, tracksEndPoint) => {

        const limit = 10;

        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.items;
    }

    const _getTrack = async (token, trackEndPoint) => {

        const result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data;
    }

    return {
        getToken() {
            return _getToken();
        },
        getGenres(token) {
            return _getGenres(token);
        },
        getPlaylistByGenre(token, genreId) {
            return _getPlaylistByGenre(token, genreId);
        },
        getTracks(token, tracksEndPoint) {
            return _getTracks(token, tracksEndPoint);
        },
        getTrack(token, trackEndPoint) {
            return _getTrack(token, trackEndPoint);
        }
    }

})(); 

const spotifyUIController = (function() {
    const DOMElements = {
        selectGenre: '#select_genre',
        selectPlaylist: '#select_playlist',
        buttonSubmit: '#btn_submit',
        divSongDetail: '#song-detail',
        hfToken: '#hidden_token',
        divSonglist: '.song-list'
    }

    //public methods
    return {

        //method to get input fields
        inputField() {
            return {
                genre: document.querySelector(DOMElements.selectGenre),
                playlist: document.querySelector(DOMElements.selectPlaylist),
                tracks: document.querySelector(DOMElements.divSonglist),
                submit: document.querySelector(DOMElements.buttonSubmit),
                songDetail: document.querySelector(DOMElements.divSongDetail)
            }
        },

        // need methods to create select list option
        createGenre(text, value) {
            const html = `<option value="${value}">${text}</option>`;
            document.querySelector(DOMElements.selectGenre).insertAdjacentHTML('beforeend', html);
        }, 

        createPlaylist(text, value) {
            const html = `<option value="${value}">${text}</option>`;
            document.querySelector(DOMElements.selectPlaylist).insertAdjacentHTML('beforeend', html);
        },

        // need method to create a track list group item 
        createTrack(id, name) {
            const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
            document.querySelector(DOMElements.divSonglist).insertAdjacentHTML('beforeend', html);
        },

        // need method to create the song detail
        createTrackDetail(img, title, artist) {

            const detailDiv = document.querySelector(DOMElements.divSongDetail);
            // any time user clicks a new song, we need to clear out the song detail div
            detailDiv.innerHTML = '';

            const html = 
            `
            <div class="row col-sm-12 px-0">
                <img src="${img}" alt="">        
            </div>
            <div class="row col-sm-12 px-0">
                <label for="Genre" class="form-label col-sm-12">${title}:</label>
            </div>
            <div class="row col-sm-12 px-0">
                <label for="artist" class="form-label col-sm-12">By ${artist}:</label>
            </div> 
            `;

            detailDiv.insertAdjacentHTML('beforeend', html)
        },

        resetTrackDetail() {
            this.inputField().songDetail.innerHTML = '';
        },

        resetTracks() {
            this.inputField().tracks.innerHTML = '';
            this.resetTrackDetail();
        },

        resetPlaylist() {
            this.inputField().playlist.innerHTML = '';
            this.resetTracks();
        },
        
        storeToken(value) {
            document.querySelector(DOMElements.hfToken).value = value;
        },

        getStoredToken() {
            return {
                token: document.querySelector(DOMElements.hfToken).value
            }
        }
    }

})(); 

const spotifyAppController = (function(UICtrl, APICtrl) {
    const DOMInputs = UICtrl.inputField();

    // get genres on page load
    const loadGenres = async () => {
        //get the token
        const token = await APICtrl.getToken();           
        //store the token onto the page
        UICtrl.storeToken(token);
        //get the genres
        const genres = await APICtrl.getGenres(token);
        //populate our genres select element
        genres.forEach(element => UICtrl.createGenre(element.name, element.id));
    }

    // create genre change event listener
    DOMInputs.genre.addEventListener('change', async () => {
        //reset the playlist
        UICtrl.resetPlaylist();
        //get the token that's stored on the page
        const token = UICtrl.getStoredToken().token;        
        // get the genre select field
        const genreSelect = UICtrl.inputField().genre;       
        // get the genre id associated with the selected genre
        const genreId = genreSelect.options[genreSelect.selectedIndex].value;             
        // ge the playlist based on a genre
        const playlist = await APICtrl.getPlaylistByGenre(token, genreId);       
        // create a playlist list item for every playlist returned
        playlist.forEach(p => UICtrl.createPlaylist(p.name, p.tracks.href));
    });
     

    // create submit button click event listener
    DOMInputs.submit.addEventListener('click', async (e) => {
        // prevent page reset
        e.preventDefault();
        // clear tracks
        UICtrl.resetTracks();
        //get the token
        const token = UICtrl.getStoredToken().token;        
        // get the playlist field
        const playlistSelect = UICtrl.inputField().playlist;
        // get track endpoint based on the selected playlist
        const tracksEndPoint = playlistSelect.options[playlistSelect.selectedIndex].value;
        // get the list of tracks
        const tracks = await APICtrl.getTracks(token, tracksEndPoint);
        // create a track list item
        tracks.forEach(el => UICtrl.createTrack(el.track.href, el.track.name))
        
    });

    // create song selection click event listener
    DOMInputs.tracks.addEventListener('click', async (e) => {
        // prevent page reset
        e.preventDefault();
        UICtrl.resetTrackDetail();
        // get the token
        const token = UICtrl.getStoredToken().token;
        // get the track endpoint
        const trackEndpoint = e.target.id;
        //get the track object
        const track = await APICtrl.getTrack(token, trackEndpoint);
        // load the track details
        UICtrl.createTrackDetail(track.album.images[2].url, track.name, track.artists[0].name);
    });    

    return {
        init() {
            console.log('App is starting');
            loadGenres();
        }
    }
}) (spotifyUIController, spotifyAPIController);

function createPage(){
    return $(`
        <section  id = "Feed" >
        <section class="hero is-info has-text-centered" id="Title">
        <br> <br> <br>  
        <h1 class="title is-1"> Bored Heels </h1>
            </section>
            <section class="section has-text-centered" id="buttons">
            <div class="box"> 
            <p>
                Are you a bored UNC student looking for a way to procrastinate? Search no further! 
                Press the button below to get sent to an assortment of random tarheel related sites 
                and activities! Have fun and procrastinate away!
            </p>
            </div>
            <div>
                <button class="button is-info  is-large mainButton"> Press Me! </button>
            </div>
            </section>
        </section>
        <div id="feed"> </div>`);
}
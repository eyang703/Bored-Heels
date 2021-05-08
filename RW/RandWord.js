$(document).ready(render());

export function render() {
    let root = $('#root');

    root.append(`<button class="button newWord is-large">Get a word!</button>`);
    root.on('click','.newWord', getWord);
}

async function getWord(){ 
    //window.alert('something is happening');
    let root = $('#root');
    root.empty(); 
    root.append(`<button class="button newWord is-large">Get a word!</button>`);
    const options = {
        method: 'GET',
        url: 'https://wordsapiv1.p.rapidapi.com/words/',
        params: {random: 'true'},
        headers: {
          'x-rapidapi-key': 'eabdbc6435mshb582273d87fbb75p130981jsnc085bd514882',
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
        }
      };      
      
      axios.request(options).then(function (response) {
          //window.alert(response.data.word);
          root.append(` <br> <br> 
          <div class="card">
            <div class="media-content has-text-centered"> 
                <p class="title">
                    ${response.data.word}
                </p>
                <br> 
            </div> 
            <div class="content"> 
                <b> Definition: </b> ${response.data.results[0].definition} <br> 
                <b> Part of Speech: </b> ${response.data.results[0].partOfSpeech}
            </div> 
          </div>
          <br> <br> 
          `);
      }).catch(function (error) {
          console.error(error);
      });    
    
}

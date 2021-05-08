$(document).ready(render());

export function render() {
    let root = $('#root');
    root.append(`
    <form autocomplete="off">
    <div class="field has-addons has-addons-centered" >
        <p class="control">
            <input id="top" class="input" type="text" placeholder="Your name">
        </p>
    </div>

    <div class="field has-addons has-addons-centered" >
            <p class="control">
                <input id="bottom" class="input" type="text" placeholder="Crush's Name">
            </p>
        </div>
        <br> 
        </form> 
    `);
    root.append(`<button class="button getLove is-large">Is it true love?</button>`);
    root.on('click','.getLove', getLove);
}

export async function getLove() {
    let root = $('#root');
    let top = document.getElementById('top').value; 
    let bottom = document.getElementById('bottom').value;


    const options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {fname: top , sname: bottom },
        headers: {
          'x-rapidapi-key': 'eabdbc6435mshb582273d87fbb75p130981jsnc085bd514882',
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          root.empty(); 
          root.append(`<br> <br>
          
          <p>
          ${top} and ${bottom}: 
          <br>
          ${response.data.percentage}%
          <br> 
          ${response.data.result}
          </p> 
          `);
        /*  root.append(`
          <br> <br> 
          <div class="box>
          <p>  
          <b> Percent: </b> ${response.data.percentage}
          <br> 
          <b> Message: </b> ${response.data.result}
          </p> 
          </div> `);*/
      }).catch(function (error) {
          console.error(error);
      });
}

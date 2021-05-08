$(document).ready(render());

export function render() {
    let root = $('#root');

    root.append(`<button class="button jokeButton is-large">Click Me!</button>`);
    root.on('click','.jokeButton', getDadJoke);
}

export async function getDadJoke(){ 
    let root = $('#root');
    root.empty(); 
    root.append(`<button class="button jokeButton is-large">Click Me!</button>`);
    let joke ; 
    try {
        const result = await axios.get('https://icanhazdadjoke.com', {
            headers: {
                Accept: 'application/json'
            }
        });
        root.append(`<br> <br> <div class="box"> <p> ${result.data.joke} </p> </div> `);
    } catch (e) {
        console.log(e);
    }
    
    
    return result; 
}

import Game from "2048/2048engine/game.js";

let game = new Game(4); 

let tester = {
    board: [0,0,0,0,0,0,0,0,0,2,2,4,2,2,4,2], 
    score:0, 
    won: false, 
    over: false
}
let testFail = {
    board: [32, 16, 32, 16, 8, 2, 16, 8, 32, 8, 0, 32, 8, 16, 64, 16], 
    score: 0, 
    won: false, 
    over: false
}
let testEvery ={
    board: [0, 0, 0, 0, 0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], 
    score: 0, 
    won: false, 
    over: false
}
function updateBoard(game){
    $('#grid0').text(game.board[0]); 
    $('#grid1').text(game.board[1]); 
    $('#grid2').text(game.board[2]); 
    $('#grid3').text(game.board[3]); 
    $('#grid4').text(game.board[4]); 
    $('#grid5').text(game.board[5]); 
    $('#grid6').text(game.board[6]); 
    $('#grid7').text(game.board[7]); 
    $('#grid8').text(game.board[8]); 
    $('#grid9').text(game.board[9]); 
    $('#grid10').text(game.board[10]); 
    $('#grid11').text(game.board[11]); 
    $('#grid12').text(game.board[12]); 
    $('#grid13').text(game.board[13]); 
    $('#grid14').text(game.board[14]); 
    $('#grid15').text(game.board[15]); 

    $('#grid0').css('background-color', updateColor(game.board[0])); 
    $('#grid1').css('background-color', updateColor(game.board[1])); 
    $('#grid2').css('background-color', updateColor(game.board[2])); 
    $('#grid3').css('background-color', updateColor(game.board[3])); 
    $('#grid4').css('background-color', updateColor(game.board[4])); 
    $('#grid5').css('background-color', updateColor(game.board[5])); 
    $('#grid6').css('background-color', updateColor(game.board[6])); 
    $('#grid7').css('background-color', updateColor(game.board[7])); 
    $('#grid8').css('background-color', updateColor(game.board[8])); 
    $('#grid9').css('background-color', updateColor(game.board[9])); 
    $('#grid10').css('background-color', updateColor(game.board[10])); 
    $('#grid11').css('background-color', updateColor(game.board[11])); 
    $('#grid12').css('background-color', updateColor(game.board[12])); 
    $('#grid13').css('background-color', updateColor(game.board[13])); 
    $('#grid14').css('background-color', updateColor(game.board[14])); 
    $('#grid15').css('background-color', updateColor(game.board[15])); 

    $('#grid0').css('color', updateFontColor(game.board[0]));
    $('#grid1').css('color', updateFontColor(game.board[1]));
    $('#grid2').css('color', updateFontColor(game.board[2]));
    $('#grid3').css('color', updateFontColor(game.board[3]));
    $('#grid4').css('color', updateFontColor(game.board[4]));
    $('#grid5').css('color', updateFontColor(game.board[5]));
    $('#grid6').css('color', updateFontColor(game.board[6]));
    $('#grid7').css('color', updateFontColor(game.board[7]));
    $('#grid8').css('color', updateFontColor(game.board[8]));
    $('#grid9').css('color', updateFontColor(game.board[9]));
    $('#grid10').css('color', updateFontColor(game.board[10]));
    $('#grid11').css('color', updateFontColor(game.board[11]));
    $('#grid12').css('color', updateFontColor(game.board[12]));
    $('#grid13').css('color', updateFontColor(game.board[13]));
    $('#grid14').css('color', updateFontColor(game.board[14]));
    $('#grid15').css('color', updateFontColor(game.board[15]));



}
function updateFontColor(value) {
    switch(value) {
        case 0: return '#ffffff'; 
        case 2: return '#000000'; 
        case 4: return '#000000'; 
        case 8: return '#000000'; 
        case 16: return '#000000'; 
        case 32: return '#000000'; 
        case 64: return '#000000'; 
        case 128: return '#000000'; 
        case 256: return '#000000'; 
        case 512: return '#000000'; 
        case 1024: return '#000000';
        case 2048: return '#000000'; 
    }
}
function updateColor(value) {
    switch(value) {
        case 0: return '#ffffff';
        case 2: return '#ACE7FF'; 
        case 4: return '#FFFFB5'; 
        case 8: return '#CBAACB'; 
        case 16: return '#A2E1DB'; 
        case 32: return '#FFDBCC'; 
        case 64: return '#D4F0F0'; 
        case 128: return '#F3B0C3'; 
        case 256: return '#FFC8A2'; 
        case 512: return '#AFF8DB'; 
        case 1024: return '#FEE1E8'; 
        case 2048: return '#DBFFD6'; 
    }
}
function reset() {
    game.setupNewGame(); 
    updateBoard(game); 
    $('#score').text("Score: " + game.score); 
    $('#win').text('');
    $('#over').text('');
}
function won(game) {
    if(game.won){
        $('#win').text('Congrats! You beat 2048 and won!');
    }
}
function over(game){
    if(game.over){
        $('#over').text('There are no moves left. You lost!');
    }
}
$(document).on('keydown', k => {
    if(k.keyCode == 38) {
        game.move('up');
    }
    if(k.keyCode == 40) {
        game.move('down');
    }
    if(k.keyCode == 37) {
        game.move('left'); 
    }
    if(k.keyCode == 39) {
        game.move('right'); 
    }
    updateBoard(game); 
    $('#score').text("Score: " + game.score); 
    won(game); 
    over(game); 
}) ;


$('#reset').click(reset); 

updateBoard(game); 

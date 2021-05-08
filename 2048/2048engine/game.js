/*
Add your code for Game here
 */
export default class Game {
    constructor(size){
        let emptyArr = new Array(size**2).fill(0); 

        this.board = emptyArr; 
        this.score = 0; 
        this.won = false; 
        this.over = false; 
        this.size = size;

        this.wins = []; 
        this.losses = []; 
        this.moves = []; 
        
        this.addPiece(); 
        this.addPiece(); 

        this.gameState = {
            board: this.board, 
            score: this.score, 
            won: this.won, 
            over: this.false
        }
    }

    setupNewGame() {
        let temp = new Array(this.size**2).fill(0); 
        this.board = temp; 
        this.won = false; 
        this.over = false; 
        this.score = 0; 
        this.addPiece(); 
        this.addPiece(); 
        this.gameState = {
            board: this.board, 
            score: this.score, 
            won: this.won,
            over: this.over
        }
    }

    loadGame(gameState) {
        this.board = gameState.board; 
        this.score = gameState.score; 
        this.won = gameState.won; 
        this.over = gameState.over; 
        this.gameState = gameState; 
    }

    addPiece() {
        let i = Math.random(); 
        let num = 0; 
        if(i >= .1) {
            num = 2; 
        } else {
            num = 4; 
        }

        let open = []; 
        let idx = 0; 
        let amt = 0; 
        
        this.board.forEach(pos => {
            if(pos == 0) {
                idx = open.length; 
                open[idx] = amt; 
            }
            amt += 1; 
        }); 
        let newPos = Math.floor(i * open.length); 
        this.board[open[newPos]] = num; 
    }

    move(direction) {
        let original = this.board.slice(0); 
        if(direction == "up") {
            this.board = this.rotateUp(original); 
        } else if(direction == "down") {
            this.board = this.rotateDown(original);  
        } else if(direction == "right") {
            this.board = this.rotateRight(original); 
        } else if(direction == "left") {
            this.board = this.rotateLeft(original);
        }

        this.addPiece(); 

        for(let i = 0; i < this.board.length; i++) { // check to see if won
            if(this.board[i] == 2048){
                if(!this.won){
                    this.won = true; 
                    this.call(this.wins); 
                    // alert that it is won
                }
            }
        }
       
        this.call(this.moves);
        this.hasLost(); 
        this.updateGameState(); 
    }

    updateGameState() {
        this.gameState = {
            board: this.board, 
            score: this.score, 
            won: this.won, 
            over: this.over
        }
    }

   rotateUp(board) {
        let b = []; 
        for(let i = 0; i < this.size; i++){ // switching rows with columns 
            let temp = []; 
            for(let j = 0; j < this.size; j++){
                temp = temp.concat(board.slice(j * this.size + i, j * this.size + 1 + i));
            }
            b = b.concat(temp); 
        } // updated board held in b
    
        for(let i = 0; i < b.length; i += this.size) {
            let row = b.splice(i, this.size); 
            let temp = row.filter(x => x); 
            let empty = new Array(this.size - temp.length).fill(0);
            temp.concat(empty); 
            temp = this.addPieces(temp); 
            b.splice(i, 0, ...temp);
        }

        let b2 = []; 
        for(let i = 0; i < this.size; i++){ // switching rows with columns 
            let temp = []; 
            for(let j = 0; j < this.size; j++){
                temp = temp.concat(b.slice(j * this.size + i, j * this.size + 1 + i));
            }
            b2 = b2.concat(temp); 
        }
        return b2; 
    } 

   rotateRight(board) {
        let b = []; 
        for(let i = 0; i < board.length; i += this.size){
            let row = board.slice(i, i + this.size); 
            b = b.concat(row.reverse()); 
        }

        for(let i = 0; i < b.length; i += this.size) {
            let row = b.splice(i, this.size); 
            let temp = row.filter(x => x); 
            let empty = new Array(this.size - temp.length).fill(0);
            temp.concat(empty); 
            temp = this.addPieces(temp); 
            b.splice(i, 0, ...temp);
        }

        let b2 = []; 
        for(let i = 0; i < b.length; i += this.size){
            let row = b.slice(i, i + this.size); 
            b2 = b2.concat(row.reverse()); 
        }

        return b2; 
    } 


    rotateDown(board) {
        let b = []; 
        for(let i = 0; i < this.size; i++){
            let temp = []; 
            for(let j = 0; j < this.size; j++){
                temp = temp.concat(board.slice(j * this.size + i, j * this.size + 1 + i));
            }
            b = b.concat(temp); 
        } // b holds updated board 

       let b2 = []; 
       for(let i = 0; i < b.length; i += this.size){
            let row = b.slice(i, i + this.size); 
            b2 = b2.concat(row.reverse()); 
        } // now temp2 holds the updated board 
        
        for(let i = 0; i < b2.length; i += this.size) {
            let row = b2.splice(i, this.size); 
            let temp3 = row.filter(x => x); 
            let empty = new Array(this.size - temp3.length).fill(0);
            temp3.concat(empty); 
            temp3 = this.addPieces(temp3); 
            b2.splice(i, 0, ...temp3);
        } // temp2 still holds board 

        let temp4 = []; 
        for(let i = 0; i < b2.length; i += this.size){
            let row = b2.slice(i, i + this.size); 
            temp4 = temp4.concat(row.reverse()); 
        } // temp4 holds board 
        

        let res = [];  
        for(let i = 0; i < this.size; i++){
            let temp5 = []; 
            for(let j = 0; j < this.size; j++){
                temp5 = temp5.concat(temp4.slice(j * this.size + i, j * this.size + 1 + i));
            }
            res = res.concat(temp5); 
        }
        return res; 
    } 

    rotateLeft(board){
        let b = board; 
        for(let i = 0; i < b.length; i += this.size) {
            let row = b.splice(i, this.size); 
            let temp = row.filter(x => x); 
            let empty = new Array(this.size - temp.length).fill(0);
            temp.concat(empty); 
            temp = this.addPieces(temp); 
            b.splice(i, 0, ...temp);
        }
        return b; 
    }

    call(a) {
        for(let i = 0; i < a.length; i++) {
            a[i](this.gameState);
        }
    }

    hasLost() {
        let temp = this.board.slice(0);
        if(this.isBoardFull(temp)){ // check to see if lost 
            for(let i = 0; i < temp.length; i += this.size){
                let row = temp.slice(i, i + this.size);
                if(this.movesPossible(row)){
                    return false; 
                }
            }
        
            let b = []; 
            for(let i = 0; i < this.size; i++){
                let temp2 = []; 
                for(let j = 0; j < this.size; j++){
                    temp2 = temp2.concat(temp.slice(j * this.size + i, j * this.size + 1 + i));
                }
                b = b.concat(temp2); 
            }
            temp = b; 

            for(let i = 0; i < temp.length; i += this.size){
                let row = temp.slice(i, i + this.size); 
                if(this.movesPossible(row)){
                    return false; 
                }
            }
            if(!this.over){
                this.over = true; 
                this.call(this.losses); 
                return true; 
            }
            return true;
        }
        return false; 
    }
    
    addPieces(row) { // adds vals together if applicable 
        let added = false; 
        let res = []; 

        for(let i = 0; i < row.length; i++) {
            if(!added && (i == (row.length - 1))) {
                res.push(row[i]); 
                added = false; 
                break; 
            }
            if(!added && row[i] == row[i+1]) {
                res.push(row[i] + row[i+1]); 
                this.score += (row[i] + row[i+1]); 
                added = true; 
            } else if (added) {
                added = false; 
            } else {
                res.push(row[i]); 
                added = false; 
            }
        }
        let empty = new Array(this.size - res.length).fill(0); 
        return res.concat(empty); 
    }

    movesPossible(row){
        for(let i = 0; i < row.length - 1; i++){
            if(row[i] == row[i + 1]){
                return true;
            }
        }
        return false; 
    }

    isBoardFull(board){
        for(let i = 0; i < board.length; i++){
            if(board[i] == 0){
                return false;
            }
        }
        return true; 
    }

    validMove(idx1, idx2) {
        if(board[idx1] == 0 || board[idx2] == 0) {
            return false; 
        }
        if(board[idx1] == board[idx2]){
            return true;
        }
    }

    toString() {
        const res = ""; 
        res += "Score: " + this.score + " won: " + this.won + " over: " + this.over;
        const counter = 0; 
        this.board.forEach(pos=> {
            res += `[${pos}]`;
            if(counter % this.size == this.size - 1) {
                res += '\n'; 
            }
            counter += 1; 
        });
        return res; 
    }

    onMove(callback) {
        const idx = this.moves.length; 
        this.moves[idx] = callback; 
    }

    onWin(callback) {
        const idx = this.wins.length; 
        this.wins[idx] = callback; 
    }

    onLose(callback) {
        const idx = this.losses.length; 
        this.losses[idx] = callback; 
    }

    getGameState() {
        return {
            "board": this.board, 
            "score": this.score, 
            "won": this.won, 
            "over": this.over
        }
    }
}
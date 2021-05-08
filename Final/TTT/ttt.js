function renderGame() {

	
	var b1 = document.getElementById("b1").value;
	var b2 = document.getElementById("b2").value;
	var b3 = document.getElementById("b3").value;
	var b4 = document.getElementById("b4").value;
	var b5 = document.getElementById("b5").value;
	var b6 = document.getElementById("b6").value;
	var b7 = document.getElementById("b7").value;
	var b8 = document.getElementById("b8").value;
	var b9 = document.getElementById("b9").value;

	if(b1 == 'X' && b2 == 'X' && b3 == 'X') {
		document.getElementById('win').innerHTML = "Player X won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if (b1 == 'X' && b4 == 'X' &&  b7 == 'X') {
		document.getElementById('win').innerHTML = "Player X won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if (b7 == 'X' && b8 == 'X' &&  b9 == 'X') {
		document.getElementById('win').innerHTML = "Player X won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}

	}
	else if (b3 == 'X' && b6 == 'X'  &&  b9 == 'X') {
		document.getElementById('win').innerHTML = "Player X won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}

	}
	else if (b1 == 'X' && b5 == 'X' &&  b9 == 'X') {
		document.getElementById('win').innerHTML = "Player X won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}

	}
	else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
		document.getElementById('win').innerHTML = "Player X won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if ( b2 == 'X' && b5 == 'X' && b8 == 'X') {
		document.getElementById('win').innerHTML = "Player X won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if ( b4 == 'X' && b5 == 'X' && b6 == 'X') {
		document.getElementById('win').innerHTML = "Player X won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}

	else if (b1 == '0' && b2 == '0' &&  b3 == '0') {
		document.getElementById('win').innerHTML = "Player 0 won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
		
	}
	else if (b1 == '0' && b4 == '0' &&  b7 == '0') {
		document.getElementById('win').innerHTML = "Player 0 won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if ((b7 == '0' &&b8 == '0' && b9 == '0')) {
		document.getElementById('win').innerHTML = "Player 0 won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if (b3 == '0' && b6 == '0' && b9 == '0') {
		document.getElementById('win').innerHTML = "Player 0 won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if (b1 == '0' && b5 == '0' &&  b9 == '0') {
		document.getElementById('win').innerHTML = "Player 0 won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if (b3 == '0' && b5 == '0' && b7 == '0') {
		document.getElementById('win').innerHTML = "Player 0 won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if (b2 == '0' && b5 == '0' && b8 == '0') {
		document.getElementById('win').innerHTML = "Player 0 won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}
	else if (b4 == '0' && b5 == '0' && b6 == '0') {
		document.getElementById('win').innerHTML = "Player 0 won!";
		for(let i = 1; i <= 9; i++) {
			document.getElementById('b' + i).disabled = true; 
		}
	}


	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('lose').innerHTML = "There is a tie :( Press Reset to play again!";
		
	}
	else {

		if (flag == 1) {
			document.getElementById('print').innerHTML = "Player X Turn ";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}


function reset() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
}


flag = 1;

function box_update(id) {
	if(flag == 1) {
		document.getElementById(id).value = "X";
		document.getElementById(id).disabled = true; 
		flag = 0; 
	} else {
		document.getElementById(id).value = "0"; 
		document.getElementById(id).disabled = true; 
		flag = 1; 
	}
}

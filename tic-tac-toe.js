const turn = document.querySelector("#turn");
const zone = document.querySelectorAll(".area");
let currentTurn = 'X';
let board = [['a','a','a'],['a','a','a'],['a','a','a']];
let win = 'a';
zone.forEach((e)=>{
	e.addEventListener("click",function(){
		if(e.textContent === ""){
			e.firstChild.textContent = currentTurn;
			let list = e.classList;
			if(currentTurn === 'X'){
				e.firstChild.style.color = 'red';
				let col = parseInt(list.item(1)) - 1;
				let row = 0
				if(col > 2 && col < 6){
					row = 1;
					col -= 3;
				}
				if(col > 5){
					row = 2;
					col -= 6;
				}
				board[row][col] = 'X';
				currentTurn = 'O';
				turn.textContent = "player 2";
			}
			else {
				e.firstChild.style.color = 'orange';
				let col = parseInt(list.item(1)) - 1;
				let row = 0
				if(col > 2 && col < 6){
					row = 1;
					col -= 3;
				}
				if(col > 5){
					row = 2;
					col -= 6;
				}
				board[row][col] = 'O';
				currentTurn = 'X';
				turn.textContent = "player 1";
			}
		}
		end();
		if(win === 'X'){
			setTimeout(function(){
				alert("player 1 won!");
				location.reload();
			},100);		
		}
		if(win === 'O'){
			setTimeout(function(){
				alert("player 2 won!");
				location.reload();
			},100);			
		}
		if((!board[0].includes('a'))&&(!board[1].includes('a'))&&(!board[2].includes('a'))){
			setTimeout(function(){
				alert("draw!");
				location.reload();
			},100);	
		}
	});
});

function end(){
	for(let i = 0; i < board.length; i++){
		if (board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X'){
			win = 'X';
		}
	}
	for(let i = 0; i < board.length; i++){
		if (board[i][0] === 'O' && board[i][1] === 'O' && board[i][2] === 'O'){
			win = 'O';
		}
	}
	for(let i = 0; i < board.length; i++){
		if (board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X'){
			win = 'X';
		}
	}
	for(let i = 0; i < board.length; i++){
		if (board[0][i] === 'O' && board[1][i] === 'O' && board[2][i] === 'O'){
			win = 'O';
		}
	}
	if ((board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') || (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O')){
		win = 'O';
	}
	if ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')){
		win = 'X';
	}
}
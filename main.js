function TicTacController($scope) {

	var cells = ['','','','','','','','',''];
	var currentMark = 'o';
	var empty = true;
	moves = 1;
	gameover = false;
	grid = [
			[ "" , "" , "" ],
			[ "" , "" , "" ],
			[ "" , "" , "" ]
	];

	$scope.cells = cells;
	
	$scope.drawMark = function(index) {
		if (cells[index] == '') {
			if (currentMark == 'o') {
				$scope.cells[index] = 'x';
				currentMark = 'x';
			} else {
				$scope.cells[index] = 'o';
				currentMark = 'o';
			}
		}

		var row = Math.floor(index/3);
		var column = (index % 3);
		grid[row][column] = currentMark;
		evaluateWin();
	}

var evaluateWin = function() {
	if (grid[0][0] == "x" && grid[0][1] == "x" && grid[0][2] == "x") {
		xwin();
	} else if (grid[1][0] == "x" && grid[1][1] == "x" && grid[1][2] == "x") {
		xwin();
	} else if (grid[2][0] == "x" && grid[2][1] == "x" && grid[2][2] == "x") {
		xwin();
	} else if (grid[0][0] == "x" && grid[1][0] == "x" && grid[2][0] == "x") {
		xwin();
	} else if (grid[0][1] == "x" && grid[1][1] == "x" && grid[2][1] == "x") {
		xwin();
	} else if (grid[0][2] == "x" && grid[1][2] == "x" && grid[2][2] == "x") {
		xwin();
	} else if (grid[0][0] == "x" && grid[1][1] == "x" && grid[2][2] == "x") {
		xwin();
	} else if (grid[0][2] == "x" && grid[1][1] == "x" && grid[2][0] == "x") {
		xwin();
	} else if (grid[0][0] == "o" && grid[0][1] == "o" && grid[0][2] == "o") {
		owin();
	} else if (grid[1][0] == "o" && grid[1][1] == "o" && grid[1][2] == "o") {
		owin();
	} else if (grid[2][0] == "o" && grid[2][1] == "o" && grid[2][2] == "o") {
		owin();
	} else if (grid[0][0] == "o" && grid[1][0] == "o" && grid[2][0] == "o") {
		owin();
	} else if (grid[0][1] == "o" && grid[1][1] == "o" && grid[2][1] == "o") {
		owin();
	} else if (grid[0][2] == "o" && grid[1][2] == "o" && grid[2][2] == "o") {
		owin();
	} else if (grid[0][0] == "o" && grid[1][1] == "o" && grid[2][2] == "o") {
		owin();
	} else if (grid[0][2] == "o" && grid[1][1] == "o" && grid[2][0] == "o") {
		owin();
	} else if (moves == 9) {
		var messagebox = document.getElementById('message');
		messagebox.innerHTML = "draw...";
		gameover = true;
	} else {
		moves += 1;
	}
}

var xwin = function () {
	var messagebox = document.getElementById('message');
	messagebox.innerHTML = "x wins!";
	gameover = true;
}

var owin = function () {
	var messagebox = document.getElementById('message');
	messagebox.innerHTML = "o wins!";
	gameover = true;
}

var clearboard = function() {
	console.log('you tried to clear the board');
	var wholeboard = document.getElementsByClassName('innerbox');
	for (var q = 0; q < wholeboard.length; q++) {
		wholeboard[q].innerHTML = "";
	}
	var messageboard = document.getElementById('message');
	messageboard.innerHTML = "";
	initialize();
};


}









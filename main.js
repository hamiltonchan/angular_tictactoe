function TicTacController($scope) {

	var cells = ['','','','','','','','',''];
	currentMark = { val:false };
	empty = true;

	$scope.cells = cells;
	
	$scope.drawMark = function(index) {
		empty = (cells[index]=='');
		$scope.cells[index] = (empty ? ((currentMark.val = !currentMark.val) ? 'x' : 'o') : cells[index]);
	}








}


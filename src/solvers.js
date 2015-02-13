/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({n:n});
  var found = false;

  var findSolution = function(row) {
    for ( var j = 0; j < n; j++ ) {
      // place the rook
      board.attributes[row][j] = 1;

      if ( !board.hasAnyRooksConflicts() ) {

        if ( row === (n - 1) ) {  // no conflicts and on last row = solution
          // we have a solution!
          if(!found){
            for( var i = 0; i < n; i++){
              var rows = board.get(i);
              solution.push(rows.slice());
              found = true; 
            }
          }
          board.attributes[row][j] = 0; // and unset again to check next solution
          return;
        }
        // keep doing that thing:
        findSolution(row + 1);
      }
      // if conflict, take the rook back off
      board.attributes[row][j] = 0; // and unset again to check next solution

    }
    return;
  };
  findSolution(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {


  var solutionCount = 0;
  var board = new Board({n:n});

  // var findSolution = function(row) {
  //   if ( row === n ) {
  //     solutionCount++;
  //     return solutionCount;
  //   }

  //   for ( var i = 0; i < n; i++ ) {
  //     board.togglePiece(row, i);
  //     if ( !board.hasAnyRooksConflicts() ) {
  //       findSolution(row + 1);
  //     }
  //     board.togglePiece(row, i);
  //   }
  // };

  var findSolution = function(row) {
    for ( var j = 0; j < n; j++ ) {
      // place the rook
      board.attributes[row][j] = 1;

      if ( !board.hasAnyRooksConflicts() ) {

        if ( row === (n - 1) ) {  // no conflicts and on last row = solution
          // we have a solution!
          solutionCount++;
          board.attributes[row][j] = 0; // and unset again to check next solution
          return;
        }
        // keep doing that thing:
        findSolution(row + 1);
      }
      // if conflict, take the rook back off
      board.attributes[row][j] = 0; // and unset again to check next solution

    }
    return;
  };

  findSolution(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount + '\n');
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme

  var board = new Board({n:n});
  var found = false;
  if(n === 2 || n === 3){
    for( var i = 0; i < n; i++){
      var rows = board.get(i);
      solution.push(rows.slice());
    }
    return solution;

  }
  var findSolution = function(row) {
    for ( var j = 0; j < n; j++ ) {
      // place the rook
      board.attributes[row][j] = 1;

      if(!found){
        if ( !board.hasAnyQueensConflicts() ) {

          if ( row === (n - 1) ) {  // no conflicts and on last row = solution
            // we have a solution
              for( var i = 0; i < n; i++){
                var rows = board.get(i);
                solution.push(rows.slice());
                found = true; 
              }
            board.attributes[row][j] = 0; // and unset again to check next solution
            return;
          }
          // keep doing that thing:
          findSolution(row + 1);
        }
      }
      // if conflict, take the rook back off
      board.attributes[row][j] = 0; // and unset again to check next solution

    }
    return;
  };
  findSolution(0);
  console.log('>>Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});
  if(n === 0){
    return 1;
  }

  var findSolution = function(row) {
    for ( var j = 0; j < n; j++ ) {
      // place the rook
      board.attributes[row][j] = 1;

      if ( !board.hasAnyQueensConflicts() ) {

        if ( row === (n - 1) ) {  // no conflicts and on last row = solution
          // we have a solution!
          solutionCount++;
          board.attributes[row][j] = 0; // and unset again to check next solution
          return;
        }
        // keep doing that thing:
        findSolution(row + 1);
      }
      // if conflict, take the rook back off
      board.attributes[row][j] = 0; // and unset again to check next solution

    }
    return;
  };

  findSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

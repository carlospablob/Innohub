/*

URL: https://www.codewars.com/kata/island-count/javascript


Given a string representation of a 2d map, return the number of islands in the map.

Land spaces are denoted by a zero.
Water is denoted by a dot.
Rows are denoted by newlines ('\n').
Two land spaces are considered connected if they are adjacent (horizontal or vertical, but not diagonal).
Too easy? Try solving it without recursion..

##Example:

You may be given the string ".0...\n.00..\n....0" as input.

This correlates to a grid, like this:

.0...
.00..
....0



*/

function splitIslands (cadena) {
    let arrayRows = cadena.split('\n');
    let arrayChar = [];
    let total = 0;

    for (let i = 0; i < arrayRows.length; i++) {
        arrayChar[i] = arrayRows[i].split('');
        for (let c = 0; c < arrayChar[i].length; c++) {
            if (arrayChar[i][c] == '0') {
                if ((i == 0 || arrayChar[i - 1][c] == '.') && (c == 0 || arrayRows[i][c - 1] == '.')) {
                    total ++;
                }
            }
        }
    }
    return total;
};


console.log(splitIslands('.0...\n.00..\n....0'));

console.log(splitIslands('0...0\n..0..\n0...0'));

console.log(splitIslands('..000.\n..000.\n..000.\n.0....\n..000.'));




Given a 2D board (array of arrays) and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.

board =
[
 ['A','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']
]

word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
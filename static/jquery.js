
    var table = $("<table>");
    for (var i = 0; i < 5; i++) {
        var row = $("<tr>");
        for (var j = 0; j < 5; j++) {
            var cell = $("<td>").text(board[i][j]);
            row.append(cell);
        }
        table.append(row);
    }
    $("#board-container").append(table);


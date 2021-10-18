function checkInfoComputer() {
    $.ajax({
        url: "http://localhost:8080/api/Computer/all",
        type: "GET",
        dataType: "JSON",
        success:function(answer) {
            console.log(answer);
            printComputerAnswer(answer);
        }
    });
}

function printComputerAnswer(answer) {
    let computerTable = "<table>";
    for (let i = 0; i < answer.length; i++) {
        computerTable += "<tr>";
        computerTable += "<td>" + answer[i].id + "</td>";
        computerTable += "<td>" + answer[i].name + "</td>";
        computerTable += "<td>" + answer[i].brand + "</td>";
        computerTable += "<td>" + answer[i].year + "</td>";
        computerTable += "<td>" + answer[i].description + "</td>";
        computerTable += "</tr>";
    }
    computerTable += "</table>";
    $("#tableComputer").html(computerTable);
}

function saveInfoComputer() {
    let dataComputer = {
        name:$("#com-name").val(),
        brand:$("#com-brand").val(),
        year:$("#com-year").val(),
        description:$("#com-desc").val()
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        data: JSON.stringify(dataComputer),

        url: "http://localhost:8080/api/Computer/save",

        success:function(response) {
            console.log(response);
            console.log("Computer saved successfully.");
            alert("Computer saved successfully.");
            window.location.reload()
        },

        error:function(jqXHR, textStatus, erroThrown) {
            window.location.reload()
            alert("Unsaved Computer.");
        }
    });
}
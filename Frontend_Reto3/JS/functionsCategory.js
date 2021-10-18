function checkInfoCategory() {
    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type: "GET",
        dataType: "JSON",
        success:function(answer) {
            console.log(answer);
            printCategoryAnswer(answer);
        }
    });
}

function printCategoryAnswer(answer) {
    let myTable = "<table>";
    for (i = 0; i < answer.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + answer[i].name + "</td>";
        myTable += "<td>" + answer[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultComputer").html(myTable);
}

function saveInfoCategory() {
    let dataInfo = {
        name:$("#cat-name").val(),
        description:$("#cat-desc").val()
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        data: JSON.stringify(dataInfo),

        url: "http://localhost:8080/api/Category/save",

        success:function(response) {
            console.log(response);
            console.log("Data saved successfully.");
            alert("Data saved successfully.");
            window.location.reload()
        },

        error:function(jqXHR, textStatus, erroThrown) {
            window.location.reload()
            alert("Unsaved data.");
        }
    });
}
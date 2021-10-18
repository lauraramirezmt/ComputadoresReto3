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
    let categoryTable = "<table>";
    for (let i = 0; i < answer.length; i++) {
        categoryTable += "<tr>";
        categoryTable += "<td>" + answer[i].id + "</td>";
        categoryTable += "<td>" + answer[i].name + "</td>";
        categoryTable += "<td>" + answer[i].description + "</td>";
        categoryTable += "</tr>";
    }
    categoryTable += "</table>";
    $("#tableCategory").html(categoryTable);
}

function saveInfoCategory() {
    let dataCategory = {
        name:$("#cat-name").val(),
        description:$("#cat-desc").val()
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        data: JSON.stringify(dataCategory),

        url: "http://localhost:8080/api/Category/save",

        success:function(response) {
            console.log(response);
            console.log("Category saved successfully.");
            alert("Category saved successfully.");
            window.location.reload()
        },

        error:function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Unsaved Category.");
        }
    });
}
function checkInfoClient() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        dataType: "JSON",
        success:function(answer) {
            console.log(answer);
            printClientAnswer(answer);
        }
    });
}

function printClientAnswer(answer) {
    let clientTable = "<table>";
    for (let i = 0; i < answer.length; i++) {
        clientTable += "<tr>";
        clientTable += "<td>" + answer[i].idClient + "</td>";
        clientTable += "<td>" + answer[i].email + "</td>";
        clientTable += "<td>" + answer[i].password + "</td>";
        clientTable += "<td>" + answer[i].name + "</td>";
        clientTable += "<td>" + answer[i].age + "</td>";
        clientTable += "</tr>";
    }
    clientTable += "</table>";
    $("#tableClient").html(clientTable);
}

function saveInfoClient() {
    let dataClient = {
        email:$("#cli-email").val(),
        password:$("#cli-pass").val(),
        name:$("#cli-name").val(),
        age:$("#cli-age").val()
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        data: JSON.stringify(dataClient),

        url: "http://localhost:8080/api/Client/save",

        success:function(response) {
            console.log(response);
            console.log("Client saved successfully.");
            alert("Client saved successfully.");
            window.location.reload()
        },

        erro:function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Unsaved Client.");
        }
    });
}
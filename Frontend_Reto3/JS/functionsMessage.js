function checkInfoMessage() {
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        dataType: "JSON",
        success:function(answer) {
            console.log(answer);
            printMessageAnswer(answer);
        }
    });
}

function printMessageAnswer(answer) {
    let messageTable = "<table>";
    for (let i = 0; i < answer.length; i++) {
        messageTable += "<tr>";
        messageTable += "<td>" + answer[i].idMessage + "</td>";
        messageTable += "<td>" + answer[i].messageText + "</td>";
        messageTable += "</tr>";
    }
    messageTable += "</table>";
    $("#tableMessage").html(messageTable);
}

function saveInfoMessage() {
    let dataMessage = {
        messageText:$("#mess-text").val()
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        data: JSON.stringify(dataMessage),

        url: "http://localhost:8080/api/Message/save",

        success:function(response) {
            console.log(response);
            console.log("Message saved successfully.");
            alert("Message saved successfully.");
            window.location.reload()
        },

        error:function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Unsaved Message.");
        }
    });
}
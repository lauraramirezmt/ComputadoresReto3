function checkInfoReservation() {
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        dataType: "JSON",
        success:function(answer) {
            console.log(answer);
            printReservationAnswer(answer);
        }
    });
}

function printReservationAnswer(answer) {
    let reservationTable = "<table>";
    for (let i = 0; i < answer.length; i++) {
        reservationTable += "<tr>";
        reservationTable += "<td>" + answer[i].idReservation + "</td>";
        reservationTable += "<td>" + answer[i].startDate + "</td>";
        reservationTable += "<td>" + answer[i].devolutionDate + "</td>";
        reservationTable += "<td>" + answer[i].status + "</td>";
        reservationTable += "<td>" + answer[i].score + "</td>";
        reservationTable += "</tr>";
    }
    reservationTable += "</table>";
    $("#tableReservation").html(reservationTable);
}

function saveInfoReservation() {
    let dataReservation = {
        startDate:$("#res-start").val(),
        devolutionDate:$("#res-devol").val(),
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        data: JSON.stringify(dataReservation),

        url: "http://localhost:8080/api/Reservation/save",

        success:function(response) {
            console.log(response);
            console.log("Reservation saved successfully.");
            alert("Reservation saved successfully.");
            window.location.reload()
        },

        error:function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Unsaved Reservation.");
        }
    });
}
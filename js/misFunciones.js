function consultar(){
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'GET',
        dataType: 'JSON',
        success: function(respuesta){
            console.log(respuesta);
         pintarRespuesta(respuesta.items);         
        }

    });


}

function pintarRespuesta(items){

    let myTable="<table border=1> <Tr> <td>id</td> <td>Brand</td> <td>Model</td> <td>Category_id</td> <td>Name</td> <td>Acciones</td> </Tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td> <a href='detalleCom.html?id="+items[i].id+"'>"+items[i].brand+"</a>"+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElementoCompu("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#myTable").append(myTable);

}


function borrarElementoCompu(idElemento){
    let myData={
        id:idElemento
    };
    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: "DELETE",
        data: dataTosend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            alert("Se ha eliminado el registro");
            limpiarInformacionCompu();
                           
    }
});
}

function limpiarInformacionCompu(){
    $("#myTable").empty();
    $("#id").val("");
    $("#brand").val("");
    $("#model").val("");
    $("#category_id").val("");
    $("#name").val("");
    consultar();
}

function guardarInformacion() {
    let myData = {
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),

    };

    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            limpiarInformacionCompu();
            alert("Se ha creado el registro!");                      
        }
    });
}


function actualizarComputador() {
    let myData = {
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),

    };

    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: "PUT",
        data: dataTosend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            alert("Se ha editado el registro satisfactoriamente");
            limpiarInformacionCompu();
        }
    });
}

function consultarClientes(){
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'JSON',
        success: function(respuesta){
            console.log(respuesta);
        pintarRespuestaClientes(respuesta.items);         
        }

    });


}

function pintarRespuestaClientes(items){

    let myTable="<table border=1> <Tr> <td>ID</td> <td>NAME</td> <td>EMAIL</td> <td>AGE</td> <td>Acciones</td> </Tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td> <a href='detalle.html?id="+items[i].id+"'>"+items[i].name+"</a>"+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarClientes("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#myTableClientes").append(myTable);

}



function borrarClientes(idElemento){
    let myData={
        id:idElemento
    };
    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataTosend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            alert("Se ha eliminado el registro");
            eliminarClientes();
                           
    }
});
}

function eliminarClientes(){
    $("#myTableClientes").empty();
    $("#idc").val("");
    $("#namec").val("");
    $("#email").val("");
    $("#age").val("");
    consultarClientes();
}

function guardarClientes() {
    let myData = {
        id:$("#idc").val(),
        name:$("#namec").val(),
        email:$("#email").val(),
        age:$("#age").val(),
        

    };

    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            eliminarClientes();
            alert("Se ha creado el registro del cliente!");                      
        }
    });
}

function actualizarClientes() {
    let myData = {
        id:$("#idEdit").val(),
        name:$("#nameEdit").val(),
        email:$("#emailEdit").val(),
        age:$("#ageEdit").val(),

    };

    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataTosend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            alert("Se ha editado el registro cliente satisfactoriamente");
            $("#formularioCliente").empty();
            $("#myTableClientes").empty();
            consultarClientes();
        }
    });
}

function consultarMensajes(){
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'JSON',
        success: function(respuesta){
            console.log(respuesta);
         pintarRespuestaMensajes(respuesta.items);         
        }

    });


}

function pintarRespuestaMensajes(items){

    let myTableMensajes="<table border=1> <Tr> <td>id</td> <td>Mensaje</td>  <td>Acciones</td> </Tr>";
    for(i=0;i<items.length;i++){
        myTableMensajes+="<tr>";
        myTableMensajes+="<td>"+items[i].id+"</td>";
        myTableMensajes+="<td> <a href='detalleMen.html?id="+items[i].id+"'>"+items[i].messagetext+"</a>"+"</td>";
      
        myTableMensajes+="<td> <button onclick='borrarMensajes("+items[i].id+")'>Borrar</button>";
        myTableMensajes+="</tr>";
    }
    myTableMensajes+="</table>";
    $("#myTableMensajes").append(myTableMensajes);

}


function borrarMensajes(idElemento){
    let myData={
        id:idElemento
    };
    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataTosend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            alert("Se ha eliminado el mensaje");
            limpiarMensajes();
                           
    }
});
}

function limpiarMensajes(){
    $("#myTableMensajes").empty();
    $("#idM").val("");
    $("#mensaje").val("");
    
    consultarMensajes();
}

function guardarMensajes() {
    let myData = {
        id:$("#idM").val(),
        messagetext:$("#mensaje").val(),
        

    };

    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            limpiarMensajes();
            alert("Se ha creado el Mensaje!");                      
        }
    });
}


function actualizarMensajes() {
    let myData = {
        id:$("#idM").val(),
        messagetext:$("#mensaje").val(),
        

    };

    let dataTosend = JSON.stringify(myData);
    $.ajax({
        url: "https://g7c0b37d2fc3c91-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dataTosend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            alert("Se ha editado el Mensaje satisfactoriamente");
            limpiarMensajes();
        }
    });
}

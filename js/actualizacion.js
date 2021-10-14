$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
     if (searchParams.has('id')){
        // console.log("entre"+ searchParams.get('id'));
        var id2 = searchParams.get('id')
        $("#idEdit").val(id2);  
    }
    console.log(id2);

    
});
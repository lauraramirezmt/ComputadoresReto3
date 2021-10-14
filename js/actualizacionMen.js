$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
     if (searchParams.has('id')){
        // console.log("entre"+ searchParams.get('id'));
        var id4 = searchParams.get('id')
        $("#idM").val(id4);  
    }
    console.log(id4);
});
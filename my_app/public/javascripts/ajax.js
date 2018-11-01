$(document).ready(function () {
    // GET REQUEST
    $("#button").click(function (e) {
        e.preventDefault();
        postdata();
    });
})

var rides;

function postdata() {
    $.ajax({
        url: "http://127.0.0.1:8080/rides/allride",
        type: "POST",
        // timeout: 2000,
        async: false,
        data: {
            search : $('#search').val(),
            date : $('#date').val()
        },
        complete: function () {
            console.log('process complete');
        },

        success: function (data) {
            console.log( "data  : " +data);
            var table = $(data).filter("#table");
            console.log("table : " + table);
            $("#table").html(table);
        },
        
        error: function (err) {
            throw err;
        },
    });


}

$(document).ready(function () {
    $("form").css("background-color", "cyan");

})
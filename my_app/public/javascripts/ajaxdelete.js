
var ajaxLoading = false;

$(document).ready(function () {
    // GET REQUEST
    $('.delete').on('submit click', function (e) {
        console.log("clicked");
        if (!ajaxLoading) {
            ajaxLoading = true;
            var deleteid = this.id;
            var emailid = '#e' + deleteid;
            var id = '#i' + deleteid;
            e.preventDefault();
            postdata(id, emailid,function() { 
                ajaxLoading = false;
            });
            
        }
    });
})


function postdata(id, emailid) {
    $.ajax({
        url: "http://127.0.0.1:8080/rides/deleteride",
        type: "POST",
        // timeout: 2000,
        async: false,
        cache: false,
        data: {
            id: $(id).val(),
            email: $(emailid).val(),
        },
        complete: function () {
            console.log('process complete');
        },

        success: function (data) {
            console.log("data  : " + data);
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
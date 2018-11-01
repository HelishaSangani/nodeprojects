
//for firstname 
$(document).ready(function () {
    $("#name").change(function () {
        if ($("#name").val().length <= 2) {
            $("#nameerr").html("Minimum 3 characters required!!").css("color", "red");
            $('#button').prop('disabled', true);
        }
        else if ($("#name").val().length >= 21) {
            $("#nameerr").html("Maximum 20 characters allowed!!").css("color", "red");
            $('#button').prop('disabled', true);
        }
        else {
            $("#nameerr").html(" ");
            $('#button').prop('disabled', false);
        }

    });
});

$(document).ready(function () {
    var $regexname = /^([a-zA-Z0-9]{3,20})$/;
    $('#name').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexname)) {
            $('#nameerr').html("Invalid Name!!").css("color", "red");
            $('#button').prop('disabled', true);
        }
        else {
            $('#nameerr').html(" ");
            $('#button').prop('disabled', false);

        }
    });
});


//for email
$(document).ready(function () {
    var $regexname = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    $('#email').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexname)) {
            $('#emailerr').html("Invalid Email-Id!!").css("color", "red");
            $('#button').prop('disabled', true);
        }
        else {
            $('#emailerr').html(" ");
            $('#button').prop('disabled', false);

        }
    });
});

//for contact number
$(document).ready(function () {
    $("#cno").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#cnoerr").html("Digits Only").css("color", "red");
            return false;
        }
        else{
            $("#cnoerr").html("").css("color", "red");

        }
    });
});

//for contact number
$(document).ready(function () {
    var $regexname = /^\d{10}$/;
    $('#cno').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexname)) {
            $('#cnoerr').html("Invalid Contact Number!!").css("color", "red");
            $('#button').prop('disabled', true);
        }
        else {
            $('#cnoerr').html(" ");
            $('#button').prop('disabled', false);

        }
    });
});

//date picker
$(document).ready(function () {
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15
    });
});

//past date is not allowed
$(document).ready(function () {
    $('#date').on('keypress keydown keyup',function () {
        if(new Date($(this).val()) < new Date($.now())){
            $('#dateerr').html("Invalid pickup Date!!").css("color", "red");
            $('#button').prop('disabled', true);
        }
        else{
            $('#dateerr').html(" ");
            $('#button').prop('disabled', false);
        }
    });
});


//for dropdown
$(document).ready(function () {
    $('select').material_select();
});


//for pickup
$(document).ready(function () {
    var $regexname = /^([a-zA-Z0-9]{3,50})$/;
    $('#pickup').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexname)) {
            $('#pickuperr').html("Invalid pickup Place!!").css("color", "red");
            $('#button').prop('disabled', true);
        }
        else {
            $('#pickuperr').html(" ");
            $('#button').prop('disabled', false);

        }
    });
});

//for dropoff
$(document).ready(function () {
    var $regexname = /^([a-zA-Z0-9]{3,50})$/;
    $('#dropoff').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexname)) {
            $('#dropofferr').html("Invalid dropoff Place!!").css("color", "red");
            $('#button').prop('disabled', true);
        }
        else {
            $('#dropofferr').html(" ");
            $('#button').prop('disabled', false);

        }
    });
});
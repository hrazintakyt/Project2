$("#bch-register").on("click", function () {
    $("#bch-mainMenu").addClass("bch-hide");
    $("#bch-createAccount").removeClass("bch-hide");
});

$(".bch-login").on("click", function () {
    $("#bch-mainMenu").addClass("bch-hide");
    $("#bch-createAccount").addClass("bch-hide");
    $("#bch-loginMenu").removeClass("bch-hide");
});

$("#reg-to-login").on("click", function (event) {
    uniqueUser();
});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // console.log(email);
    return regex.test(email);
};

$("#continue-form").on("click", function () {
    $("#Modal-blankField").modal("toggle")
});

$("#re-register").on("click", function () {
    $("#Modal-pwNoMatch").modal("toggle")
    $("#userPW").val("");
    $("#v-userPW").val("");
});

$("#re-type-email").on("click", function () {
    $("#userEmail").val("");
    $("#userPW").val("");
    $("#v-userPW").val("");
    $("#Modal-emailTaken").modal("toggle")
});




$(".mainEscape").on("click", function () {
    var email = $("#userEmail").val("");
    var name = $("#userName").val("");
    var displayName = $("#displayName").val("");
    var pass1 = $("#userPW").val("");
    var pass2 = $("#v-userPW").val("");
    $("#bch-createAccount").addClass("bch-hide");
    $("bch-loginMenu").addClass("bch-hide");
    $("bch-mainMenu").removeClass("bch-hide");
});

$("#login-load").on("click", function (event) {
   login();
});

$("#login-userPassword").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == "13") {
        login();
    };
});

$("#login-userEmail").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == "13") {
        login();
    };
});

$("#userEmail").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == "13") {
        uniqueUser();
    };
});

$("#userName").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == "13") {
        uniqueUser();
    };
});

$("#displayName").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == "13") {
        uniqueUser();
    };
});

$("#userPW").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == "13") {
        uniqueUser();
    };
});

$("#v-userPW").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == "13") {
        uniqueUser();
    };
});


$("#failed-login").on("click", function () {
    $("#bch-loginMenu").addClass("bch-hide");
    $("#bch-createAccount").removeClass("bch-hide");
});

$("#login-again").on("click", function (){
    $("#login-userPassword").val("");
});


function uniqueUser(){
    event.preventDefault();
        var email = $("#userEmail").val();
        var name = $("#userName").val();
        var displayName = $("#displayName").val();
        var pass1 = $("#userPW").val();
        var pass2 = $("#v-userPW").val();


        if (!email || !name || !displayName || !pass1 || !pass2) {
            $("#Modal-blankField").modal("toggle");
        } else {
            var verified = pass1 === pass2;
            var goodEmail = isEmail(email);

            // console.log(verified, goodEmail);

            if (!goodEmail) {
                //toggle modal in order to tell the user the email is invalid or taken (in this case it is invalid).
                $("#Modal-emailTaken").modal("toggle");
            } else {

                if (verified) {
                    //create package for user data
                    var newUser = {
                        name: name,
                        userName: displayName,
                        email: email,
                        password: pass1
                    };

                    //submit package to database
                    $.ajax("/api/users", {
                        type: "POST",
                        data: newUser,
                        success: function (data) {
                            // console.log(newUser);
                            // console.log(data);
                            if (data[1] === false) {
                                //email in use, please choose another.
                                return $("#Modal-emailTaken").modal("toggle");
                            };

                            $("#bch-createAccount").addClass("bch-hide");
                            $("#bch-loginMenu").removeClass("bch-hide");
                        }
                    });

                } else if (!verified) {
                    $("#Modal-pwNoMatch").modal("toggle");
                };
            };
        };
};

function login(){
    event.preventDefault();
        var pass = $("#login-userPassword").val();
        var user = $("#login-userEmail").val();
        // console.log("Test");

        if (!pass || !user) {
            $("#Modal-blankField").modal("toggle");
        } else {
            console.log("Creating credentials...")
            var userLogin = {
                email: user,
                password: pass
            };

            //Check database for credentials.
            $.ajax("/api/userVerify", {
                type: "POST",
                data: userLogin
            }).then(function (data) {
                // console.log(data);
                //serves which ever page the user has access too.
                return window.location.replace(data);
            }).catch(function(err){
                if (err){
                    $("#Modal-invalidLogin").modal("toggle");
                }
            })
        };
};
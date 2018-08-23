$(function () {
    var socket = io();
    var moduleName;
    var currentStep = 1;
    var studentName;
    var totalSteps = 1;
    var exerciseName;
    var exerciseClicked;
    var completedArray = [];

    $.get("/api/user_data").then(function(data) {
        studentName = data.displayName;
      });
      var elem = document.getElementById('chat');
      elem.scrollTop = elem.scrollHeight;
   

    
    $(".selectModule").on("click", function (event) {
        event.preventDefault();
        moduleName = $(this).attr("data-title");
        $.ajax({
            type: "GET",
            url: "api/" + moduleName
        }).then(function (results) {
            $("#exercises").empty();
            for (i = 0; i < results.length; i++) {
                var exerciseOption = $("<a>");
                exerciseOption.attr("data-title", results[i].title);
                exerciseOption.append(results[i].title);
                exerciseOption.addClass("dropdown-item selectExercise");
                $("#exercises").append(exerciseOption);
            }
        });
    });

 

    $(document).on("click", ".selectExercise", function(event) {
        event.preventDefault();
        exerciseClicked = $(this).attr("data-title");
    });

    $("#startExercise").on("click", function (event) {
        event.preventDefault();
        setInterval(function() {
            socket.emit("newExercise", {
                exerciseName: exerciseClicked,
                moduleName: moduleName
            });
        }, 1000);
    });

    $("#createComment").on("click", function (event) {
        event.preventDefault();
        var newComment = {
            name: studentName,
            text: $("#studentQuestion").val(),
            stepNum: currentStep
        }
        $.ajax({
            type: "POST",
            url: "api/comments",
            data: newComment
        }).then(function (data) {
            socket.emit("newComment", newComment);
        })
        $("#studentQuestion").val('');
    })

    $(document).on("click", ".stepComplete", function (event) {
        event.preventDefault();
        $(this).addClass("disabled");
        currentStep++;
        if (currentStep > totalSteps) {
            socket.emit("newCompleted", {
                name: studentName
            });
        }
    })

    $("#chats").keyup(function (event) {
        event.preventDefault();
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == "13") {
            var newMessage = {
                text: $("#chats").val().trim(),
                userName: studentName
            }
            $.ajax({
                type: "POST",
                url: "api/chat",
                data: newMessage
            })
            socket.emit("newChat", newMessage);
            $("#chats").val('');
        }
    });

    $("#adminChats").keyup(function (event) {
        event.preventDefault();
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == "13") {
            var newMessage = {
                text: $("#adminChats").val().trim(),
                userName: studentName
            }
            socket.emit("newAdminChat", newMessage);
            $("#adminChats").val('');
        }
    });

    socket.on("newExercise", function (data) {
        if (data.exerciseName != exerciseName) {
            exerciseName = data.exerciseName;
            currentStep = 1;
            $("#comments").empty();
            $("#instructionsList").empty();
            $("#completed").empty();
            completedArray = [];
        $.ajax({
            type: "GET",
            url: "api/" + data.moduleName + "/" + data.exerciseName
        }).then(function (results) {
            // var countDown = results[0].countDown;
            // startClock(countDown);
            $("#students-do-first-stand-up").text(results[0].title);
            $("#description").text(results[0].description);
            if (results[0].stepOne !== null) {
                totalSteps = 1;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepOne)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepTwo !== null) {
                totalSteps = 2;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepTwo)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepThree !== null) {
                totalSteps = 3;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepThree)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepFour !== null) {
                totalSteps = 4;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepFour)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepFive !== null) {
                totalSteps = 5;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepFive)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepSix !== null) {
                totalSteps = 6;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepSix)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepSeven !== null) {
                totalSteps = 7;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepSeven)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepEight !== null) {
                totalSteps = 8;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepEight)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepNine !== null) {
                totalSteps = 9;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepNine)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepTen !== null) {
                totalSteps = 10;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepTen)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepEleven !== null) {
                totalSteps = 11;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepEleven)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
            if (results[0].stepTwelve !== null) {
                totalSteps = 12;
                var step = $("<li>");
                var paragraph = $("<p>")
                var label = $("<label class='stepComplete btn btn-primary btn-rounded btn-sm' data-toggle='buttons'>");
                var input = $("<input type='checkbox' autocomplete='off'>");
                var icon = $("<i class='fas fa-check'>");
                label.append(input);
                label.append(icon);
                paragraph.append(label);
                paragraph.append(results[0].stepTwelve)
                step.append(paragraph);
                $("#instructionsList").append(step);
            }
        });
    }
    });

    socket.on("newComment", function (data) {
        var comment = $("<li class='list-group-item'>");
        comment.append("<h5>" + data.name + " on Step " + data.stepNum + "</h5>");
        comment.append("<p>" + data.text + "</p>");
        $("#comments").append(comment);
    });

    socket.on("newCompleted", function (data) {
        if (completedArray.indexOf(data.name) === -1) {
        $("#completed").append("<li class='list-group-item'>" + data.name + "</li>")
        }
        completedArray.push(data.name);
    });

    socket.on("newChat", function (data) {
        var paragraph = $("<p>");
        var outerSpan = $("<span>")
        var chatDiv = $("<div class='chip chip-md peach-gradient darken-2 white-text'>")
        var chatSpan = $("<span>" + data.text + "</span>");
        chatDiv.append("<img src='../img/images/einstein.jpg' alt='" + data.userName + "'>" + data.userName);
        $(outerSpan).append(chatDiv);
        $(outerSpan).append(chatSpan);
        $(paragraph).append(outerSpan);
        $("#chat").append(paragraph);
        elem.scrollTop = elem.scrollHeight;
    });
    socket.on("newAdminChat", function (data) {
        var paragraph = $("<p>");
        var outerSpan = $("<span>")
        var chatDiv = $("<div class='chip chip-md peach-gradient darken-2 white-text'>")
        var chatSpan = $("<span>" + data.text + "</span>");
        chatDiv.append("<img src='../img/images/einstein.jpg' alt='" + data.userName + "'>" + data.userName);
        $(outerSpan).append(chatDiv);
        $(outerSpan).append(chatSpan);
        $(paragraph).append(outerSpan);
        $("#adminChat").append(paragraph);
        elem.scrollTop = elem.scrollHeight;
    });
});
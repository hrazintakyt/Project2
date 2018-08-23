$(function () {
  var socket = io();
  var clockStarted = false;
  var startTime = 0;
  var time = 0;
  var currentUser;

  function updateTheme(theme) {
    console.log(theme);
    console.log(currentUser);
    $.ajax({
      method: "PUT",
      url: "/api/themes",
      data: theme
    });
  }

  // SideNav Button Initialization
  $(".button-collapse").sideNav();
  // SideNav Scrollbar Initialization
  var sideNavScrollbar = document.querySelector(".custom-scrollbar");
  Ps.initialize(sideNavScrollbar);

  $("#progressShow").click(function () {
    $("#progressPopOut")
      .toggleClass("collapse")
      .addClass("slideInRight");
  });
  $("#in-class-toggle").click(function () {
    $("#in-class")
      .toggleClass("collapse")
      .addClass("slideInRight");
  });
  $("#in-structors-toggle").click(function () {
    $("#in-structors")
      .toggleClass("collapse")
      .addClass("slideInRight");
  });

  $("#themeWhite").click(function () {
    $("body")
      .addClass("white-skin")
      .removeClass("black-skin")
      .removeClass("cyan-skin")
      .removeClass("mdb-skin")
      .removeClass("deep-purple-skin")
      .removeClass("navy-blue-skin")
      .removeClass("pink-skin")
      .removeClass("indigo-skin")
      .removeClass("light-blue-skin")
      .removeClass("grey-skin");
    updateTheme("white-skin");
  });
  $("#themeBlack").click(function () {
    $("body")
      .addClass("black-skin")
      .removeClass("white-skin")
      .removeClass("cyan-skin")
      .removeClass("mdb-skin")
      .removeClass("deep-purple-skin")
      .removeClass("navy-blue-skin")
      .removeClass("pink-skin")
      .removeClass("indigo-skin")
      .removeClass("light-blue-skin")
      .removeClass("grey-skin");
    updateTheme("black-skin");
  });
  $("#themeCyan").click(function () {
    $("body")
      .addClass("cyan-skin")
      .removeClass("white-skin")
      .removeClass("black-skin")
      .removeClass("mdb-skin")
      .removeClass("deep-purple-skin")
      .removeClass("navy-blue-skin")
      .removeClass("pink-skin")
      .removeClass("indigo-skin")
      .removeClass("light-blue-skin")
      .removeClass("grey-skin");
    updateTheme("cyan-skin");
  });
  $("#themeMDB").click(function () {
    $("body")
      .addClass("mdb-skin")
      .removeClass("white-skin")
      .removeClass("black-skin")
      .removeClass("cyan-skin")
      .removeClass("deep-purple-skin")
      .removeClass("navy-blue-skin")
      .removeClass("pink-skin")
      .removeClass("indigo-skin")
      .removeClass("light-blue-skin")
      .removeClass("grey-skin");
    updateTheme("mdb-skin");
  });
  $("#themeDeepPurple").click(function () {
    $("body")
      .addClass("deep-purple-skin")
      .removeClass("white-skin")
      .removeClass("black-skin")
      .removeClass("cyan-skin")
      .removeClass("mdb-skin")
      .removeClass("navy-blue-skin")
      .removeClass("pink-skin")
      .removeClass("indigo-skin")
      .removeClass("light-blue-skin")
      .removeClass("grey-skin");
    updateTheme("deep-purple-skin");
  });
  $("#themeNavyBlue").click(function () {
    $("body")
      .addClass("navy-blue-skin")
      .removeClass("white-skin")
      .removeClass("black-skin")
      .removeClass("cyan-skin")
      .removeClass("mdb-skin")
      .removeClass("deep-purple-skin")
      .removeClass("pink-skin")
      .removeClass("indigo-skin")
      .removeClass("light-blue-skin")
      .removeClass("grey-skin");
    updateTheme("navy-blue-skin");
  });
  $("#themePink").click(function () {
    $("body")
      .addClass("pink-skin")
      .removeClass("white-skin")
      .removeClass("black-skin")
      .removeClass("cyan-skin")
      .removeClass("mdb-skin")
      .removeClass("deep-purple-skin")
      .removeClass("navy-blue-skin")
      .removeClass("indigo-skin")
      .removeClass("light-blue-skin")
      .removeClass("grey-skin");
    updateTheme("pink-skin");
  });
  $("#themeIndigo").click(function () {
    $("body")
      .addClass("indigo-skin")
      .removeClass("white-skin")
      .removeClass("black-skin")
      .removeClass("cyan-skin")
      .removeClass("mdb-skin")
      .removeClass("deep-purple-skin")
      .removeClass("navy-blue-skin")
      .removeClass("pink-skin")
      .removeClass("light-blue-skin")
      .removeClass("grey-skin");
    updateTheme("indigo-skin");
  });
  $("#themeLightBlue").click(function () {
    $("body")
      .addClass("light-blue-skin")
      .removeClass("white-skin")
      .removeClass("black-skin")
      .removeClass("cyan-skin")
      .removeClass("mdb-skin")
      .removeClass("deep-purple-skin")
      .removeClass("navy-blue-skin")
      .removeClass("pink-skin")
      .removeClass("indigo-skin")
      .removeClass("grey-skin");
    updateTheme("light-blue-skin");
  });
  $("#themeGrey").click(function () {
    $("body")
      .addClass("grey-skin")
      .removeClass("white-skin")
      .removeClass("black-skin")
      .removeClass("cyan-skin")
      .removeClass("mdb-skin")
      .removeClass("deep-purple-skin")
      .removeClass("navy-blue-skin")
      .removeClass("pink-skin")
      .removeClass("indigo-skin")
      .removeClass("light-blue-skin");
    updateTheme("grey-skin");
  });

  function updateTheme(theme) {
    console.log(currentUser);
    var userSettings = {
      theme: theme,
      email: currentUser.email
    };
    $.ajax({
      method: "PUT",
      url: "/api/themes",
      data: userSettings
    });
  }

  /* White
  Black
  Cyan
  MDB
  Deep Purple
  Navy Blue
  Pink
  Indigo
  Light Blue
  Grey
   */

  $(document).ready(function () {
    $(".mdb-select").material_select();

    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data")
      .then(function (data) {
        currentUser = data;
      })
      .then(function () {
        $("body").addClass(currentUser.theme);
        $("#nameSettings").html("<strong>" + currentUser.name + "</strong>");
        $("#emailSettings").html("<strong>" + currentUser.email + "</strong>");
        if (currentUser.picture === null) {
          $("#imgSettings").attr(
            "src",
            "https://mdbootstrap.com/img/Photos/Others/photo6.jpg"
          );
        } else {
          $("#imgSettings").attr("src", currentUser.picture);
        }

        // console.log(currentUser.theme);
      });

    // FIXME: Emoji Picker Initialization
    /*
    $(function() {
      // Initializes and creates emoji set from sprite sheet
      window.emojiPicker = new EmojiPicker({
        emojiable_selector: '[data-emojiable=true]',
        assetsPath: '../img/emojis/img',
        popupButtonClasses: 'fal fa-grin-beam'
      });
      // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
      // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
      // It can be called as many times as necessary; previously converted input fields will not be converted again
      window.emojiPicker.discover();
    });
    */

    var endExercise = 10;
    socket.on("newTime", function (data) {
      if (clockStarted !== data.state || startTime !== data.startTime) {
        console.log("js " + data.endExercise);
        endExercise = data.endExercise;
        clockStarted = data.state;
        startTime = data.startTime
        console.log(endExercise);
        $(".countdown.multisize").empty();
        $(".countdown.multisize").circularCountdown({
          startDate: "2018/07/21 10:00:00",
          endDate: endExercise,
    
          timeZone: -5, //Time zone of New York. Find timezone of your location and write here.
    
          showDay: false,
          showHour: false,
          showMinute: true,
          showSecond: true,
          //Margin between circles
          margin: 7,
    
          //Diameters
          dayDiameter: 72,
          hourDiameter: 42,
          minuteDiameter: 72,
          secondDiameter: 52,
    
          //Circle BG width
          dayBgWidth: 5,
          hourBgWidth: -200,
          minuteBgWidth: -200,
          secondBgWidth: 2,
    
          //Circle width
          dayCircleWidth: 5,
          hourCircleWidth: 2,
          minuteCircleWidth: 2,
          secondCircleWidth: 2,
    
          //Circle color
          dayCircleColor: "#91304e",
          hourCircleColor: "#ffffff",
          minuteCircleColor: "#ffffff",
          secondCircleColor: "#ffffff",
    
          //Counter font size
          dayCounterFontSize: 24,
          hourCounterFontSize: 16,
          minuteCounterFontSize: 24,
          secondCounterFontSize: 16,
    
          //Counter font color
          dayCounterFontColor: "#91304e",
          hourCounterFontColor: "#ffffff",
          minuteCounterFontColor: "#ffffff",
          secondCounterFontColor: "#ffffff",
    
          //Texts
          dayText: "days",
          hourText: "hours",
          minuteText: "minutes",
          secondText: "seconds",
    
          //Texts top margin
          dayTextMarginTop: 1,
          hourTextMarginTop: 1,
          minuteTextMarginTop: 1,
          secondTextMarginTop: 2,

          //Timer on finish function
        onFinish:function(){
          var bells = document.getElementById("bells");
          bells.play();
        }
        });
      }
    });
    var hour = false;
    var today = "";
    var getToday = function() {
      var todayDate = moment().toDate().toString();
      var dateArray = todayDate.split(" ");
      if (dateArray[1] === "Jan") {
        dateArray[1] = "01";
      }
      if (dateArray[1] === "Feb") {
        dateArray[1] = "02";
      }
      if (dateArray[1] === "Mar") {
        dateArray[1] = "03";
      }
      if (dateArray[1] === "Apr") {
        dateArray[1] = "04";
      }
      if (dateArray[1] === "May") {
        dateArray[1] = "05";
      }
      if (dateArray[1] === "Jun") {
        dateArray[1] = "06";
      }
      if (dateArray[1] === "Jul") {
        dateArray[1] = "07";
      }
      if (dateArray[1] === "Aug") {
        dateArray[1] = "08";
      }
      if (dateArray[1] === "Sep") {
        dateArray[1] = "09";
      }
      if (dateArray[1] === "Oct") {
        dateArray[1] = "10";
      }
      if (dateArray[1] === "Nov") {
        dateArray[1] = "11";
      }
      if (dateArray[1] === "Dec") {
        dateArray[1] = "12";
      }
      return dateArray[3] + "/" + dateArray[1] + "/" + dateArray[2]
      console.log(dateArray[3] + "/" + dateArray[1] + "/" + dateArray[2]);
    }
    $("#fiveMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(5, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 300000;
    });
    $("#tenMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(10, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 600000;
    });
    $("#fifteenMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(15, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 900000;
    });
    $("#twentyMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(20, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 1200000;
    });
    $("#twentyfiveMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(25, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 15000000;
    });
    $("#thirtyMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(30, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 1800000;
    });
    $("#thirtyfiveMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(35, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 2100000;
    });
    $("#fortyMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(40, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 2400000;
    });
    $("#fortyfiveMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(45, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 2700000;
    });
    $("#fiftyMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(50, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 3000000;
    });
    $("#fiftyfiveMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(55, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 3300000;
    });
    $("#sixtyMinTimer").click(function () {
      today = getToday();
      var currentTime = moment();
      var theTimeIs = today + " " + currentTime.format("HH:mm:ss");
      console.log(theTimeIs);
      var nowPlus = moment().add(60, "minutes");
      var exerciseEnd = today + " " + nowPlus.format("HH:mm:ss");
      console.log(exerciseEnd);
      endExercise = today + " " + nowPlus.format("HH:mm:ss");
      console.log(endExercise);
      hour = false;
      time = 3600000;
    });

    $("#timerActivate").click(function () {
      $(".countdown.multisize").empty();
      $(".countdown.multisize").circularCountdown({
        startDate: "2018/07/21 10:00:00",
        endDate: endExercise,
        timeZone: -5, //Time zone of New York. Find timezone of your location and write here.

        showDay: false,
        showHour: hour,
        showMinute: true,
        showSecond: true,
        //Margin between circles
        margin: 7,

        //Diameters
        dayDiameter: 72,
        hourDiameter: 42,
        minuteDiameter: 72,
        secondDiameter: 52,

        //Circle BG width
        dayBgWidth: 5,
        hourBgWidth: -200,
        minuteBgWidth: -200,
        secondBgWidth: 2,

        //Circle width
        dayCircleWidth: 5,
        hourCircleWidth: 2,
        minuteCircleWidth: 2,
        secondCircleWidth: 2,

        //Circle color
        dayCircleColor: "#91304e",
        hourCircleColor: "#ffffff",
        minuteCircleColor: "#ffffff",
        secondCircleColor: "#ffffff",

        //Counter font size
        dayCounterFontSize: 24,
        hourCounterFontSize: 16,
        minuteCounterFontSize: 24,
        secondCounterFontSize: 16,

        //Counter font color
        dayCounterFontColor: "#91304e",
        hourCounterFontColor: "#ffffff",
        minuteCounterFontColor: "#ffffff",
        secondCounterFontColor: "#ffffff",

        //Texts
        dayText: "days",
        hourText: "hours",
        minuteText: "minutes",
        secondText: "seconds",

        //Texts top margin
        dayTextMarginTop: 1,
        hourTextMarginTop: 1,
        minuteTextMarginTop: 1,
        secondTextMarginTop: 2,

        //Timer on finish function
      onFinish:function(){
        var bells = document.getElementById("bells");
        bells.play();
      }
      });
      emitInterval = setInterval(function () {
        socket.emit("newTime", {
          endExercise: endExercise,
          state: true,
          startTime: time
        });
        console.log("emitted with " + endExercise);
      }, 1000);
      emitInterval();
      setTimeout(function () {
        clearInterval(emitInterval)
        socket.emit("newTime", {
          endExercise: 10,
          state: false
        });
        console.log("exercise ended");
      }, time);
    });

    var emitInterval;

    $("#endTimer").click(function () {
      endExercise = 10;
      clearInterval(emitInterval)
      socket.emit("newTime", {
        endExercise: 10,
        state: false,
        isEnding: true
      })
      $(".countdown.multisize").empty();
      $(".countdown.multisize").circularCountdown({
        startDate: "2018/07/21 10:00:00",
        endDate: endExercise,
        timeZone: -5, //Time zone of New York. Find timezone of your location and write here.

        showDay: false,
        showHour: false,
        showMinute: true,
        showSecond: true,
        //Margin between circles
        margin: 7,

        //Diameters
        dayDiameter: 72,
        hourDiameter: 42,
        minuteDiameter: 72,
        secondDiameter: 52,

        //Circle BG width
        dayBgWidth: 5,
        hourBgWidth: -200,
        minuteBgWidth: -200,
        secondBgWidth: 2,

        //Circle width
        dayCircleWidth: 5,
        hourCircleWidth: 2,
        minuteCircleWidth: 2,
        secondCircleWidth: 2,

        //Circle color
        dayCircleColor: "#91304e",
        hourCircleColor: "#ffffff",
        minuteCircleColor: "#ffffff",
        secondCircleColor: "#ffffff",

        //Counter font size
        dayCounterFontSize: 24,
        hourCounterFontSize: 16,
        minuteCounterFontSize: 24,
        secondCounterFontSize: 16,

        //Counter font color
        dayCounterFontColor: "#91304e",
        hourCounterFontColor: "#ffffff",
        minuteCounterFontColor: "#ffffff",
        secondCounterFontColor: "#ffffff",

        //Texts
        dayText: "days",
        hourText: "hours",
        minuteText: "minutes",
        secondText: "seconds",

        //Texts top margin
        dayTextMarginTop: 1,
        hourTextMarginTop: 1,
        minuteTextMarginTop: 1,
        secondTextMarginTop: 2
      });
    });
  });
});

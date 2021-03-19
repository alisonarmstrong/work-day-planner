var saveBtn = $(".saveBtn");
var currentTime = moment().format("HH");


// current date in the header //
$("#currentDay").text(moment().format('MMMM Do YYYY'));

// change color in each row //

function currentHour() {
    var hourChecker = moment().hour();
    console.log(hourChecker);

    $("input").each(function(){
        var id = $(this).attr("id")
        if (id < hourChecker) {
            $(this).addClass("past")
        }
        else if (id == hourChecker) {
            $(this).addClass("present")
            $(this).removeClass("past")
        }
        else {
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
        }
    })
}

// local storage //
saveBtn.on("click", function (){
    var id = $(this).siblings("input").attr("id")
    var value = $(this).siblings("input").val()
    localStorage.setItem(id, value);
});

currentHour ();
setInterval(currentHour, 10000)
$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
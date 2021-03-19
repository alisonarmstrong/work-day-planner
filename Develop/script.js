var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");


// current date in the header //
$("#currentDay").text(moment().format('MMMM Do YYYY'));

// change color in each row //

// local storage //
saveBtn.on("click", function (){
    localStorage.setItem(input);
});
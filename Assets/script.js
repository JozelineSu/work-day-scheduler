var saveButtonEl = $('.saveBtn');
var timeBlock = $('.time-block');

$(document).ready(function () {
  
// Displays the Day name with Month + Number
var d = new Date();
var monthNames = ["January","February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]; 
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var strDate = days[d.getDay()] + ", " + monthNames[(d.getMonth())] + " " + d.getDate();

document.querySelector('#currentDay').textContent = strDate;

// save text to local storage after save button is clicked
saveButtonEl.on('click', function () {
  var time = $(this).parent().attr('id');
  var saveText = $(this).siblings('.description').val();
  
  localStorage.setItem(time, saveText);
})

// assign style classes to time divs accordingly
function assignClasses() {
var time = new Date();
  var hours = time.getHours();
  var currentTime = (hours);
console.log(currentTime);

timeBlock.each(function () {
  var timeText = $(this).attr("id");
  
  if (timeText < currentTime) {
    $(this).addClass("past");

  } else if (timeText === currentTime) {
    $(this).addClass("present");

  } else {
    $(this).addClass("future");
  }
})
}

assignClasses();

// get text from local storage if any
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

});


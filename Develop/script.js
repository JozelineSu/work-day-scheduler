// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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

  
// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
saveButtonEl.on('click', function () {
  var saveText = $(this).siblings('.description').val();
  var time = $(this).siblings('.time-block');
  localStorage.setItem(time, saveText);

})



// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
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


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //




  


});



$(function () {
  $('.saveBtn').on('click', function () {
      //Generates key-value pairs
      //this.parent refers to the overall row
      var timeOfDay = $(this).parent().attr('id');
      //this.sibling refers to the text-area. val() needed to prevent "object Object"
      //from storing in our key-value pairs
      var valueText = $(this).siblings('.description').val();
      // Saves our value from above within local storage
      localStorage.setItem(timeOfDay, valueText);
  });
  //Retrieves the stored value from above and places it in <textarea>
  $('#hour-9 .description').text(localStorage.getItem('hour-9'));
  $('#hour-10 .description').text(localStorage.getItem('hour-10'));
  $('#hour-11 .description').text(localStorage.getItem('hour-11'));
  $('#hour-12 .description').text(localStorage.getItem('hour-12'));
  $('#hour-13 .description').text(localStorage.getItem('hour-13'));
  $('#hour-14 .description').text(localStorage.getItem('hour-14'));
  $('#hour-15 .description').text(localStorage.getItem('hour-15'));
  $('#hour-16 .description').text(localStorage.getItem('hour-16'));
  $('#hour-17 .description').text(localStorage.getItem('hour-17'));
  // var storedValue = localStorage.getItem('hour-9');
  // console.log(storedValue)

  function timeBlockFunctionality() {
      //current hour in military time(0-23)
      var presentTime = dayjs().hour();
      // var presentTime = 14
      // console.log(presentTime)
      
      //targets each row to reapply past/present/future classes
      $('.time-block').each(function () {
          var businessHour = $(this).attr('id').split('hour-')[1];
          // console.log($(this).attr('id').split('hour-')[1]);
          // Compares the 9-5 time to the presentTime to apply bg colors
          if (businessHour < presentTime) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
          }
          else if (businessHour == presentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
          }
          else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          };
      });
  };
  //Calls the function to mark the current time and apply the 3 time-classes
  timeBlockFunctionality();
});

//***Tracks the current date
//***dddd=current day name, MMMM=full month name, DD=days of month(1-31), 
//***YYYY=year (4 digit) */
var date = dayjs().format('dddd, MMMM DD YYYY');
// // console.log(date)
$('#currentDay').text('Current Date: ' + date)

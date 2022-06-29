//Inserts today's in to HTML
var todayDate = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(todayDate);

$(document).ready(function() {
    //Event listener for when the save button is pressed
    $(".saveBtn").on('click', function() {
        
        var entryTime = $(this).parent().attr('id');
        var entry = $(this).siblings('.description').val();
        
        //Save entry into local storage
        localStorage.setItem(entryTime, entry);
    })

    function currentTime() {
        // Get the current hour in military time 
        var hourNum = moment().hour();

        //Go through each time block and set set class to past, future or present.
        $('.time-block').each(function() {
            var blockTime = parseInt($(this).attr('id').split('hour')[1]);

            //If the time of the block equal current time add class present
            if (blockTime === hourNum) {
                $(this).addClass('present');
                $(this).removeClass('past');
                $(this).removeClass('future');
            }
            //If the time of block is more than current time add class future
            else if (blockTime > hourNum) {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
            //If the time of block is less than current time add class past
            else {
                $(this).removeClass('present');
                $(this).addClass('past');
                $(this).removeClass('future');
            }
        })
    }

    // If there is an item save in the local storage get it 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    currentTime()
})
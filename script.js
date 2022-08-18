var momentDate = moment().format("MMM Do YYYY");
var currentDate = document.getElementById("currentDay");
currentDate.innerHTML = momentDate;
console.log(momentDate);


$(document).ready(function(){
    // Function for clicking save button and setting items to local storage
    $(".saveBtn").on("click", function(){
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,task);
    })
});

    function hourFormater(){
        var currentTime = moment().hours();
        $(".time-block").each(function(){
            var timeBlockHour =parseInt($(this).attr("id").split("-")[1]);
            var timeBlockId = $(this).attr("id");
            var noteData = localStorage.getItem(timeBlockId);
            if(noteData == null){
                noteData = "";
            }
            console.log(noteData);
            $(this).children(".description").val(noteData);
            console.log(currentTime);
            if(timeBlockHour < currentTime){
            $(this).addClass("past");
            }else if(currentTime===timeBlockHour){
            $(this).removeClass("past");
            $(this).addClass("present");
         }else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            }
        });
    };
hourFormater();

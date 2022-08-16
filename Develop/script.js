// Function for clicking save button and setting items to local storage
$(document).ready(function(){
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
        if(timeBlockHour < currentTime){
            $(this).addClass("past");
        }else if(timeBlockHour===currentTime){
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
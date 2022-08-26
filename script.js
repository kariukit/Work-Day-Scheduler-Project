$(function () {
   
 function updateHour(){
 $('#currentDay').text(moment().format('dddd, MMMM Do'));

    let currentHour = moment().hours();
     $('.time-block').each(function () {
    var hourRow = parseInt($(this).attr('id').split('-')[1]);
            if (hourRow< currentHour) {
              $(this).addClass('past');
            } 
            if (hourRow === currentHour) {
              $(this).removeClass('past')
              $(this).addClass('present');
            } 
            if (hourRow> currentHour){
              $(this).removeClass('present')
              $(this).removeClass('past')
              $(this).addClass('future');
            }
          });
    }
 updateHour();

 $(document).on('click','.saveBtn',function(){
     var SaveBtnValue = $(this).siblings('.description').val();
     var desctiption = document.getElementsByClassName(SaveBtnValue).value;
    localStorage.setItem(SaveBtnValue, desctiption);
    document.getElementById("eventsave").innerHTML = "Event Saved";
    });
   
});

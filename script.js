/////// Code it yourself :)
$(document).ready(function () {
    
  $("#btnAdd").click(function(){
    $(".tasksBox").append(`<div class="task"></div>`);
    $(".task").last().append(`<span calss="addSpan">${$("#taskInput").val()}</span>`);
    $(".task").last().append(`<button class="done">done</button>`);
      $(".task").last().append(`<button class="delete">delete</button>`);
      
     $(".done").click(function () {
        $(this).parent().css("background-color","red");   
    });
    $(".delete").click(function () {
        $(this).parent().remove();   
    }); 
  });

  
});
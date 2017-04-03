// BACK END

// FRONT END
$(document).ready(function(){
  var completedList = [];

  $("form#add-task").submit(function(event){
    event.preventDefault();

    var currentTask = $("#task-input").val();

    $("#task-list").prepend("<input type='checkbox'><label>"+currentTask+"</label><br>");
  });

  $("form#task-list").submit(function(event){
    event.preventDefault();
    $("input:checkbox:checked").each(function(){
      $(this).next("label").next("br").remove();
      $(this).next("label").remove();
      $(this).remove();
    });
  });
});

// BACK END
function Location(name, description) {
  this.name = name;
  this.description = description;
}

Location.prototype.getLocationDesc = function() {
  return this.name + " is quite a great place to visit!";
}

Location.prototype.getLocationName = function(){
  return this.name;
}


// FRONT END
$(document).ready(function(){

  $("form#addTask").submit(function(event){
    event.preventDefault();

    var currentTask = $("#task-input").val();

    $("#toDoList").append("<input type='checkbox' name='task' value='"+uniqueID+"'><label id='"+uniqueID+"'>"+currentTask+"</label>");
  });

  $("form#toDoList").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=task]:checked").each(function(){

      $(this).next("label").remove();
      $(this).remove();

      //   searchID = ("#" + $(this).val());
      //   console.log(searchID);
      // console.log(  $("form#toDoList").find("label"+searchID));
      //   $("form#toDoList").find("label"+searchID).css("background-color","blue");

      // $("#toDoList").find("#" + $(this).val()).remove();
      // $(this).remove();
    });

  });

});

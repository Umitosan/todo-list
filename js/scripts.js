// BACK END

function TodoItem(name, doneStatus) {
  this.name = name;
  this.doneStatus = doneStatus;
}

TodoItem.prototype.UpdateTodoItem = function() {
  return 0;
}

var itemObjArray = [];

// FRONT END
$(document).ready(function(){

  $("form#add-task").submit(function(event){
    event.preventDefault();

    // creat new ToDoItem object and add line to list
    var tmpObj = new TodoItem("myNewObj","True");
    $("#output1").prepend("<li class='list-item'>" +
      "<input type='checkbox'><span class='contact'>" +
      " " + tmpObj.name + "</span></li>");
    // update itemArray;
    itemObjArray.push(tmpObj);
    // console.log("tmp obj: " , tmpObj);

    $("#output1 li:first-child input").click(function() {
      //updade object
      // yes it works using this
      console.log("test" , $(this).is(":checked"))


    });




  });
});

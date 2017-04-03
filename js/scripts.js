// BACK END

function TodoItem(name, doneStatus) {
  this.name = name;
  this.doneStatus = doneStatus;
}

TodoItem.prototype.UpdateTodoItem = function() {
  return 0;
}

var itemArray = [];

// FRONT END
$(document).ready(function(){

  $("form#add-task").submit(function(event){
    event.preventDefault();

    // creat new ToDoItem object and add line to list
    var tmpObj = new TodoItem("myNewObj","True");
    $("#output1").prepend("<li class='list-item'><input type='checkbox' ><span class='contact'>" + " " + tmpObj.name + "</span></li>");
    // update itemArray;
    itemArray.push(tmpObj);
    console.log("tmp obj: " , tmpObj);

    $("#output1 li:first-child").click(function() {
      //updade object

      // console.log("this #output1 li:first-child : " , $(this);
        // console.log("this checked: " , this:checked);
      // console.log("this #output1 li:first-child : " , $("this[checked='False']") );
      // if ($(this:checked)
      // (tmpObj.doneStatus = "False")
      //  (tmpObj.doneStatus = "True") ;

    });




  });
});

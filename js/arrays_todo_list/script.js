var list = [];
var choice = "";

var display = function(list) {
  console.log('*****');
  list.forEach(function(list_item, index){
    console.log(index + ": " + list_item);
  })
  console.log('*****');
}

while (choice !== "quit") {
  choice = prompt("What would you like to do?");

  if (choice === "new") {
    list.push(prompt("Enter new todo"));
  }

  else if (choice === "list") {
    display(list);
  }

  else if (choice === "delete") {
    itemToDelete = prompt("Which item would you like to delete?");
    list.splice(itemToDelete, 1);
    display(list);
  }
}

console.log("Ok, you quit the app.");

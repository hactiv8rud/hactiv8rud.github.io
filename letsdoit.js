/* // Create a "close" button and append it to each list item
let myNodelist = document.getElementsByClassName("list");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
 */
// Create a new list item when clicking on the "Add" button
function newUpcomingTask() {
  let task = document.getElementById("task-add").value;
  let category = document.getElementById("category-add").value;
  let dueDate = document.getElementById("dueDate-add").value;
  let endTime = document.getElementById("endTime-add").value;

  if (task === "" || category === "" || dueDate === ""|| endTime === "") {
    return alertModal();
  }

  let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  let divUpcomingList = document.createElement("div");
  let id = createId();
  
  divUpcomingList.id = id;
  divUpcomingList.className = "list";

  console.log(document.getElementById("upcomingList").appendChild(divUpcomingList));

  let valueCategoryCard = document.createTextNode(category);
  console.log(category);
  let valueTaskCard = document.createTextNode(task);
  console.log(dueDate);
  let arrDueDate = dueDate.split("-");
  
  let n = month[Number(dueDate[1])];
  let valueDueCard = document.createTextNode(`Due on ${arrDueDate[2]} ${n} ${arrDueDate[0]} at ${endTime}`);
  console.log(valueDueCard);

  let pCategoryCard = document.createElement("p");
  pCategoryCard.className = "category-card";

  let pTaskCard = document.createElement("p");
  pTaskCard.className = "task-card";

  let pDueCard = document.createElement("p");
  pDueCard.className = "due-card";


  let btnFinished = document.createElement("button");
  let btnDelete = document.createElement("button");

  btnFinished.setAttribute("type", "button");
  btnFinished.clasName = "finished";

  btnDelete.setAttribute("type", "button");
  btnDelete.clasName = "delete";


  pCategoryCard.appendChild(valueCategoryCard);
  pTaskCard.appendChild(valueTaskCard);
  pDueCard.appendChild(valueDueCard);
  btnFinished.appendChild(document.createTextNode('Finished'));
  btnDelete.appendChild(document.createTextNode('Delete'));
  

  document.getElementById(id).appendChild(pCategoryCard);
  document.getElementById(id).appendChild(pTaskCard);
  document.getElementById(id).appendChild(pDueCard);
  document.getElementById(id).appendChild(btnFinished);
  document.getElementById(id).appendChild(btnDelete);

  console.log(document.getElementById("upcomingList"));
  document.getElementById("task-add").value = "";
  document.getElementById("category-add").value = "Personal";
  document.getElementById("dueDate-add").value = "";
  document.getElementById("endTime-add").value = "";

 
}
  /* for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} */

function createId() {
  let d = new Date();
  let year, month, date, hour, minute, second;

  year = String(d.getFullYear());

  if (d.getMonth < 10) {
    month = '0' + (d.getMonth() + 1);
  } else {
    month = String(d.getMonth() + 1);
  }

  if (d.getDate < 10) {
    date = '0' + d.getDate();
  } else {
    date = String(d.getDate());
  }

  if (d.getHours < 10) {
    hour = '0' + d.getHours();
  } else {
    hour = String(d.getHours());
  }

  if (d.getMinutes() < 0) {
    minute = '0' + d.getMinutes();
  } else {
    minute = String(d.getMinutes());
  }

  if (d.getSeconds() < 0) {
    second = '0' + d.getSeconds();
  } else {
    second = String(d.getSeconds());
  }

return (year + month + date + hour + minute + second);
}

function alertModal() {
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal {
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
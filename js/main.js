var user = prompt("My name is: ")
document.getElementById('user').innerHTML = user

// var date = new Date().toJSON().slice(0, 10);
// var date = Date.now()

// document.getElementById('date').innerHTML = date;
var date = new Date();

options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric',
  hour12: false
};
console.log(date.toLocaleString('en-US', options));
document.getElementById('date').innerHTML = date.toLocaleString('en-US', options)

// → "12/19/2012, 19:00:00"

function getData(){
    var input = document.getElementById('textbox').value;
    // var input2 = document.getElementById('textbox2').value
    var node=document.createElement("li");
    var textnode=document.createTextNode("Task: " + input);
    node.appendChild(textnode);
    document.getElementById('list').appendChild(node);
    
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    // removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("class", "removeButton");
    removeTask.addEventListener('click', function(e) {
        node.parentNode.removeChild(node);
    }, false);
    node.appendChild(removeTask); 
 }

 function getData2(){
    var input2 = document.getElementById('textbox2').value;
    var node2=document.createElement("li");
    var textnode2 = document.createTextNode("Fun: " + input2);
    node2.appendChild(textnode2);
    document.getElementById('list2').appendChild(node2);
    
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    // removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("class", "removeButton");
    removeTask.addEventListener('click', function(e) {
        node2.parentNode.removeChild(node2);
    }, false);
    node2.appendChild(removeTask); 
 }


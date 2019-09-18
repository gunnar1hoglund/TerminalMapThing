// Get the input field
var input1 = document.getElementById('field')
var buttonPress = document.getElementById('btn')

input1.addEventListener("keyup", function(event){
    // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {

    let command = input1.value
    let key = " cd nukes"

    if(command.toUpperCase() === key.toUpperCase()){
        console.log('success')

        //iterate through and unhide elements
        for(i = 0; i < 6; i++) {
            document.getElementById('l' + (i + 1) ).style.display = "block"
            console.log('run: ' + i)
        }

        document.getElementById('mydiv').style.display = 'block'        
    }
  }
})

//getting input from exit button
buttonPress.addEventListener('click', function() {
    document.getElementById('mydiv').style.display = 'none'

})




// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
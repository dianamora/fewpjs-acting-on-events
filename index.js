// Your code here
dodger = document.getElementById('dodger'); //selecting the dodger by it's ID in the html

// move dodger to the left, and make sure it doesn't go over the edge
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 
  
//in the above step, we set the rules: we're moving the dodger one pixel to the left 
//every time the left arrow is pressed on the keyboard. the bottom step 
//essentially makes the move happen (event)
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 


// move dodger to the right, and make sure it doesn't go over the edge
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(e) {
        if (e.key === "ArrowRight") {
          moveDodgerRight()
        }
})
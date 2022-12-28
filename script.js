const resumeBtn = document.querySelector("#resume-btn")
const resumeDiv = document.querySelector("#resume-div")
const overLay = document.querySelectorAll(".overlay")
const work = document.querySelectorAll(".work")

// Variables for navigating to other pages
const fullstack = document.querySelector("#full-stack-portfolio")




// Had me flip around my if statement to get it working on the first click https://stackoverflow.com/questions/28100979/button-does-not-function-on-the-first-click

resumeBtn.addEventListener("click", function(){
  
  if(resumeDiv.style.display === "block"){
    resumeDiv.style.display = "none";
  } else{
    resumeDiv.style.display = "block";
  }
})





// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector(".nav-bar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





















// fullstack.addEventListener("click", function(){
  
//   window.location.replace("./full-stack-porfolio.html")
// })



































// var styles = `{
// .overLay {
//     position: absolute;
//     background-color: white;
//     z-index: 1;
//     margin-left: 70px;
//     padding:10px;
//     border-radius: 15px;
//     transition: .5s ease;
//     font-size:200px;
// }
// }`







// for (let i = 0; i < work.length; i++) {
//   work[i].addEventListener("mouseover", displayReveal)
 
// }



// function displayReveal(){
  
//   for (let i = 0; i < overLay.length; i++) {
//     overLay[i].style.display = 'block'
//   }
// }




// for (let i = 0; i < overLay.length; i++) {
//   overLay[i].addEventListener("mouseover", backWhite)
  
// }

// overLay.addEventListener('mouseover', backWhite)



// function backwhite(){
  
//   this.style.display = "none"
// }






// for (let i = 0; i < work.length; i++) {
//   work[i].addEventListener("mouseover", displayReveal)
// }

// work.addEventListener("mouseover", displayReveal)
 

// function displayReveal(){
//   this.overLay.style.display = "block"

// }
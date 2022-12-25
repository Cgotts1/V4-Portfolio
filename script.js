const resumeBtn = document.querySelector("#resume-btn")
const resumeDiv = document.querySelector("#resume-div")
const overLay = document.querySelectorAll(".overlay")
const work = document.querySelectorAll(".work")



var styles = `{
.overLay {
    position: absolute;
    background-color: white;
    z-index: 1;
    margin-left: 70px;
    padding:10px;
    border-radius: 15px;
    transition: .5s ease;
    font-size:200px;
}
}`



resumeBtn.addEventListener("click", function(){


  if(resumeDiv.style.display === "none"){
resumeDiv.style.display = "block";
  } else{
resumeDiv.style.display = "none";
  }
})



for (let i = 0; i < work.length; i++) {
  work[i].addEventListener("mouseover", displayReveal)
 
}



function displayReveal(){
  
  for (let i = 0; i < overLay.length; i++) {
    overLay[i].style.display = 'block'
  }
}




for (let i = 0; i < overLay.length; i++) {
  overLay[i].addEventListener("mouseover", backWhite)
  
}

overLay.addEventListener('mouseover', backWhite)



function backwhite(){
  
  this.style.display = "none"
}






// for (let i = 0; i < work.length; i++) {
//   work[i].addEventListener("mouseover", displayReveal)
// }

// work.addEventListener("mouseover", displayReveal)
 

// function displayReveal(){
//   this.overLay.style.display = "block"

// }
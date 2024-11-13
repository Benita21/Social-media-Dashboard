
const darkmodebtn=document.querySelector(".darkbtn");
const body=document.querySelector("body")
// console.log(body)


// toggling dark and light classes
darkmodebtn.addEventListener("click", function(){
//  console.log("btn clicked") 
const savedmode=localStorage.getItem("mode")||("light"),
console.log(savedmode)
body.classList.add("savedmode")

if(body.classList.contains("light")){
  body.classList.remove("light")
  localStorage.setItem("mode","dark")
}
else{
  body.classList.remove("dark")
  localStorage.setItem("mode","light")
}
})

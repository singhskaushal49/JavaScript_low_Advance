// this keyword
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
  console.log("you clincked me !!!!");
  console.log("value of this");
  console.log(this);
});
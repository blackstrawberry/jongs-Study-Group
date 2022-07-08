const Btn = document.getElementById("p_btn");
const p_1 = document.getElementById("p_1");
const p_2 = document.getElementById("p_2");
const p_3 = document.getElementById("p_3");

const projects = [p_1, p_2, p_3];

let currentP = 0;
const handleBtnClick = () =>{
  currentP++;
  if(currentP>2){currentP=0;}
  projects.forEach((project) => project.classList.remove("active"));
  projects[currentP].classList.add("active");
}

if(Btn){
  Btn.addEventListener("click", handleBtnClick);
}
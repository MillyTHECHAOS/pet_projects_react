// взято из урока https://www.youtube.com/watch?v=zS1XIJ_uUQw
import './lines.css';

const Lines = () => {
 function lines() {
     let sizeW = Math.random();
     let e = document.createElement("div");
     e.setAttribute("class", "circle");
     document.body.appendChild(e);
     e.style.width = `${sizeW}vw`
     e.style.left = `${Math.random() * 160}%`;
   
     setTimeout(function(){
       document.body.removeChild(e);
     }, 5000);
   }

   setInterval(function(){
     lines();
   }, 500);
 
   lines();
}

export default Lines;
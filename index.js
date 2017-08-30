$(document).ready(() => {
  
  const keyboard = {
    49: {}
  }
  
  const change = (e) => {
    let kc = e.keyCode;
    let bcolor = document.getElementById(kc).style;
      
      if (!bcolor.backgroundColor || bcolor.backgroundColor === "ivory") {
        bcolor.backgroundColor = "rgba(150, 25, 65, .5)";
      } else {
        console.log('here');
        bcolor.backgroundColor = "ivory";
      }
    }
 window.addEventListener("keydown", change, false);
});
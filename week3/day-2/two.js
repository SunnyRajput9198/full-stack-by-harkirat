//deleting element


function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    // element.parentNode.removeChild(element);//parent pe jao phir vha se delete kro child
    document.getElementById("todoparent").removeChild(element)
  }  


  //adding element
  let divel=document.createElement("div")
  divel.innerHTML="Hi there sunny";
  document.querySelector("body").appendChild(divel)//body liya hai kyuki body me krna hai append
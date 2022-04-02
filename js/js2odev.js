

let list = document.querySelector("ul#list");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false );



function newElement() {
    let taskDOM = document.querySelector('#task')
    let uldom = document.querySelector("ul#list")
    let lidom = document.createElement("li")
    
    if (taskDOM.value.trim() === '') {
        $(".error").toast("show")
    } else {  
    $(".success").toast("show");
    lidom.innerHTML = taskDOM.value 
    uldom.append(lidom)
    console.log(uldom)

    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('todolist')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(taskDOM.value);
    // Alert the array value
    //alert(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('todolist', JSON.stringify(a));
    //localStorage.setItem ('todolist', JSON.stringify(taskDOM.value))
    
    
    taskDOM.value = ""
    }
    let span = document.createElement('span')
let text = document.createTextNode('x')
span.className = 'close'
span.appendChild(text)
lidom.appendChild(span)

span.onclick = function () {
    let li = this.parentElement
    let lim = li.innerHTML.slice(0,li.innerHTML.indexOf("<"))
    console.log(li)
    console.log(lim)
    let gettodo = () => {
        return JSON.parse(localStorage.getItem('todolist'))
    }
    let todos = gettodo();
    
    for(let i = 0; i < todos.length; i++){
        if (todos[i] == lim) {
            todos.splice(i,1);
        }
    }
    localStorage.setItem('todolist', JSON.stringify(todos))
    li.remove()

   
}

}



// x butonu tıklandığında 
    
 
    
    //lidom.parentElement.removeChild(lidom)
       
    //console.log(lidom.length)
   
     
 //    for (let i = 0; i<lidom.length; i++) {
 //       lidom[i].addEventListener('click', () => {
 //           lidom[i].parentNode.removeChild(lidom[i])
//            console.log(i)
 //       } )
  
 //// let lidom = document.querySelectorAll("li") 
    
//  for (let li of lidom) {
 //     li.addEventListener('click', () => {
 //         li.remove()
//      })


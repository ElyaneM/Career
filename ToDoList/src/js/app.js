var input = document.getElementById("todo")
var addBtn = document.getElementById("add")
var todos = document.getElementById("todos")

addBtn.addEventListener("click",function(e){
    e.preventDefault()
    var text = input.value;
    text = text.trim();
    if(text == "" || text == null){
        alert("Bir şeylər yaz!")
        return;
    }

    const li = document.createElement("li");
    const p = document.createElement("p");
    const i = document.createElement("i");
    i.classList = "fa-solid fa-xmark";
    p.innerHTML = text;
    li.appendChild(p);
    li.appendChild(i);
    todos.appendChild(li);
    input.value = ""
})

todos.addEventListener("mouseover",function(e){
    var deleteBtn = document.querySelectorAll(".fa-xmark");
    deleteBtn.forEach(btn=>{
        btn.addEventListener("click",function(e){
            var element = e.target.parentElement;
            element.remove()
        })
    })
})
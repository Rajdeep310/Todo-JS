const input=document.querySelector(".main");
const add=document.querySelector(".add");
const list=document.querySelector(".list");

let todo;

add.addEventListener('click',()=>{
    todo=input.value;
    if(todo!==""){
        let st=`<div class="item">
            <input class="iteminput" value="${todo}" type="text">
            <button class="done">COMPLETED</button>
            <button class="delete">DELETE</button>
            </div>`;    
    list.insertAdjacentHTML("beforeend",st);
    input.value=""
    }
})


list.addEventListener('click',(e)=>{
    const piece=e.target;
    if(piece.classList.contains("delete")){
        const fullpiece=piece.parentElement;
        fullpiece.classList.add('remove')
        setTimeout(()=>{
            fullpiece.remove();
        },400)
    }
    if(piece.classList.contains("done")){
        const fullpiece=piece.previousElementSibling;
        fullpiece.classList.toggle("stiff")
        piece.classList.toggle("stif")
    }
})

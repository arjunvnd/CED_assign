console.log(`Hello`)

// let addEl = document.getElementById('addTask');
// addEl.onclick = refreshPage;

// function refreshPage(){
//     location.reload('/')
// }

let tdElement=document.querySelector('table');
let completeBtn = tdElement.firstElementChild; 
tdElement.onclick=complete;
function complete(e){
    if(e.target.className==="complete"){
        // console.log(`Hell`)
        console.log(e.target.parentElement.previousElementSibling.value)
        let id = e.target.parentElement.previousElementSibling.value;
        let data = {id:id}
        fetch('http://localhost:3000/complete',{method:"POST",body:JSON.stringify(data),headers: {
            "Content-Type": "application/json"}})
            .then(e=>{
                location.reload()
            })
    }
    
    // if()
    // console.log(e.target.className)
}
 

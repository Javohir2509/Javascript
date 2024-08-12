let checkbox = document.getElementById("checkbox")
let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a3 = document.getElementById("a3")
let button = document.getElementById("button")


button.onclick = function () {
    if (checkbox.checked && a1.checked || checkbox.checked && a2.checked || checkbox.checked && a3.checked) {
        document.getElementById("h2").textContent=("You have completed the registration")
        
    }
    else {
        document.getElementById("h2").textContent=("You haven't completed the registration yet")
    }


    // if (Mr.checked){
    //     document.getElementById("h2").textContent=("You have completed the registration")
    // }

    // if (Mrs.checked){
    //     document.getElementById("h2").textContent=("You have completed the registration")
    // }

    // if (none.checked){
    //     document.getElementById("h2").textContent=("You have completed the registration")
    // }

    
}


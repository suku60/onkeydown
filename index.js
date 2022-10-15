const init = () => {
    document.addEventListener("keydown", keydown)
}

const keydown = (e) => {
    let indicator = document.getElementById("indicator") ;

    indicator.textContent = e.keyCode
    
    console.log(e.keyCode)
}

init();


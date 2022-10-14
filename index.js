const init = () => {
    
    document.addEventListener("keydown", keydown)
}

const keydown = (e) => {
    console.log(e.keyCode)
}

init();


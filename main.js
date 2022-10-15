const init = () => {
    document.addEventListener("keydown", keydown)
}

const keydown = (e) => {

    let indicator = document.getElementById("indicator") ;    

    let size = Math.floor(Math.random() * (2.5 - 1.8 + 1) + 1.8)

    indicator.textContent =  e.keyCode;

    if(indicator.style.color === "black"){
        indicator.style.fontSize = size + "em";
        indicator.style.opacity = "1";
        indicator.style.color = "#FFA363";
    }else{
        indicator.style.fontSize = size + "em";
        indicator.style.color = "black";
        indicator.style.opacity = ".8";
        indicator.style.fontSize = "2em"
    }

    console.log(e.keyCode)
}

init();


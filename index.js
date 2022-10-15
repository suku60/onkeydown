const init = () => {
    document.addEventListener("keydown", keydown)
}

const keydown = (e) => {

    let indicator = document.getElementById("indicator") ;    

    let size = Math.floor(Math.random() * (2.5 - 1.8 + 1) + 1.8)

    indicator.textContent = e.keyCode;
    indicator.style.fontSize = size + "em";

    if(indicator.style.color === "black"){
    indicator.style.fontSize = size + "em";
    indicator.style.color = "#B3A49D";
    }else{
        indicator.style.color = "black";
        indicator.style.fontSize = "2em"


    }

    console.log(e.keyCode)
}

init();


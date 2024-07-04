
let gridDiv = document.querySelector("#gridContainer")
let colorDiv = document.querySelector("#colorContainer");
let optionsDiv = document.querySelector("#optionsContainer");
let color = "black";

createGrid(16);

















//funzione per creare la griglia:
function createGrid(dim){
    
    for(let i = 0; i<(dim**2); i++){
            let div =  document.createElement("div");
            
            div.style.cssText = `flex: 1 0 calc(100%/ ${dim});`;
            div.classList.add("grid");
            gridDiv.appendChild(div);
    }
}

//eventListener per poter disegnare sulla lavagna:
gridDiv.addEventListener("mouseover", (e) =>{
    let target = e.target;
    if(target.classList.contains("grid")){
    target.style.backgroundColor = color;
    }
});

//eventlistener che permette di cambiare colore:
colorContainer.addEventListener("click", (e)=>{
    let target = e.target;

    switch(target.id){
        case "black":
            color = "black";
            break;
        case "white":   
            color = "white"
            break;
        case "red":
            color = "red";
            break;
        case "blue":
            color = "royalblue";
            break;
        case "green":
            color = "mediumspringgreen";
            break;
        case "delete":
            color = "rgba(121, 103, 103, 0.26)"
            break;

    }
})

//event listener per cambiare dimensione della griglia:
optionsDiv.addEventListener("click", (e)=>{
    let target = e.target;
    if(target.id === "changeSize"){
        let size = Math.floor(prompt("Inserisci la dimensione della griglia (limite max: 100x100): "));
        if(size < 0 || size > 100|| isNaN(size)|| size === 0){
            alert("Input non valido!");
        }else{
        while(gridDiv.hasChildNodes()){
            gridDiv.removeChild(gridDiv.firstChild);
           }
        
        createGrid(size);
        }
    }else if(target.id === "clear"){
        const childList = document.querySelectorAll(".grid");
            childList.forEach(element => {
                element.style.backgroundColor = "rgba(121, 103, 103, 0.26)";
            });
        }
    
    
});
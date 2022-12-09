let length = "42px";
let x = 0;
let y = 0;
window.onload = () => {
    const border = document.createElement("div");
    border.id = "border";
    border.style.width = "1000px";
    border.style.display = "flex";
    border.style.flexWrap = "wrap";
    document.body.appendChild(border);
    for(let i = 1; i < 22; i++){
        for(let j = 1; j < 22; j++){
            const cell = document.createElement("div");
            cell.id = i+"x"+j;
            cell.textContent = cell.id;
            cell.style.width = length;
            cell.style.height = length;
            cell.style.borderStyle = "solid";
            cell.style.borderWidth = "2px";
            cell.style.display = "flex";
            cell.style.alignItems = "center";
            cell.style.justifyContent = "center";
            border.appendChild(cell);
        }
        
    }
}
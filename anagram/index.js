
let length = "110px";
let borderWidth = "2394px";
//change these numbers for different aspect
let x = 22;
let y = 22;

window.onload = () => {
    let left = 0;
    let top = 0;
    const border = document.createElement("div");
    
    border.id = "border";
    border.style.width = borderWidth;
    border.style.display = "flex";
    border.style.flexWrap = "wrap";

    document.body.appendChild(border);
    for(let i = 1; i < y; i++){
        for(let j = 1; j < x; j++){
            const cell = document.createElement("div");
            cell.id = j+"x"+i;

            if(document.getElementById(j-1 + "x" + i) == null){
                left = 0;
            }else{
                left = parseInt(document.getElementById(j-1 + "x" + i).textContent);
            }
            
            if(document.getElementById(j + "x" + (i-1)) == null) {
                top = 0;
            } else {
                top = parseInt(document.getElementById(j + "x" + (i-1)).textContent);
            }
            //console.log(left, " + ", top, " = ", left+top);
            cell.textContent = (left+top === 0) ? 1 : left+top;
            
            cell.style.width = length;
            cell.style.height = length;
            cell.style.borderStyle = "solid";
            cell.style.borderWidth = "2px";
            cell.style.display = "flex";
            cell.style.flex = "wrap";
            cell.style.alignItems = "center";
            cell.style.justifyContent = "center";

            border.appendChild(cell);
        }
    }
}

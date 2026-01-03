let spaces = document.querySelectorAll(".space")
const button = document.querySelector("button")
let grid=[-1,-1,-1,
            -1,-1,-1,
            -1,-1,-1];
let val="X"
let winner=null;
function verifyDiag(grid){
    if (grid[0]!==-1 && grid[0]===grid[4] && grid[4]===grid[8]){winner=grid[0]}
    if(grid[2]!==-1 && grid[2]===grid[4] && grid[4]===grid[6]){
        winner=grid[2]
    }
    return (grid[0]!==-1 && grid[0]===grid[4] && grid[4]===grid[8]) || (grid[2]!==-1 && grid[2]===grid[4] && grid[4]===grid[6])

    }

function verifyHoriz(grid){
    for(let i = 0;i<=6;i+=3){
        if (grid[i]!==-1 && grid[i]===grid[i+1] && grid[i+1]===grid[i+2]){
            winner=grid[i]
            return true
        }
    }
    return false
    
}
function verifyVert(grid){
    for(let i = 0;i<=3;i+=1){
        if (grid[i]!==-1 && grid[i]===grid[i+3] && grid[i+3]===grid[i+6]){
            winner=grid[i]
            return true
        }
    }
    return false
    
}
function verifyWin(grid){
    console.log(verifyDiag(grid))
    console.log(verifyHoriz(grid))
    console.log(verifyVert(grid))
    if(
    verifyDiag(grid) ||
    verifyHoriz(grid)||
    verifyVert(grid)){

    let h1=document.createElement("h1")
    h1.innerText=`${val} wins`
    h1.style.margin="0 auto"
    const body=document.querySelector("body");
    body.append(h1)

}

}
for (space of spaces){
    space.addEventListener("click",(e)=>{
        let x =e.target.attributes.id.value;
        e.target.innerText=val;
        if (val==="X"){
            grid[parseInt(x)-1]=1
            verifyWin(grid)
            val="O"
            console.log(grid)
        }
        else{
            
            grid[parseInt(x)-1]=0
            verifyWin(grid)
            val="X"
            console.log(grid)
        }
        
    })
}
button.addEventListener("click",()=>{for (space of spaces){
    space.innerText=""
    grid=[-1,-1,-1,
            -1,-1,-1,
            -1,-1,-1];
    winner=null;
    }}
   )
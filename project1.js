let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGame=document.querySelector(".newGame");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector(".msg")


let turnO=true
const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];


const resetGame=()=>{

enablebtn()
box.innerText=""
box.classList.add("hide")



}

const disablebtn=()=>{
for(box of boxes){
    box.disabled=true
}

}

const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false

    }
    
    }


const showWinner=(winner)=>{
msg.innerText=`Congratulations!Winner is ${winner}.`;
msgContainer.classList.remove("hide")
disablebtn();


};


boxes.forEach((box)=>{
box.addEventListener("click",()=>{

console.log("the box was clicked");
if(turnO){
    box.innerText="O"
    turnO=false
}else{
    box.innerText="X"
    turnO=true
}box.disabled=true
checkWinner();
})
})
const checkWinner=()=>{
for(  let patterns of winPatterns  ){
    let pos1Val=boxes[patterns[0]].innerText;
    let pos2Val=boxes[patterns[1]].innerText;
    let pos3Val=boxes[patterns[2]].innerText;
    if(pos1Val != "" && pos2Val != ""&& pos3Val != ""){
if(pos1Val==pos2Val && pos2Val==pos3Val ){
    console.log("winner",pos1Val)
    showWinner(pos1Val);
        }
     }
   }
 }
 
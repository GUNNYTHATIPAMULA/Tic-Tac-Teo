const winnig=[
    [0, 1, 2] ,
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5] ,
    [6,7,8],
];
let turnx=true;
let win=document.querySelector(".winner");

let par=document.querySelector("#para");
let boxes=document.querySelectorAll(".box");

boxes.forEach((b) => {
    b.addEventListener("click",()=>{
        console.log("clivk");
        if(turnx){
            turnx=false;
            b.innerText="x";
        }
        else{
            b.innerText="o";
            turnx=true;
            
        }
        boxes.disabled = true;

       winner();

});
});
let winner=() =>{
for (let pos of winnig) {
    let position= boxes[pos[0]].innerText;
    let position1=boxes[pos[1]].innerText;
    let position3=boxes[pos[2]].innerText;
    if(position !="" && position1 !="" && position3 !=""){
        if(position==position1 && position1==position3){
          console.log("winners",position);
            showwinner(position);
          console.log("his")
        }
    }
}
}
const showwinner=(winners)  =>{
          par.innerText=`you won ${winners}`;
          win.classList.remove("hide");
 
}

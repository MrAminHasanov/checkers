const box=document.querySelector(".box");
for(let i=0;i<8;++i){
    box.innerHTML+=
    `
    <div class="unboxl1"></div>
    `
}
let c;
const ver=document.querySelectorAll(".unboxl1");
for(let i=0;i<8;++i){
    if(i%2==0){
        c=true;
    }
    else{
        c=false;
    }
    for(let j=0;j<8;++j){
        if(c){
            ver[i].innerHTML+=
            `
            <div class="unboxl2" style="background-color:rgb(231, 226, 226)">
            </div>
            `
            c=false;
        }
        else{
            if(i<3){    
                ver[i].innerHTML+=
                `
                <div class="unboxl2 " style="background-color:rgb(43, 155, 48)">
                <div class="kam-bel"></div>
                </div>
                `
            }
            else if(i<5){   
                ver[i].innerHTML+=
                `
                <div class="unboxl2" style="background-color:rgb(43, 155, 48)"></div>
                `
            }
            else{    
                ver[i].innerHTML+=
                `
                <div class="unboxl2" style="background-color:rgb(43, 155, 48)">
                <div class="kam-cher"></div>
                </div>
                `
            }
            c=true;
        }
    }
}
kletka=document.querySelectorAll(".unboxl2"); 
box.addEventListener("click",function(e){
    if(e.target.classList=="kam-cher"){
        
    }
})

const box=document.querySelector(".box");
let test=true;
let cr = {//cordinates
    xst: 0,//x start
    yst: 0,//y start
    xaf: 0,//x after
    yaf: 0 //y after
}
let st, dir //st-start or chosen stone ,dir-moving direction 
, hlu, hru, hld, hrd //horiznotal-(left-right)-(up-down)
,test2 = true //follow for white/black stone order
,stn //orgonize stone type
,stn2 //help stn
,uds = -1 //(up-down-system)reguler vertical direction of stone
,test3 = false //check taking combo
,chose_selector = 1
rotater = true; //check for rotate stng

test = true //follow for clcik order
create_table();//createing table
box.addEventListener("click",function(e){
    if(chose_selector==1){
        regular();
        if(test){
            getstartcr(e);
        }
        else{
            mgihs(e);
            getblackround();
        }
    }   
    else if(chose_selector==2){
        stoneadd(e);
    }
})
// #region chess work
// box.addEventListener("click",function(e){
//     console.log(e.target.classList[0]==="unboxl2" && e.target.innerHTML==="");
// })
function mgihs(e){//(move,get information,hit system)
    if(test3){
        cr.xaf=Number(e.target.classList[1][1]);
        cr.yaf=Number(e.target.classList[1][2]);
        dir=document.querySelector(`.c${cr.xaf}${cr.yaf}`);
        taking();
    }
    else if(e.target.classList[0]==="unboxl2" && e.target.innerHTML===""){//geting direction and direction cr
        cr.xaf=Number(e.target.classList[1][1]);
        cr.yaf=Number(e.target.classList[1][2]);
        dir=document.querySelector(`.c${cr.xaf}${cr.yaf}`);
        moving();
    }
    else{
        test=true;
    }
}
function moving(){
    if(Math.abs(cr.xst-cr.xaf)===1 && (cr.yaf-cr.yst)===uds){
        dir.innerHTML=`<div class="${stn}"></div>`;
        st.innerHTML="";        
        test2 = !test2;
        rotatetable();
        test=true;
    }
    else{
        taking();
    }
}
function taking(){
    if(cr.xst-cr.xaf===-2){
        if(cr.yst-cr.yaf===-2){
            hlu=document.querySelector(`.c${cr.xaf-1}${cr.yaf-1}`);
            if(hlu.children[0].classList[0]===stn2){
                st.innerHTML="";    
                hlu.innerHTML="";
                dir.innerHTML=`<div class="${stn}"></div>`;    
                combocheck();
            }
        }
        else if(cr.yst-cr.yaf===2){
            hld=document.querySelector(`.c${cr.xaf-1}${cr.yaf+1}`);
            if(hld.children[0].classList[0]===stn2){
                st.innerHTML="";    
                hld.innerHTML="";
                dir.innerHTML=`<div class="${stn}"></div>`;
                combocheck();
            }
        }
    }
    else if(cr.xst-cr.xaf===2){
        if(cr.yst-cr.yaf===-2){
            hru=document.querySelector(`.c${cr.xaf+1}${cr.yaf-1}`);
            if(hru.children[0].classList[0]===stn2){
                st.innerHTML="";    
                hru.innerHTML="";
                dir.innerHTML=`<div class="${stn}"></div>`;
                combocheck();
            }
        }
        else if(cr.yst-cr.yaf===2){
            hrd=document.querySelector(`.c${cr.xaf+1}${cr.yaf+1}`);
            if(hrd.children[0].classList[0]===stn2){
                st.innerHTML="";    
                hrd.innerHTML="";
                dir.innerHTML=`<div class="${stn}"></div>`;
                combocheck();
            }
        } 
    }
    if(test3==false){
        test=true;
    }
}
function combocheck(){
    test3=false;
    if(cr.xaf>1){
        if (cr.yaf>1){
            if(document.querySelector(`.c${cr.xaf-1}${cr.yaf-1}`).innerHTML!="" && document.querySelector(`.c${cr.xaf-2}${cr.yaf-2}`).innerHTML==""){
                if (document.querySelector(`.c${cr.xaf-1}${cr.yaf-1}`).children[0].classList[0]==stn2){
                    test3=true;
                    cr.xst=cr.xaf;
                    cr.yst=cr.yaf;
                    st=document.querySelector(`.c${cr.xst}${cr.yst}`);
                }
            }
        }
        if(cr.yaf<6){
            if(document.querySelector(`.c${cr.xaf-1}${cr.yaf+1}`).innerHTML!="" && document.querySelector(`.c${cr.xaf-2}${cr.yaf+2}`).innerHTML==""){
                if (document.querySelector(`.c${cr.xaf-1}${cr.yaf+1}`).children[0].classList[0]==stn2){
                    test3=true;
                    cr.xst=cr.xaf;
                    cr.yst=cr.yaf;
                    st=document.querySelector(`.c${cr.xst}${cr.yst}`);
                }
            }
        }
    }
    if(cr.xaf<6){
        if (cr.yaf>1){
            if(document.querySelector(`.c${cr.xaf+1}${cr.yaf-1}`).innerHTML!="" && document.querySelector(`.c${cr.xaf+2}${cr.yaf-2}`).innerHTML==""){
                if (document.querySelector(`.c${cr.xaf+1}${cr.yaf-1}`).children[0].classList[0]==stn2){
                    test3=true;
                    cr.xst=cr.xaf;
                    cr.yst=cr.yaf;
                    st=document.querySelector(`.c${cr.xst}${cr.yst}`);
                }
            }
        }
        if(cr.yaf<6){
            if(document.querySelector(`.c${cr.xaf+1}${cr.yaf+1}`).innerHTML!="" && document.querySelector(`.c${cr.xaf+2}${cr.yaf+2}`).innerHTML==""){
                if (document.querySelector(`.c${cr.xaf+1}${cr.yaf+1}`).children[0].classList[0]==stn2){
                    test3=true;
                    cr.xst=cr.xaf;
                    cr.yst=cr.yaf;
                    st=document.querySelector(`.c${cr.xst}${cr.yst}`);
                }
            }
        }
    } 
    if(test3==false){
        test2 = !test2;
        rotatetable();
    }
}
function regular(){//find which stones turn and regular horizontal direction
    if(test2){
        stn="kam-bel";
        stn2="kam-cher";
        uds=1;
    }
    else{
        stn2="kam-bel";
        stn="kam-cher";
        uds=-1;    
    }
}
function getstartcr(e){
    if(e.target.classList[0]===stn){
    cr.xst=Number(e.srcElement.parentElement.classList[1][1]);//stone selector
    cr.yst=Number(e.srcElement.parentElement.classList[1][2]);
    st=document.querySelector(`.c${cr.xst}${cr.yst}`);
    st.children[0].style.borderColor="white";
    test=false;
    }
}
function create_table(){
    test=true;
    box.innerHTML = '';
    for(let i=0;i<8;++i){
        test=!test;
        for(let j=0;j<8;++j){
            if(test){//crating white unbox
                box.innerHTML+=
                `<div style="background-color:rgb(234, 236, 197)"></div>`;
            }
            else{//creating green unbox and stones
                if(i<3){//white stones
                    box.innerHTML+=
                    `<div class="unboxl2 c${j}${i}" style="background-color:rgb(59, 128, 63)"><div class="kam-bel"></div></div>`;
                }
                else 
                if(i<5){//center
                    box.innerHTML+=
                    `<div class="unboxl2 c${j}${i}" style="background-color:rgb(59, 128, 63)"></div>`;
                }
                else{//black stones
                    box.innerHTML+=
                    `<div class="unboxl2 c${j}${i}" style="background-color:rgb(59, 128, 63)"><div class="kam-cher"></div></div>`;
                }
            }
            test=!test;
        }
    }
    cr = {
        xst: 0,
        yst: 0,
        xaf: 0,
        yaf: 0 
    }
    test2 = true;
    uds = -1;
    test3 = false;
    box.style.transform="rotate(180deg)"; 
}
function getblackround(){
    if(st.innerHTML!=""){
        st.children[0].style.borderColor="black";
    }
}
function rotatetable(){
    if (rotater){
        if(test2) box.style.transform="rotate(180deg)";
        else box.style.transform="rotate(360deg)";
    }
}
// #endregion 
// #region settingbtn
const stngdr=document.querySelector(".stng");
document.querySelector("#seting").addEventListener("click",function(){//reset btn
    stngdr.classList.toggle("dp");
});
stngdr.children[0].addEventListener("click",function(){
    box.innerHTML="";
    create_table();
})//
const addstn=document.querySelector("#addbtn");//adstone btn
const white_black=document.querySelector("#addst");
let wb=true;
addstn.addEventListener("click" , function(){
    btnpres(addstn);
    white_black.classList.toggle("dp");
    white_black.classList.toggle("df");
    if (white_black.classList.contains("df")){
        chose_selector = 2;
    }
    else{
        chose_selector = 1;
    }
})  
white_black.addEventListener("click" , function(e){
    if (e.target.innerHTML=="black"){
        wb=false;
        white_black.children[1].style.transform="translate(28px,3px)"
    }
    else if(e.target.innerHTML=="white"){
        wb=true;
        white_black.children[1].style.transform="translate(4px,3px)"
    }
})
function stoneadd(e){
    if(e.target.classList[0]=="unboxl2" && e.target.innerHTML==""){
        if (wb){
            e.target.innerHTML=`<div class="kam-bel"></div>`;
        }
        else{
            e.target.innerHTML=`<div class="kam-cher"></div>`;   
        }
    }
    else if (e.target.classList[0]=="kam-bel" || e.target.classList[0]=="kam-cher"){
        e.srcElement.parentElement.innerHTML='';};
}
//
const rotbtn = document.querySelector("#rotate");
rotbtn.addEventListener("click", function(){
    btnpres(rotbtn);
    if (rotbtn.classList[0]=="stng_clickdown")rotater = false;
    else rotater = true;
})
function btnpres(a){
    a.classList.toggle("stng_clickdown");
    a.classList.toggle("stng_clickup");
}
// #endregion
document.querySelector("#getinfo").addEventListener("click",function(){
    console.log(
        test,
        test2,
        test3
    )
    // console.log("test:",test,"test2:",test2);
})
// Terre dhermes,sauvage   
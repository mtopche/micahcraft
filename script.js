 var char1 = document.getElementById("char1");
var t = 150;
var l = 150;
function move(info){
    info.preventDefault();
    
    if (info.keyCode==38){
        t=t -20;
        char1.style.top=t+"px";
    }
    //up=38
     if (info.keyCode==40){
        t=t +20;
        char1.style.top=t+"px";
    }
    //right=39
    if (info.keyCode==39){
        l=l +20;
        char1.style.left=l+"px";
    }
    //left=37
    if (info.keyCode==37){
        l=l -20;

        char1.style.left=l+"px";
    }
    //down=40
}
document.body.onkeydown=move;



function startdrag(brickId) {
    window.brick = document.getElementById(brickId);
    
    window.brick.style.position='absolute';
    event.clientX =0;   
    event.clientY =0;   
    
}

function dodrag(event) {
    //make the brick follow the mouse
    if (window.brick) {
        window.brick.style.left=event.clientX
        window.brick.style.top=event.clientY
    }
        
}

function stopdrag(event) {
    //stop the brick
    //unset the brick from the window
    delete window.brick;
}

//document.body.onmousedown=startdrag;
document.body.onmousemove=dodrag;
document.body.onmouseup=stopdrag;





function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('brick1');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
}

var  b1= document.getElementById('brick1'); 
document.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 


function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    console.log(event );
    var dm = document.getElementById('dragme');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;


var  b2= document.getElementById('dragme'); 
dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 

}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    











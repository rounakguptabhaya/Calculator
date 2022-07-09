var numOfbuttons = document.querySelectorAll(".flex-item").length;



for(var i = 0;i< numOfbuttons;i++){
    document.querySelectorAll(".flex-item")[i].addEventListener("click",function(){
        // console.log(this.innerHTML);
        if(this.innerHTML === 'C'){
            document.getElementById("scr").innerText = 0;    
        }
        else if(this.innerHTML === '='){
            console.log(eval(document.getElementById("scr").innerText))
            document.getElementById("scr").innerText = eval(document.getElementById("scr").innerText);
        }
        else if(document.getElementById("scr").innerText === '0'){
            document.getElementById("scr").innerText = this.innerHTML;
        }
        else{
            document.getElementById("scr").innerText += this.innerHTML;
        }
    })
}
let timerNumber = document.getElementById('timer')
let startBtn =  document.querySelector(".start")
let stopBtn =  document.querySelector(".stop")
let getTimeBtn =  document.querySelector(".getTime")
let infoArea =  document.querySelector(".infoArea")
let resetBtn =  document.querySelector(".reset")

let count = 0;
let intervalId; // This will store the interval ID

//let para = document.createElement('p') //📗🔖 why define in global ? benefit:- in any function we can removeChild.




startBtn.addEventListener('click', function(){

   start();

})

let start = ()=>{
    intervalId = setInterval(function(){
        count++;
        console.log(count);
        timerNumber.innerHTML = count;
        
    },1000)
    // console.log(intervalId);
    startBtn.setAttribute('disabled', '')
    
}


stopBtn.addEventListener('click', function(){

    stop();
 
})

let stop = ()=>{

   clearInterval(intervalId)
   startBtn.removeAttribute('disabled')

}


getTimeBtn.addEventListener('click', function(){

    if(count !== 0){
        getTime();
    }
    
})

let getTime = ()=>{

 let para = document.createElement('p')
 para.textContent = `The Stop time is ${count}`;
 infoArea.append(para);

}


resetBtn.addEventListener('click', function(){

    reset();
 
})

let reset = ()=>{

    clearInterval(intervalId)
    count = 0;
    timerNumber.innerHTML = '0';
    // p.innerHTML = '';
    // infoArea.removeChild(para)  
    // error:  The issue with your reset function lies in the line where you try to remove the para element: infoArea.removeChild(para). The variable para is only defined inside the getTime function, which makes it unavailable in the reset function.
    //📗🔖 
    infoArea.remove();

}
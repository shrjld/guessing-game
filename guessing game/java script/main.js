
// let title=document.getElementById("title").innerHTML;
// console.log(title)

// let item=document.getElementsByClassName("item")[1].textContent;
// console.log(item)


// let item2=document.querySelector(".item").innerHTML;
// console.log(item2)

// let valuee=document.querySelector("#value").value;
// console.log(valuee);

// function result() {
//     alert("hello")
// }

// let guuess=document.querySelector("#guess").addEventListener("click",result);=[]
// console.log(guuess)



let randNum=Math.floor(Math.random()*20);


document.querySelector("#guess").addEventListener("click", () => {
    let inputt = Number(document.querySelector("#value").value);
    if (inputt && inputt >=1){
        if(inputt>randNum){
           document.querySelector("#test").innerHTML="too long";
           document.querySelector("#test").style.color="rgb(200,0,0)";
        }
        else if(inputt<randNum){
            document.querySelector("#test").innerHTML="too short";
            document.querySelector("#test").style.color="rgb(200,0,0)";
        }
        else{
            document.querySelector("#test").innerHTML="you win"; 
            document.querySelector(".contain-game").style.backgroundColor="rgb(0,100,20)";
            document.querySelector("#test").style.color="rgb(0,200,0)";
            document.querySelector("#value").disabled=true
        }
   }
});






















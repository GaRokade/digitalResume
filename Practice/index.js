// let Num=34;
// GuessNum=prompt("Enter the number")
// while(GuessNum!=Num){
//     GuessNum=prompt("You Entered Wrong Number : Enter Again")
// }

// console.log("YOu Enterd Correct Number")


// Name=prompt("Enter your Full Name")
// userName="@"+Name+Name.length;
// console.log(userName)


// let gayu=[1,2,3,5]

// let sum=gayu.reduce((res,cur)=>{
//     return res+cur
// });
  
// console.log(sum)

// let sum1=gayu.reduce((res,cur)=>{
//     return res<cur ? res :cur
// })

// console.log(sum1)

// let n=prompt("Enter the number")
// let arr=[];
// for(let i=1;i<=n;i++){
// arr[i-1]=i
// }

// console.log(arr)

// let sum2=arr.reduce((res,cur)=>{
//   return res+cur
// })
// console.log(sum2)

// let mul=arr.reduce((res,cur)=>{
//     return res*cur
// })
// console.log(mul)

// let st=[90,34,89,45,99,900,102,75,96]

// let fill=st.filter((val)=>{
//  return val>90
// })

// console.log((fill))

// let divs=document.querySelectorAll(".box")
// let i=1;
// for(val of divs){
//    val.innerText=`new val is ${i}`
//    i++;
// }

// let div=document.querySelector("div")
// console.dir(div)

// let lot=document.querySelector("div")
// console.log(lot.getAttribute("class"))
// console.log(lot.getAttribute("name"))
// console.log(lot.setAttribute("class","newClass"))

// let btn=document.createElement("button")
// btn.innerText="Click me"
// console.log(btn)
// let div=document.querySelector("div")
// div.before(btn)

// let newhead=document.querySelector("h1")
// newhead.innerHTML="<i>Hi , My name is gayatri</i>"
// document.querySelector("body").after(newhead)
// newhead.remove()

// let para=document.querySelector("p")
// para.remove()

// let newBtn=document.createElement("button")
// newBtn.innerText="Click me"
// newBtn.style.backgroundColor="red"
// newBtn.style.color="white"
// document.querySelector("body").prepend(newBtn)

let newClass=document.querySelector("p")
console.log(newClass.getAttribute("class"))
//console.log(newClass.setAttribute("class","newClass"))
newClass.classList.add("newClass")

let changeCol=document.querySelector("#id1")
let curMode="light"
changeCol.addEventListener("click",()=>{
    if(curMode=="light"){
       curMode="darrk"
       document.querySelector("body").style.backgroundColor="black"
       
    }
    else{
        curMode="light"
        document.querySelector("body").style.backgroundColor="white"
        
    }
    console.log(curMode)
})
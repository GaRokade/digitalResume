// Student={
//     name:"John",
//     marks:546,
//     printMarks(){
//         console.log("Marks is",this.marks);
//     }


// }

// let Employee={
//     calcTacx(){
//         console.log("Tax is 10%");
//     }
// }

// let Karan={
//     salary:50000,
//     calcTacx(){
//      console.log("tax is 20%")
//     }
// }

// Karan.__proto__=Employee


// class ToyotaCar{
//     constructor(brand){
//         console.log("created one object")
//         this.brand=brand
//     }
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }

//     setBrand(brand){
//         this.brand=brand
//     }

// }

// let fortuner=new ToyotaCar("bryu")
// //fortuner.setBrand="gayatri"
// class Person{
//     constructor(){
//         this.species="home sapiens"
//     }

//     eat(){
//         console.log("eating")
//     }
// }

// class Enginner extends Person{
//     constructor(branch){
//         super()
//         this.branch=branch
//     }
//     work(){
//         console.log("problem Solving")
//     }
// }

// let enginerObj=new Enginner("Computer")
// let Data="secrete imfo"
// class User{
//     constructor(name,email){
//         this.name=name
//         this.email=email
//     }

//     Viewdata(){
//   console.log("the view is ",Data)
//     }
// }

//  class Admin extends User{
//     constructor(name,email){
//         super(name,email)
//     }

//     editdta(){
//         console.log("new dat")
//     }
//  }


// let st=new User("gayat","gayat@gmail.com")
// let ri=new Admin("sam","sam@gmail.com")


// console.log("One ")
// console.log("Two")
// setTimeout(()=>{
//     console.log("hello")
//     console.log("I a, fine ")
// },5000)

// console.log("THree")
// console.log("Four")

// function time(dataId, gettime){
//     setTimeout(()=>{
//         console.log("time is ",dataId);
//     if(gettime){
//         gettime();
//     }
//     },4000)
// }

// time(1,()=>{
//     time(2,()=>{
//         time(3,()=>{

//         })
//     })
// })

// function Sum(a,b){
//    console.log(a+b)
// }

// function calculator(a,b,Sumcall){
//     Sumcall(a,b)
// }
// calculator(5,6,Sum)

// Promise((resolve,reject)=>{
//     console.log("This is a Promise")
// })


// function data(){
//     return new Promise((resolve,reject)=>{
//       console.log("this is a promise")
//     })
// }

// let promise=new Promise((resolve,reject)=>{
//     console.log("this is a promise")
// })

// let promise=new Promise((resolve,reject)=>{
//   console.log("this is a promise")
//   //resolve(123)
//   reject("Error Occured")
// })

// function getdata(dataId,gettime){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      console.log("time is ",dataId)
//      resolve("I have get data")
//      if(gettime){
//       gettime();
//      }
//     },5000)
//   })
// }


// const getData=(()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("This is my promise")
//     //resolve("I have get data")
//     reject("Error Occured")
//   })
// });

// let promise=getData()
// promise.then((res)=>{
//   console.log("This is my then",res)
// })

// promise.catch((err)=>{
//   console.log("This is my catch",err)
// })

// const asyncData=()=>{
//   return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//       console.log("Promise get returned")
//     resolve("I have get data")
//     },3000)
//   })
// }

// const asyncData2=()=>{
//   return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//       console.log("Promise get returned")
//     resolve("I have get data")
//     },3000)
//   })
// }
// console.log("fetching data 2")
// let p1=asyncData().then((res)=>{
//   console.log("This is my then2")
//   let p2=asyncData2().then((res)=>{
//     //console.log("This is my then",res)
//   })
//})

// function Fetchdata(data){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("Promise get returned",data)
//       resolve("success")
//     },3000)
//   })
// }

// async function name(){
//   await Fetchdata(1)
//   await Fetchdata(2)

//   await Fetchdata(3)

// }
// ///automatic code execution
// (async function(){
//   await Fetchdata(1)
//   await Fetchdata(2)

//   await Fetchdata(3)

// })()

let fatc=document.querySelector("#fact")
let btn=document.querySelector("#btn")
let url="https://cat-fact.herokuapp.com/facts"
const fuct= async()=>{
  let response=  await fetch(url)
  console.log(response)
  let data= await response.json()
  
  fatc.innerText=data[0].text
}

btn.addEventListener("click",fuct)


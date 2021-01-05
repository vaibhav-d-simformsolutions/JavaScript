
// function fontSize(size){
//     function editSize(){
//         document.body.style.fontSize = size + "px";
//     }
//     return editSize;
// }


// var smaller = fontSize(5);
// var small = fontSize(10);
// var large = fontSize(20);
// var x_large = fontSize(25); 
// var normal = fontSize(15);
// document.getElementById("smaller").onclick = smaller;
// document.getElementById("small").onclick = small;
// document.getElementById("large").onclick = large;
// document.getElementById("x-large").onclick = x_large;
// document.getElementById("normal").onclick = normal;

// // get json 
// let req = new XMLHttpRequest();
// req.open('GET','https://reqres.in/api/users?page=2');
// req.send();
// req.onload = function (){
//     console.log(JSON.parse(req.response))
// }

// // Making Object
// let person = [
//     {
//         name:"dswdwf",
//         age :"20"
//     },
//     {
//         name:"dsfewfwewdwf",
//         age :"21"
//     },
//     {
//         name:"dsqweqwdwf",
//         age :"22"
//     },
//     {
//         name:"dsjyukwdwf",
//         age :"23"
//     },
//     {
//         name:"dswmtmdwf",
//         age :"24"
//     }]
// let jsn = JSON.stringify(person);
// // Print Object
// document.getElementById("div1").innerHTML = jsn;
// let txt = "<ul>";
// for(let i = 0;i<person.length;i++)
// {
//     txt += "<li>" + "Name :" + person[i].name + "</li></br>" + "<li>" + "Age :" + person[i].age + "</li></br>"  
// }
// txt += "</ul>";
// document.getElementById("div2").innerHTML = txt;

// // Closure
// function addBy(value)
// {
//     function addValue(inp){
//         return value+inp;
//     }
//     return addValue;
// }

// let first = addBy(2);
// let result = first(5);
// let result1 = first(8)
// console.log(result);
// console.log(result1);

// //Scope
// let new_var = 50;
// function fun(){
//     console.log(new_var);
// }
// {
//     let new_var = 55;
//     //var new_var1 = 100;
// }

// fun();



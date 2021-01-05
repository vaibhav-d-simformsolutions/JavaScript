// function helloFirst(){
//     console.log("Hello");
// }
// function blockfor1sec(){
//     console.log("In Block")
// }
// setTimeout(helloFirst,1000)
// setTimeout(blockfor1sec,3000);


// console.log("Me First");
// console.log("Me First");


// //Rest Parameters
// function manyArgs(a,b,...args){
//     console.log(a);
//     console.log(b);
//     console.log(args);
// }
// manyArgs(1,2,3,4,5,6);

// //Arrow Function
// const arr = [];
// const value = [11,2,3,4,5,6,7,8,9,0];
// value.forEach(value=> {
//     if(value%3==0){
//         arr.push(true);
//     }
//     else{
//         arr.push(false);
//     }
// })
// console.log(arr);

// //iterate through array of json

// let json = [
//     {
//         "name":"fekfbw",
//         "Age":"20"
//     },
//     {
//         "name":"fwafd",
//         "Age":"21"
//     },
//     {
//         "name":"fwcasfvaafd",
//         "Age":"22"
//     },
//     {
//         "name":"fwevafd",
//         "Age":"23"
//     }
// ]

// for(let i=0;i<json.length;i++)
// {
//     let new_var = json[i];
//     console.log(`Name : ${new_var.name}`);
//     console.log(`Age : ${new_var.Age}`);
//     console.log("");
// }

// class myClass{
//     constructor(key,value){
//         this.key = key;
//         this.value = value 
//     }
//     display(){
//         console.log(`${this.key} : ${this.value}`);
//     }
// }
// let data = new myClass("key1","Value1");
// let data1 = new myClass("key2","Value2");
// data.display();
// data1.display();
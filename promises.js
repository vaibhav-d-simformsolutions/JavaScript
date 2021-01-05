
// function getData() {
//     var prom = new Promise((resolve, reject) => {
//         const req = new XMLHttpRequest();
//         req.open('GET',"https://reqres.in/api/users?page=2");
//         req.send();
//         req.onload = () => {
//             resolve(req.response);
//         }
//         req.onerror = () => {
//             reject(req.responseText);
//         }
//     })
//     return prom;
    
// }
// getData().then(data => {console.log(data);}).catch(data => {console.log(data);})

// function promise(){
//     var prom1 = new Promise((resolve, reject) => {
//         let a = 1;
//         if (a) {
//             resolve("A is not Empty.");
//         }
//         else{
//             reject("A is Empty");
//         }
//     })
//     return prom1;
// }
// promise().then(data => {console.log(data)}).catch(data => {console.log(data)});

// Promise.all[prom,prom1].then(data => {console.log(data);}).catch(data => {console.log(data)});

// function getLocation() {
//     return new Promise((resolve,reject) => {
//         navigator.geolocation.getCurrentPosition(
//             (success) =>{
//                 resolve(success);
//             },
//             (err) =>{
//                 reject(err);
//             });
//     });  
// }


// function fun(duration) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {resolve("In Fun");},duration);
//     })
    
// }

 
// getLocation()
// .then(data => {console.log(data);})
// .catch(err => {console.log(err)})
// .then( () => {console.log("In Last Then");});

// function fun(message){
//     return new Promise((resolve, reject) => {
//         console.log("Getting Message...");
//         if (message) {
//             resolve(message);
//         }
//         else{
//             reject("Any Message is Not Passed...");
//         }
//     })
// }
// function foo(data) {
//     return new Promise((resolve, reject) => {
//         resolve(`Hello Vaibhav!!! ${data}`);
//     })
// }

// async function fooo() {
//     try{
//         const res = await fun("How Are You?");
//         const res2 = await foo(res);
//         console.log(res2);
//     }
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log("All Completed...");
//     }
    
// }
// fooo();
// try{
//     fun("Hello Vaibhav!!!").then((message) => {
//         console.log(message);
//         return foo("How are You? I'm in foo");
//     }).then(message => {
//         console.log(message);
//     }).catch( err => {
//         console.log(err);
//     })
// }catch(err){
//     console.log(err);
// }

// function foo(message) {
//     return new Promise((resolve, reject) => {
//         if (message) {
//             resolve(message);
//         }
//         else{
//             reject("Any Message is not Passed...");
//         }
//     })
// }
// function fooo() {
//     return new Promise((resolve, reject) => {
//         let x = 1;
//         if (!!x) {
//             resolve("X is not Empty");
//         }
//         else{
//             reject("X is Empty");
//         }
//     })
// }
// Promise.race([fooo(),foo("Hello Vaibhav")]).then(data => {console.log(data);}).catch(data => {console.log(data);})
// Promise.race([foo("Hello Vaibhav"),fooo()]).then(data => {console.log(data);}).catch(data => {console.log(data);})
// Promise.all([foo("HEllo Vaibhav"),fooo()]).then(data => {console.log(data);}).catch(data => {console.log(data);})
// Promise.allSettled([foo("Hello Vaibhav"),fooo()]).then(data => {console.log(data);}).catch(data => {console.log(data);})
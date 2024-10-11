
//pattern//

// let nsp=0;
// let nst=5;
// for(let row=1;row<=5;row++){
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")
//     }
//     console.log();
//     nsp=nsp+1;
//     nst=nst-1;
// }


// anybase to anybase//

// function anybasetodecimal(num,base){
//     let ans=0;
//     let pow=1;
//     while(num>0){
//         let rem=num%10;
//         num=Math.floor(num/10)
//         rem=rem*pow;
//         ans=ans+rem;
//         pow=pow*base;
//     }
//     return ans;
// }

// function decimaltoanybase(num,base){
//         let ans=0;
//         let pow=1;
//         while (num>0){
//             let rem=num%base;
//             num=Math.floor(num/base);
//             rem=rem*pow;
//             ans=ans+rem;
//             pow=pow*10;
//         }
//         return ans;
//     }

// function anybasetoanybase(num1,base1,base2){

//     let decimalnumber=anybasetodecimal(num1,base1);
//     let finalconvertednumber=decimaltoanybase(decimalnumber,base2)

//     console.log(finalconvertednumber);
// }
// anybasetoanybase(40,10,8) 


//anybase addition//

// function anybaseaddition(base,num1,num2){
//     let ans=0;
//     let c=0;
//     let pow=1;
//     while(num1>0 || num2>0 || c>0){
//         let num1ld=num1%10;
//         let num2ld=num2%10;
//         num1=Math.floor(num1/10);
//         num2=Math.floor(num2/10);
//         let d=num1ld+num2ld+c;
//         c=Math.floor(d/base);
//         d=d%base;
//         ans+=d*pow;
//         pow=pow*10;
//     }
//     return ans;
// }
// let sum=anybaseaddition(10,40,30);
// console.log(sum);


//introduction to array//

// const arr = [1,2,3,4]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
    
// }


//To print count of number of word in a name//

// let name=["saksh","anur","qqq","raj"]
// for(let i=0;i<name.length;i++){
//     if(name[i].length === 4){
//         console.log(name[i]);
//     }
// } 


//string use to replace word in a sentence//

// let p="Alhan khoshal"
// console.log(p.replace('n','m'))


// const myarr=[0,1,2,3,4];
// myarr.push(8);
// myarr.pop(8);
// myarr.unshift(12);
// myarr.shift(12);
// console.log(myarr);

// // console.log(myarr.splice(1,2));
// // console.log(myarr);
// console.log(myarr.slice(0,4));
// console.log(myarr);


  


// let names =["vikas","chaudhary","aman0","academy"]
// names.splice(2,3,"nitin","vijay","rehman")



// console.log(names);


//function constructor//

// function Employees(name,age,salary,dept,task){
    
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
//     this.dept=dept;  
//     this.task=task;

// }
// let emp1=new Employees("Alham",18,10000,"full stuck");
// let emp2=new Employees("Salman",20,20000,"Web design");
// let emp3=new Employees("Sultan",30,15000,"Admin",function(){
//     console.log("i am from admin dept");
// })
// // console.log(employee1==employee2);
// // console.log(employee1);
// console.log(emp3)


//set timeout//

// setTimeout(() =>{
//     console.log("Alham");
// },2000);

// setInterval(() => {
//     console.log("Alham");
// },3000);


// setTimeout(()=>{
//     setInterval(()=>{
//       console.log("Alham")
//     },3000)
// },2000)


//clock using set timeout and set interval//

// let sec=0;
// let min=0;
// let hr=0;
// setInterval(()=>{
//     sec++;
//     if(sec==60){
//         min++;
//         sec = 0;
//     }
//         if(min==60){
//             hr++;
//             min=0;
//         }
//         console.log("sec",sec);
//         console.log("min",min);
//         console.log("hr",hr);       
//     },1000)
        

class Animal {
    constructor(hands,legs,gender){
        this.hands=hands;
        this.legs=legs;
        this.gender=gender;
    }
}
let Animal1=new Animal("2","2","Male",function(){
    console.log("Dog");
    
});
console.log(Animal1);







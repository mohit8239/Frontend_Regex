let a=4;
console.log(a)
console.log("hello")

let b=10.7;
console.log(b)
console.log(typeof b)

let age= -5;
if(age>0){
    console.log("number is positive")
}else{
    console.log("number is negative")
}

let num = 95;
if(num>=95){
    console.log(1500)
}
if(num>70){
    console.log(1000)
}
if(num>50){
    console.log(500)
}else{
    console.log("Nothing")
}
let ar=2
for(i=1;i<=10;i++){
    console.log(ar,"*",i,"=",ar*i)
}
let q=1
while(q<=50){
    console.log(q)
    q++
}
let p=50
while(p>=1){
    console.log(p)
    p--
}
let w="a"
while(w<="z"){
    console.log(w)
    w = String.fromCharCode(w.charCodeAt(0) + 1);
    
}
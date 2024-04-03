
// //一个函数的声明，这个函数很简单，只打印"Hello World!"
// function sayHello(){
//     println("Hello World!!!!");
// }
// //调用刚才声明的函数
// sayHello();
// sayHello();

/**
 * 示例程序，由play.js解析并执行。
 * 特性：对变量的支持。
 */

// //那年才18
// let myAge:number = 18;

// //转眼10年过去
// myAge = myAge + 10.5;

// println("myAge is: ");
// println(myAge);


// // 05
// //计算圆的面积
// function circleArea(r : number):number{
//     let area : number = 3.14*r*r;
//     return area;
// }
// let r:number =4;
// println(circleArea(r));


// 06
function fibonacci(n:number):number{
    if (n <= 1){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

for (let i:number = 0; i< 30; i++){
    println(fibonacci(i));
}

let i: number = 900;
if (i <= 10) {
    println("差生");
} else if (i > 10 && i <= 90) {
    println("中等");
} else {
    println("优秀");
}

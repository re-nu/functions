const num=[11,2,3,10,6,7,27,22]

const str=["pop","hello","radar","om","madam"];

function oddf(num) {
    const nm=num
    const arr=[];
    for(i=0;i<nm.length;i++){
       if(!(nm[i]%2)==0){
        arr.push(nm[i])
       }
    }

    return arr;
    
}

function sum(num) {
    const nm=num;
    let sum=0;

    for(i=0;i<nm.length;i++){
        sum+=nm[i];
    }
    return sum;
}

function palindrome(str){
    const nm=str;
    const arr=[];
    for(i=0;i<nm.length;i++){
        if([...nm[i]].join('')===[...nm[i]].reverse().join('')){
            arr.push(nm[i])
        }
     }
     return arr;

}

console.log("normal function to print odd numbers",oddf(num))

console.log("normal function to add all array elements ",sum(num));

console.log("normal palindrome function",palindrome(str));

const odd=num.filter((i)=>!(i%2===0))
console.log("arrow function for odd numbers",odd)

const sumA=num.reduce((total,i)=>total+i,0);
console.log("arrow function for add all numbers",sumA)


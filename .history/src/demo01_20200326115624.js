
function myAdd(num){
    let sum=0
    return add(num)
    function add(num) {
        if(num==null){
            return sum
        }
        sum+=num
        return add
    }
}


console.log(add(1) (2) (3) (4)());
console.log(add(1));
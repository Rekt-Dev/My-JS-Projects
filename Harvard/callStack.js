function addOne(num){
        return num+1
}

function getNum(){
        return addOne(10)
}

function c(){
        return getNum()+getNum()
}

let result = c()
console.log(`this is result ${result}`)
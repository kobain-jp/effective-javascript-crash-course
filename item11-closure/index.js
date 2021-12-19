// 1
function count(){
    let counter = 1;
    return function(){
        return counter = counter+1;
    }
}

const a = count();
const b = count();

console.log(a());
console.log(a());
console.log(b());


// 2
function countFromStartVal(startValue){
    return function(){
        return startValue = startValue+1;
    }
}

const c = countFromStartVal(12);
console.log(c());
console.log(c());

// 3 immutable object
function Emp(empNo,empNm){
    const _empNo = empNo;
    const _empNm = empNm;
    return {
        getEmpNo:function(){
           return  _empNo
        },
        getEmpNm:function(){
            return  _empNm
         }
    }
}

const emp1 = Emp("1","kobain");
console.log(emp1.getEmpNo());
console.log(emp1.getEmpNm());




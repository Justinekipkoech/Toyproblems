let salary = prompt("Enter your Salary:");

let basicSalary=parseFloat(prompt('Enter your basic Salary'))
    let nHIF=parseFloat(prompt('NHIF'))
    let nssF=parseFloat(prompt('NSSF'))
let netsal=basicSalary;

let taxedAmount=(basicSalary-(nssF+nHIF))

if (taxedAmount>=24000) {
let firsttax=(taxedAmount/100)*10
    secondtax=(8333/100)*25
    thirdtax=0
}
    if((taxedAmount-32333)>0){
        thirdtax=(taxedAmount-(firsttax + secondtax + thirdtax))

    }
    else{
        console.log('netsal')
    }


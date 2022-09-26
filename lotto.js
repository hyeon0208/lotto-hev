

// id="rannum" 랜덤 숫자 뽑기 함수
function num() {


    let makeNum1 = Math.floor(Math.random() * 89999) + 10000;
    let makeNum2 = Math.floor(Math.random() * 89999) + 10000;
    let makeNum3 = Math.floor(Math.random() * 89999) + 10000;
    let makeNum4 = Math.floor(Math.random() * 89999) + 10000;
    let makeNum5 = Math.floor(Math.random() * 8999) + 1000;
    let makeNum6 = Math.floor(Math.random() * 89999) + 10000;
    let strNum1 = makeNum1.toString();
    let strNum2 = makeNum2.toString();
    let strNum3 = makeNum3.toString();
    let strNum4 = makeNum4.toString();
    let strNum5 = makeNum5.toString();
    let strNum6 = makeNum6.toString();
    

    return strNum1 + " " + strNum2 + " " + strNum3 + " " + strNum4 + " " + strNum5 + " " + strNum6;
}

document.getElementById('rannum').innerHTML = num();
document.getElementById('rannum1').innerHTML = num();


// function co() {

//     let arr = [1,0,0,0, , , , , , , ,]
//     console.log(arr);
//     for (let i = 4; i < arr.length; i++) {
//     arr.push(i) = Math.floor(Math.random() * 9) + 0;
// }
//     return arr.join("").split(" ");
// }


// console.log(co());